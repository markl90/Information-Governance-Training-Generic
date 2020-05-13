/*
 * adapt-simplecasestudy
 * License - 
 * Maintainers - Shubhendu Vaid <shubhendu.vaid@commelius.com>
 */
define(function(require) {
    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');


    var simplecasestudy = ComponentView.extend({
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
            this.$('.simplecasestudy-item-inner').css('margin-bottom', margin);
            if (this.isRTL) {
                this.$('.simplecasestudy-item-inner').css('margin-left', margin);
            } else {
                this.$('.simplecasestudy-item-inner').css('margin-right', margin);
            }
            var singleCompWidth = this.$('.simplecasestudy-item-inner').eq(0).width();
            var fullCompWidth = this.$('.simplecasestudy-item').outerWidth();
            var noOfCol = Math.floor(fullCompWidth / singleCompWidth);
            var actualWidth = (noOfCol * singleCompWidth) + (noOfCol * Number(this.model.get('boxMargin'))) + this.model.get('_widthOffset');
            var popupDesktopWidth = this.model.get('popupDesktopWidth');
            //this.$('.simplecasestudy-item').css('width', actualWidth);
            this.$('.simplecasestudy-item').css('width', this.model.get('componentDesktopWidth'));
            //this.$('.simplecasestudy-body').css('width', this.model.get('componentDesktopWidth'));
            var $widget = this.$('.simplecasestudy-widget'),
                totalWidth = $widget.outerWidth(),
                paddings = parseInt($widget.css('padding-left')) + parseInt($widget.css('padding-right'));
            totalWidth -= paddings;
            var feedWidth = totalWidth - actualWidth;
            if (popupDesktopWidth) {
                feedWidth = popupDesktopWidth;
            }
            //this.$('.simplecasestudy-popup').css('width', feedWidth);
            //this.$('.simplecasestudy-popup').css('margin-top', "-" + (parseInt(this.$('.simplecasestudy-inner').css("height").replace("px", "")) - parseInt(this.$('.simplecasestudy-inner').css("padding-top").replace("px", "")) - 3) + "px");
        },

        setDeviceSize: function() {
            //console.log("simplecasestudy:" + this.model.get("_id"), 'setDeviceSize');
            if (Adapt.device.screenSize.toLowerCase() === 'large') {
                this.$el.addClass('desktop').removeClass('mobile');
                this.model.set('_isDesktop', true);
                if (this.model.get('_selectedIndex') >= 0) {
                    if (this.model.get('_isClose') != 0) {
                        if (!this.$('.simplecasestudy-popup').is(":visible")) {
                            var child_pop = $(".notify").find(".active-child-notify-component-" + this.model.get('_id'));
                            var parent_pop = $(".notify").find(".active-notify-component-" + this.model.get('_id'));

                            if (parent_pop.attr("class") != undefined) {
                                parent_pop.find(".notify-popup-prompt-button").trigger("click"); //to close notify popup
                            }
                            if (child_pop.attr("class") != undefined) {
                                child_pop.removeClass("top_overwrite");
                                var child_pop2 = $(".notify").find(".active-child-notify-component-" + this.model.get('_id'));
                                if (child_pop2.attr('class') != undefined) {
                                    var id_pop = this.model.get('_id') + '-notify-' + this.model.get('_selectedIndex');
                                    $("[data-id='" + id_pop + "']").trigger("click");
                                    child_pop.find(".notify-popup-prompt-button").trigger("click"); //to close notify popup
                                }
                            }

                            this.$('.simplecasestudy-popup').show();
                        }
                    }
                }
                this.$('.simplecasestudy-item').css('width', this.model.get('componentDesktopWidth'));
                //this.$('.simplecasestudy-body').css('width', this.model.get('componentDesktopWidth'));
                //console.log("simplecasestudy:" + this.model.get("_id"), 'componentDesktopWidth', this.model.get('componentDesktopWidth'));
                this.setComponentsWidth();
            } else {
                this.$el.addClass('mobile').removeClass('desktop');
                this.model.set('_isDesktop', false)
                if (this.model.get('_selectedIndex') >= 0) {
                    if (this.model.get('_isClose') != 0) {
                        //this.$('.simplecasestudy-popup').hide();

                        if (this.$('.simplecasestudy-popup').is(":visible")) {
                            var child_pop = $(".notify").find(".active-child-notify-component-" + this.model.get('_id'));
                            var parent_pop = $(".notify").find(".active-notify-component-" + this.model.get('_id'));

                            this.$('.simplecasestudy-popup').hide();

                            if (parent_pop.attr('class') == undefined) {
                                this.openNotifyPopup(this.model.get('_selectedIndex'));
                            }

                            if (child_pop.attr('class') != undefined) {
                                child_pop.addClass("top_overwrite");
                            }
                        }
                    }
                }
                this.$('.simplecasestudy-item').css('width', this.model.get('componentSmartphoneWidth'));
                //this.$('.simplecasestudy-body').css('width', this.model.get('componentSmartphoneWidth'));
                this.$('.simplecasestudy-instruction').css('width', this.model.get('componentSmartphoneWidth'));
            }
        },

        events: {
            'click .simplecasestudy-item-inner': 'onItemClick',
            "click .simplecasestudy-content-notify button, .spsbutton1": "onPopupButtonClick",
        },

        onItemClick: function(event) {
            event.preventDefault();
            if ($(event.currentTarget).children('.simplecasestudy-item-title').children('.simplecasestudy-item-image-inner-default').css('display') == 'block') {
                $(event.currentTarget).children('.simplecasestudy-item-title').children('.simplecasestudy-item-image-inner-default').css('display', 'none');
                $(event.currentTarget).children('.simplecasestudy-item-title').children('.simplecasestudy-item-image-inner-visited').css('display', 'block');
            }
            var buttonID = $(event.currentTarget).data('id');
            var currentItem = buttonID.replace("item", "index");
            var currentItem1 = buttonID.replace("item", "id");
            this.$('.simplecasestudy-popup-item').hide().removeClass('active');
            this.$('.' + currentItem).show().addClass('active');
            this.$('.' + currentItem1).show().addClass('active');
            var currentIndex = this.$(event.currentTarget).index();
            this.model.set('_selectedIndex', currentIndex);
            this.model.set('_isClose', 1);
            //this.setVisited(currentIndex);
            this.setSelected(currentIndex);

            if (Adapt.device.screenSize.toLowerCase() === 'large') {
                if (this.model.get('_isClose') != 0) {
                    this.$('.simplecasestudy-popup').show();
                    if ($(".notify").find(".aactive-notify-component-" + this.model.get('_id')).attr("class") != undefined) {
                        //$(".notify-shadow").trigger("click"); //to close notify popup
                        $(".notify").find(".notify-popup-prompt-button").trigger("click"); //to close notify popup
                    }
                    //this.$('.simplecasestudy-popup').animate({opacity:'0'},0,function(){$('.simplecasestudy-popup').animate({opacity:'1'},300)});
                }
                this.$('.simplecasestudy-item').css('width', this.model.get('componentDesktopWidth'));
                //this.$('.simplecasestudy-body').css('width', this.model.get('componentDesktopWidth'));
                this.setComponentsWidth();
            } else {
                //this.showFeedback(currentIndex);
                if (this.model.get('_isClose') != 0) {
                    this.$('.simplecasestudy-popup').hide();
                    this.openNotifyPopup(currentIndex);
                }

                this.$('.simplecasestudy-item').css('width', this.model.get('componentSmartphoneWidth'));
                //this.$('.simplecasestudy-body').css('width', this.model.get('componentSmartphoneWidth'));
                this.$('.simplecasestudy-instruction').css('width', this.model.get('componentSmartphoneWidth'));
            }
        },
        onPopupButtonClick: function(event) {
            var buttonID = $(event.currentTarget).data('id');
            var currentItem = buttonID.replace(this.model.get('_id') + "-notify-", "");
            //console.log('onPopupButtonClick currentItem ', currentItem);
            //console.log('onPopupButtonClick buttonID ', buttonID);
            this.setVisited(currentItem);
            this.openChildNotifyPopup(currentItem);
        },
        openChildNotifyPopup: function(index) {
            if (Adapt.device.screenSize === 'large') {
                /*Check notify exists*/
                if($('.notify').length>0) {
                    return false;
                }
            } else {
                /*Check notify exists*/
                if($('.notify').length>1) {
                    return false;
                }
            }
            //var child_pop = $(".notify").find(".active-child-notify-component-" + this.model.get('_id'));
            var parent_pop = $(".notify").find(".active-notify-component-" + this.model.get('_id'));
            if (parent_pop.attr("class") != undefined) {
                parent_pop.find(".notify-popup-prompt-button").trigger("click"); //to close notify popup
            }

            var item = this.model.get('items')[index];
            //console.log('openChildNotifyPopup>>>> item: ', item);
            //console.log('openChildNotifyPopup>>>> index: ', index);

            var promptObject = {
                title: '<img class="image-inner-alignment" src="' + item.casestudy.casestudy_src + '" />',
                body: item.casestudy.casestudybody,
                _prompts: [{
                    promptText: "",
                    _callbackEvent: "pageLevelProgress:stayOnPage",
                }],
                _showIcon: false,
                childNotifyButtonHtml: "",
                _workingIndex: this.model.get('_id') + "-item-anchor-" + index,
                _classes: "notify-with-image custom-zindex openChildNotifyPopup active-child-notify-component-" + this.model.get('_id') + " working-index" + index
            }
            Adapt.trigger('notify:prompt', promptObject);
        },
        openNotifyPopup: function(index) {
            /*Check notify exists*/
            if($('.notify').length>0) {
                return false;
            }
            var item;
            (this.model.get('_isInlineBody') == true)? item = this.model.get('items')[index-2]:item = this.model.get('items')[index];
            //console.log('openNotifyPopup>>>> item: ', item);
            //console.log('openNotifyPopup>>>> index: ', index);

            var child_notify_button_html = '<button data-id="pop-' + this.model.get('_id') + '-notify-' + this.model.get('_selectedIndex') + '" class="child-popup-notify-inner-alignment spsbutton1"></button>';
            var content = "";
            var applyclass = "";
            if (item.graphic.feedback_src != "") {
                content = '<img class="image-inner-alignment" src="' + item.graphic.feedback_src + '" />';
                applyclass = "notify-with-image";
            } else {
                content = '<div class="image-inner-alignment">' + item.feedbacktitle + '</div>';
                applyclass = "notify-without-image openNotifyPopup active-notify-component-" + this.model.get('_id');
            }
            var promptObject = {
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
            //console.log('setVisited>>>> item: ', item);
            //console.log('setVisited>>>> index: ', index);
            item._isVisited = true;
            this.$('.simplecasestudy-item-title').eq(index).addClass('visited');
            this.checkCompletionStatus();

            if (this.model.get('_isResetOnRevisit') == false) {
                if (this.$('.simplecasestudy-item-title').eq(index).hasClass("visited")) {
                    this.$('.simplecasestudy-item-title').eq(index).addClass('visited-icon');
                }
            }
        },
        setSelected: function(index) {
            this.$('.simplecasestudy-item-title').removeClass('selected');
            var item = this.model.get('items')[index];
            //console.log('setSelected>>>> item: ', item);
            //console.log('setSelected>>>> index: ', index);
            this.$('.simplecasestudy-item-title').eq(index).addClass('selected');
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
                    if (this.$('.simplecasestudy-item-title').eq(i).hasClass("visited")) {
                        this.$('.simplecasestudy-item-title').eq(i).addClass('visited-icon');
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
            //console.log('showFeedback>>>> item: ', item);
            //console.log('showFeedback>>>> index: ', index);
            if (item) {
                this.model.set({
                    feedbackTitle: item.feedbacktitle,
                    feedbackMessage: item.feedbackbody
                });
                Adapt.trigger('questionView:showFeedback', this);
            }
        }
    });

    Adapt.register("simplecasestudy", simplecasestudy);
    return simplecasestudy;

});