/*
 * adapt-reveal-steps
 * License - 
 * Maintainers - Shubhendu Vaid <shubhendu.vaid@commelius.com>
 */
define(function(require) {
    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');
    var RevealSteps = ComponentView.extend({
        isRTL: false,
        preRender: function() {
            this.isRTL = $('html').hasClass('dir-rtl');
            this.listenTo(Adapt, 'device:changed', this.changedControl, this);
            this.listenTo(Adapt, 'device:resize', this.resizeControl, this);
            this.model.set('_selectedIndex', -1);
            this.model.set('_isClose', 0);
            this.model.set('_widthOffset', 10);
        },

        postRender: function() {
            this.$el.imageready(_.bind(function() {
                this.setReadyStatus();
                this.setDeviceSize();
            }, this))

            this.setVisitedIcon();
        },

        resizeControl: function() {
            this.setDeviceSize();
        },

        changedControl: function() {
            this.setDeviceSize();
        },

        setComponentsWidth: function() {
            var margin = this.model.get('boxMargin') + 'px';
            this.$('.reveal-steps-item-inner').css('margin-bottom', margin);
            if (this.isRTL) {
                this.$('.reveal-steps-item-inner').css('margin-left', margin);
            } else {
                this.$('.reveal-steps-item-inner').css('margin-right', margin);
            }
            var singleCompWidth = this.$('.reveal-steps-item-inner').eq(0).width(),
                fullCompWidth = this.$('.reveal-steps-item').outerWidth(),
                noOfCol = Math.floor(fullCompWidth / singleCompWidth),
                actualWidth = (noOfCol * singleCompWidth) + (noOfCol * Number(this.model.get('boxMargin'))) + this.model.get('_widthOffset'),
                popupDesktopWidth = this.model.get('popupDesktopWidth');
                this.$('.reveal-steps-item, .reveal-steps-instruction').css('width', this.model.get('componentDesktopWidth'));
            var $widget = this.$('.reveal-steps-widget'),
                totalWidth = $widget.outerWidth(),
                paddings = parseInt($widget.css('padding-left')) + parseInt($widget.css('padding-right'));
            totalWidth -= paddings;
            var feedWidth = totalWidth - actualWidth;
            if (popupDesktopWidth) {
                feedWidth = popupDesktopWidth;
            }
        },

        setDeviceSize: function() {
            if (Adapt.device.screenSize.toLowerCase() === 'large') {
                this.$el.addClass('desktop').removeClass('mobile');
                this.model.set('_isDesktop', true);
                if (this.model.get('_selectedIndex') >= 0) {
                    if (this.model.get('_isClose') != 0) {
                        if ($(".notify-popup").hasClass("active-notify-component-" + this.model.get('_id'))) {
                            $(".notify-shadow").trigger("click"); //to close notify popup
                        }
                        this.$('.reveal-steps-popup').show();
                    }
                }
                this.$('.reveal-steps-item, .reveal-steps-instruction').css('width', this.model.get('componentDesktopWidth'));
                this.setComponentsWidth();
            } else {
                this.$el.addClass('mobile').removeClass('desktop');
                this.model.set('_isDesktop', false)
                if (this.model.get('_selectedIndex') >= 0) {
                    if (this.model.get('_isClose') != 0) {
                        if (this.$('.reveal-steps-popup').is(":visible")) {
                            var parent_pop = $(".notify").find(".active-notify-component-" + this.model.get('_id'));
                            this.$('.reveal-steps-popup').hide();
                            if (parent_pop.attr('class') == undefined) {
                                this.openNotifyPopup(this.model.get('_selectedIndex'));
                            }
                        }
                    }
                }
                this.$('.reveal-steps-item, .reveal-steps-instruction').css('width', this.model.get('componentSmartphoneWidth'));
            }
        },

        events: {
            'click .reveal-steps-item-inner': 'onItemClick'
        },

        onItemClick: function(event) {
            event.preventDefault();
            if ($(event.currentTarget).children('.reveal-steps-item-title').children('.reveal-steps-item-image-inner-default').css('display') == 'block') {
                $(event.currentTarget).children('.reveal-steps-item-title').children('.reveal-steps-item-image-inner-default').css('display', 'none');
                $(event.currentTarget).children('.reveal-steps-item-title').children('.reveal-steps-item-image-inner-visited').css('display', 'block');
            }
            var buttonID = $(event.currentTarget).data('id'),
                currentItem = buttonID.replace("item", "index"),
                currentItem1 = buttonID.replace("item", "id");
            this.$('.reveal-steps-popup-item').hide().removeClass('active');
            this.$('.' + currentItem).show().addClass('active');
            this.$('.' + currentItem1).show().addClass('active');
            var currentIndex = this.$(event.currentTarget).index();
            this.model.set('_selectedIndex', currentIndex);
            this.model.set('_isClose', 1);
            this.setVisited(currentIndex);
            this.setSelected(currentIndex);

            if (Adapt.device.screenSize.toLowerCase() === 'large') {
                if (this.model.get('_isClose') != 0) {
                    this.$('.reveal-steps-popup').show();
                    if ($(".notify-popup").hasClass("active-notify-component-" + this.model.get('_id'))) {
                        $(".notify-shadow").trigger("click"); //to close notify popup
                    }
                }
                this.$('.reveal-steps-item, .reveal-steps-instruction').css('width', this.model.get('componentDesktopWidth'));
                this.setComponentsWidth();
            } else {
                if (this.model.get('_isClose') != 0) {
                    this.$('.reveal-steps-popup').hide();
                    this.openNotifyPopup(currentIndex);
                }
                this.$('.reveal-steps-item, .reveal-steps-instruction').css('width', this.model.get('componentSmartphoneWidth'));
            }
        },

        openNotifyPopup: function(index) {
            var item = this.model.get('items')[index],
                child_notify_button_html = '',
                content = "",
                applyclass = "",
                promptObject = {
                    title: content,
                    body: item.feedbackbody,
                    _prompts: [{
                        promptText: "",
                        _callbackEvent: "pageLevelProgress:stayOnPage",
                    }],
                    _showIcon: false,
                    childNotifyButtonHtml: child_notify_button_html,
                    _classes: applyclass
                }
            Adapt.trigger('notify:prompt', promptObject);
        },

        setVisited: function(index) {
            var item = this.model.get('items')[index];
            item._isVisited = true;
            this.$('.reveal-steps-item-title').eq(index).addClass('visited');
            this.checkCompletionStatus();

            if (this.model.get('_isResetOnRevisit') == false) {
                if (this.$('.reveal-steps-item-title').eq(index).hasClass("visited")) {
                    this.$('.reveal-steps-item-title').eq(index).addClass('visited-icon');
                }
            }
        },

        setSelected: function(index) {
            this.$('.reveal-steps-item-title').removeClass('selected');
            var item = this.model.get('items')[index];
            this.$('.reveal-steps-item-title').eq(index).addClass('selected');
            this.checkCompletionStatus();
        },

        getVisitedItems: function() {
            return _.filter(this.model.get('items'), function(item) {
                return item._isVisited;
            });
        },

        setVisitedIcon: function() {
            if (this.model.get('_isResetOnRevisit') == false) {
                return _.filter(this.model.get('items'), function(item, i) {
                    if (this.$('.reveal-steps-item-title').eq(i).hasClass("visited")) {
                        this.$('.reveal-steps-item-title').eq(i).addClass('visited-icon');
                    }
                });
            }
        },

        checkCompletionStatus: function() {
            //if (!this.model.get('_isComplete')) {
            if (this.getVisitedItems().length == this.model.get('items').length) {
                this.setCompletionStatus();
                this.changeInstruction();
            }
            //}
        },

        showFeedback: function(index) {
            var item = this.model.get('items')[index];
            if (item) {
                this.model.set({
                    feedbackTitle: item.feedbacktitle,
                    feedbackMessage: item.feedbackbody
                });
                Adapt.trigger('questionView:showFeedback', this);
            }
        }
    });

    Adapt.register("reveal-steps", RevealSteps);
    return RevealSteps;
});