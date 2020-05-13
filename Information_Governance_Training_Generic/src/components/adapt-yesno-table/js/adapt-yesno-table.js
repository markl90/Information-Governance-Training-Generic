define(function (require) {
    var QuestionView = require('coreViews/questionView');
    var Adapt = require('coreJS/adapt');

    var YesNoTableV3 = QuestionView.extend({
        _tg: function () {
            return "YesNoTableV3:" + this.model.get('_id');
        },

        events: {
            "click .yesno-table-column-radio-button, click .yesno-table-column-radio-button button": "onRadioButtonClicked"
        },

        setupQuestion: function () {
            //
            //defaults
            var globals = Adapt.course.get('_globals');
            if (!this.model.has("_showDontKnow")) {
                this.model.set("_showDontKnow", false);
            }
            if (!this.model.has("_columnLabels")) {
                //get from globals
                if (globals && globals._components && globals._components._yesnoTable && globals._components._yesnoTable._columnLabels) {
                    this.model.set("_columnLabels", globals._components._yesnoTable._columnLabels);
                } else {
                    this.model.set("_columnLabels", {
                        "col0": "Yes",
                        "col1": "Don't know",
                        "col2": "No"
                    });
                }
            }
            this._isIE = $('html').hasClass('ie');
            if (this._isIE) {
                try {

                    this._ariaSelectedLabel = ", " + globals._components._yesnoTable._accAnswer.selection + ".";
                } catch (e) {
                    console.error("Missing entry in globals for selection, '_components._yesnoTable._accAnswer.selection'.", e);
                }
            }

            //convert 'shouldBeSelected' into '_correctIndex' when '_correctIndex' doesnt exist - backward compatibility with old JSON
            var ci = '_correctIndex',
                sbs = 'shouldBeSelected';
            _.each(this.model.get('_items'), function (item, index) {
                if (!item.hasOwnProperty(ci) && item.hasOwnProperty(sbs)) {
                    //mapping true to column 0 and false to column 2
                    item[ci] = item[sbs] === true ? 0 : 2;
                }
            }, this);
            //create correct answer string
            this.accGenerateCorrectAnswer();
        },
        /*
        onSubmitClicked: function () {
            QuestionView.prototype.onSubmitClicked.apply(this, arguments);
            if (this.canSubmit()) {

            }
        },
        */
        onSubmitted: function () {
            //user answer
            _.defer(_.bind(function () {
                this.accGenerateMyAnswer();
                if (!this.model.get('_canShowFeedback')) {
                    this.populateAccAnswer(false);
                } else {
                    //wait for closing of the popup
                    Adapt.once('popup:closed', _.bind(function () {
                        this.populateAccAnswer(false);
                        var $element = this.$('.accessibility-answer span');
                        //focus with a delay
                        _.delay(function () {
                            $element.a11y_focus();
                        }, 600);
                    }, this));
                }

            }, this));
            this.changeInstruction();
        },
        canSubmit: function () {
            var $selection = this.$('.yesno-table-row.component-item .yesno-table-column-radio.selected'),
                length = $selection.length;
            //console.log(this._tg(), "canSubmit", length);
            if (!_.isUndefined($selection) && length > 0) {
                return this.model.get('_items').length === length;
            }
            return false;
        },

        resetQuestionOnRevisit: function (type) {
            this.setAllItemsEnabled(true);
            this.resetQuestion();
        },

        restoreUserAnswers: function () {
            //console.log(this._tg(), "restoreUserAnswers");
            if (!this.model.get("_isSubmitted")) return;

            var items = this.model.get("_items"),
                ua = this.model.get("_userAnswer");

            _.each(items, function (items, index) {
                var $row = this.$('.yesno-table-row.component-item.item-' + index),
                    $cell = $row.find('.column-' + ua[index]);

                this.selectItem($row, $cell);
            }, this);

            this.accGenerateMyAnswer();
            this.setQuestionAsSubmitted();
            this.markQuestion();
            this.setScore();
            this.showMarking();
            this.setupFeedback();
        },

        setScore: function () {
            var questionWeight = this.model.get('_questionWeight');
            var answeredCorrectly = this.model.get('_isCorrect');
            var score = answeredCorrectly ? questionWeight : 0;
            this.model.set('_score', score);
        },

        storeUserAnswer: function () {
            var ua = this.model.get('_selectedItems') || [];
            //console.log(this._tg(), "storeUserAnswer", ua);
            this.model.set('_userAnswer', ua.concat());
        },
        resetUserAnswer: function () {
            this.model.set('_userAnswer', []);
        },

        disableQuestion: function () {
            //console.log(this._tg(), "disableQuestion");
            this.setAllItemsEnabled(false);
        },

        resetQuestion: function () {
            //console.log(this._tg(), "resetQuestion");
            this.deselectAllItems();

            this.model.set({
                '_selectedItems': [],
                _isAtLeastOneCorrectSelection: false
            });
            this.$('.yesno-table-row.component-item').removeClass('correct incorrect');
            _.defer(_.bind(function () {
                this.clearAccAnswer();
            }, this));

        },

        isCorrect: function () {
            var ua = this.model.get('_userAnswer') || [];
            if (ua.length === 0) return false;
            var ca = [];
            _.each(this.model.get('_items'), function (item, index) {
                ca[index] = item["_correctIndex"];
                if (ua[index] === ca[index]) {
                    this.model.set('_isAtLeastOneCorrectSelection', true);
                }
            }, this);

            return ua.join() === ca.join();
        },

        isPartlyCorrect: function () {
            return this.model.get('_isAtLeastOneCorrectSelection');
        },

        showMarking: function () {

            var ua = this.model.get('_userAnswer') || [];
            _.each(this.model.get('_items'), function (item, index) {

                var $row = this.$('.yesno-table-row.component-item.item-' + index),
                    correct = ua[index] == item._correctIndex;

                $row.removeClass('correct incorrect').addClass(correct ? 'correct' : 'incorrect');

            }, this);
        },

        showCorrectAnswer: function () {
            //console.log(this._tg(), "showCorrectAnswer");
            this.deselectAllItems();
            _.each(this.model.get('_items'), function (items, index) {
                var $row = this.$('.yesno-table-row.component-item.item-' + index),
                    $cell = $row.find('.column-' + items._correctIndex);

                $row.removeClass('correct incorrect');
                this.selectItem($row, $cell);
            }, this);
            //hide
            this.$el.find('.column-0 button,.column-1 button,.column-2 button').a11y_cntrl_enabled(false);
            this.$el.find('.yesno-table-column-text span').a11y_cntrl_enabled(false);

            _.defer(_.bind(function () {
                this.populateAccAnswer(true);
            }, this));

        },

        hideCorrectAnswer: function () {
            //console.log(this._tg(), "hideCorrectAnswer");
            this.deselectAllItems();
            var ua = this.model.get('_userAnswer') || [];
            _.each(this.model.get('_items'), function (items, index) {
                var $row = this.$('.yesno-table-row.component-item.item-' + index),
                    $cell = $row.find('.column-' + ua[index]);
                this.selectItem($row, $cell);
            }, this);
            //hide
            this.$el.find('.column-0 button,.column-1 button,.column-2 button').a11y_cntrl_enabled(false);
            this.$el.find('.yesno-table-column-text span').a11y_cntrl_enabled(false);
            this.showMarking();
            _.defer(_.bind(function () {
                this.populateAccAnswer(false);
            }, this));
        },

        enableQuestion: function () {
            //console.log(this._tg(), "enableQuestion");
            this.setAllItemsEnabled(true);
        },

        setAllItemsEnabled: function (isEnabled) {
            _.each(this.model.get('_items'), function (item, index) {
                var $row = this.$('.yesno-table-row.component-item.item-' + index);
                $row.removeClass('disabled').addClass(isEnabled ? '' : 'disabled');


                //
                $row.find('.column-0 button,.column-1 button,.column-2 button').a11y_cntrl_enabled(isEnabled);
                $row.find('.yesno-table-column-text span').a11y_cntrl_enabled(isEnabled);

            }, this);
        },


        selectItem: function ($row, $col) {
            //console.log(this._tg(), "selectItem");
            var row = this.rowIndex($row),
                col = this.cellIndex($col);
            $row.children('.column-0,.column-1,.column-2').removeClass('selected');
            
            $col.addClass('selected');
            if (this._isIE) {
                //remove selection from the aria labels
                var btns = $row.find('.column-0 button,.column-1 button,.column-2 button'),
                    label,
                    i,
                    length = btns.length;
                //console.log(this._tg(), "selectItem", "btns", btns);
                for (i = 0; i < length; i++) {
                    //console.log(this._tg(), "selectItem", "#i", i, btns[i]);
                        label = $(btns[i]).attr('aria-label');
                        label = label.split(this._ariaSelectedLabel).join("");
                        $(btns[i]).attr('aria-label', label);
                }
                //add selection to the selected button
                label = $col.children('button').attr('aria-label') + this._ariaSelectedLabel;
                $col.children('button').attr('aria-label', label);
            } else {
                //aria-selected
                //console.log(this._tg(), "!IE", "$row.children('.column-0 button,.column-1 button,.column-2 button')", $row, $row.children('.column-0 button,.column-1 button,.column-2 button'));
                $row.find('.column-0 button,.column-1 button,.column-2 button').attr('aria-selected', false);
                //$row.children('.column-0,.column-1,.column-2').children('button').attr('aria-selected', false);


                $col.children('button').attr('aria-selected', true);
            }

            var selectedItems = this.model.get('_selectedItems') || [];
            selectedItems[row] = col;
            this.model.set('_selectedItems', selectedItems);
        },

        deselectAllItems: function () {
            //console.log(this._tg(), "deselectAllItems");
            this.$el.find('.column-0,.column-1,.column-2').removeClass('selected');

            //enable
            this.$el.find('.column-0 button,.column-1 button,.column-2 button').a11y_cntrl_enabled(true);
            this.$el.find('.yesno-table-column-text span').a11y_cntrl_enabled(true);
        },

        /**
         * Returns an index number parsed from the cells class attribute (column-N)
         * @param {Object} $cell cell object as found by jQuery
         * @protected
         */
        cellIndex: function ($cell) {
            if ($cell) {
                if ($cell.hasClass('column-0')) {
                    return 0;
                }
                if ($cell.hasClass('column-1')) {
                    return 1;
                }
                if ($cell.hasClass('column-2')) {
                    return 2;
                }
            }
            return -1;
        },
        /**
         * Returns an index number parsed from the rows class attribute (item-N)
         * @param {Object} $row row object as found by jQuery
         * @protected
         */
        rowIndex: function ($row) {
            if ($row) {
                var m = $row.attr('class').match(/(?:\W|^)item-(\d\d*)(?!\w)/);
                if (_.isUndefined(m)) {
                    return -1;
                }
                return parseInt(m[1]); //$1
            }
            return -1;
        },

        onRadioButtonClicked: function (e) {
            e.preventDefault();
            if (this.model.get('_isEnabled') && !this.model.get('_isSubmitted')) {
                var $cell = this.$(e.currentTarget);
                var $row = $cell.parent('.yesno-table-row.component-item');

                this.selectItem($row, $cell);
            }
        },
        onQuestionRendered: function () {
            //console.log(this._tg(), "onQuestionRendered");

            this.restoreUserAnswers();
            if (this._isIE) {
                //ged rid of role
                this.$el.find('.column-0 button,.column-1 button,.column-2 button').removeAttr('role');
            }
            if ($('html').hasClass('ie8')) {
                this.ie8_assignTableClasses();
            }

            this.setAllItemsEnabled(!this.model.get("_isSubmitted"));
            this.setReadyStatus();
        },
        ie8_assignTableClasses: function () {
            var items = this.model.get('_items'),
                length = items.length;
            $('.yesno-table-row.yesno-table-row-title').addClass('even first');
            _.each(items, function (items, index) {
                var $row = this.$('.yesno-table-row.component-item.item-' + index);

                $row.addClass((index + 1) % 2 ? 'even' : 'odd');
                if (index == length - 1) $row.addClass('last');

            }, this);

        },

        clearAccAnswer: function () {
            //console.log(this._tg(), "clearAccAnswer");
            //clear the correct answer
            this.$('.accessibility-answer span').html("").a11y_cntrl_enabled(false);
        },
        populateAccAnswer: function (isCorrectAnswer) {
            var answer = "";
            if (isCorrectAnswer) {
                answer = this.accCorrectAnswer;
            } else {
                answer = this.accMyAnswer;
            }
            this.clearAccAnswer();
            //console.log(this._tg(), "populateAccAnswer:isCorrectAnswer", arguments);
            var $element = this.$('.accessibility-answer span');
            $element.html(answer).a11y_cntrl_enabled(true);
            //focus with a delay
            _.delay(function () {
                $element.a11y_focus();
            }, 100);
        },

        mergeObjects: function (a, defaults) {
            //console.log(this._tg(), "mergeObjects", a, defaults);
            if (a == null && defaults == null) return a;
            if (defaults == null) return _.extendOwn({}, a);

            //here we have a copy of 'defaults' that will be overriden by 'a'
            var o = _.extendOwn({}, defaults),
                aKeys = _.keys(a),
                l = aKeys.length;
            for (var i = 0; i < l; i++) {
                var key = aKeys[i];
                if (_.isObject(a[key])) {
                    o[key] = this.mergeObjects(a[key], defaults[key]);
                } else if (a[key] !== void 0) {
                    o[key] = a[key];
                }
            }
            //
            return o;
        },

        /**
         * @protected
         */
        accGenerateMyAnswer: function () {
            //console.log(this._tg(), "accGenerateMyAnswer");
            var _accAnswer = this.mergeObjects(this.model.get("_accAnswer"), this.model.get("_globals")._components._yesnoTable._accAnswer),
                pattern = _accAnswer._pattern.myAnswer || "",
                reg = /%([^ %]+)%/g,
                new_line = _accAnswer.newLine || "\r\n",
                _columns = this.model.get("_columnLabels"),
                _tg = this._tg();


            this.accMyAnswer = _accAnswer.myAnswerPrefix + new_line;
            //console.log(_tg, "accGenerateMyAnswer", "pattern", pattern);
            //console.log(_tg, "accGenerateMyAnswer", "reg", reg);
            //console.log(_tg, "accGenerateMyAnswer", "_accAnswer", _accAnswer);
            var ua = this.model.get('_userAnswer') || [];
            _.each(this.model.get('_items'), function (item, index) {

                var correct = ua[index] == item._correctIndex,
                    r = pattern.replace(reg, function (m, $1, offset, string) {
                        //console.log(_tg, "accGenerateMyAnswer", index, "replace", m, $1);
                        try {
                            switch ($1) {
                                case 'text':
                                    return item.text;
                                case 'choice':
                                    return _columns["col" + ua[index]];
                                case '_rating':
                                    return _accAnswer[$1][(correct ? "correct" : "incorrect")];
                                default:
                                    return _accAnswer[$1];
                            }
                        } catch (e) {
                            console.error(e);
                        }
                    });

                //console.log(_tg, "accGenerateMyAnswer", "#each", index, r);

                this.accMyAnswer += r + new_line;

            }, this);



            //console.log(this._tg(), "accGenerateMyAnswer", "this.accMyAnswer", this.accMyAnswer);
        },
        /**
         * @protected
         */
        accGenerateCorrectAnswer: function () {
            //console.log(this._tg(), "accGenerateCorrectAnswer");
            var _accAnswer = this.mergeObjects(this.model.get("_accAnswer"), this.model.get("_globals")._components._yesnoTable._accAnswer),
                pattern = _accAnswer._pattern.correctAnswer || "",
                reg = /%([^ %]+)%/g,
                new_line = _accAnswer.newLine || "\r\n",
                _columns = this.model.get("_columnLabels"),
                _tg = this._tg();


            this.accCorrectAnswer = _accAnswer.correctAnswerPrefix + new_line;
            //console.log(_tg, "accGenerateCorrectAnswer", "pattern", pattern);
            //console.log(_tg, "accGenerateCorrectAnswer", "reg", reg);
            //console.log(_tg, "accGenerateCorrectAnswer", "_accAnswer", _accAnswer);


            _.each(this.model.get('_items'), function (item, index) {
                var i = item["_correctIndex"],
                    r = pattern.replace(reg, function (m, $1, offset, string) {
                        //console.log(_tg, "accGenerateCorrectAnswer", index, "replace", m, $1);
                        try {
                            switch ($1) {
                                case 'text':
                                    return item.text;
                                case 'choice':
                                    return _columns["col" + i];
                                case '_rating':
                                    return "";
                                default:
                                    return _accAnswer[$1];
                            }
                        } catch (e) {
                            console.error(e);
                        }
                    });

                //console.log(_tg, "accGenerateCorrectAnswer", "#each", index, r);

                this.accCorrectAnswer += r + new_line;

            }, this);

        }
    });

    Adapt.register("yesno-table", YesNoTableV3);
    return YesNoTableV3;
});
