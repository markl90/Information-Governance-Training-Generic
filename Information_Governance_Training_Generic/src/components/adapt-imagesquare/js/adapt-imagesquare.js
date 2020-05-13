/*
 * adapt-imagesquare
 * License - 
 * Maintainers - Shubhendu Vaid <shubhendu.vaid@commelius.com>
 */
define(function (require) {
    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');


    var ImageSquare = ComponentView.extend({
        isRTL: false,
        preRender: function () {

            this.isRTL = $('html').hasClass('dir-rtl');

            this.listenTo(Adapt, 'device:changed', this.changedControl, this);
            this.listenTo(Adapt, 'device:resize', this.resizeControl, this);
            this.model.set('_selectedIndex', -1);
            this.model.set('_isClose', 0);
            this.model.set('_widthOffset', 10);
        },

        postRender: function () {
            this.$el.imageready(_.bind(function () {
                this.setReadyStatus();
                this.setDeviceSize();
            }, this))

            this.setVisitedIcon();

            //this.$('.imagesquare-inner').parent().parent().css('background-color', '#ffffff');
        },

        resizeControl: function () {
            this.setDeviceSize();
        },

        changedControl: function () {
            this.setDeviceSize();
        },

        setComponentsWidth: function () {
            var margin = this.model.get('boxMargin') + 'px';
            this.$('.imagesquare-item-inner').css('margin-bottom', margin);
            if (this.isRTL) {
                this.$('.imagesquare-item-inner').css('margin-left', margin);
            } else {
                this.$('.imagesquare-item-inner').css('margin-right', margin);
            }
            var singleCompWidth = this.$('.imagesquare-item-inner').eq(0).width();
            var fullCompWidth = this.$('.imagesquare-item').outerWidth();
            var noOfCol = Math.floor(fullCompWidth / singleCompWidth);
            var actualWidth = (noOfCol * singleCompWidth) + (noOfCol * Number(this.model.get('boxMargin'))) + this.model.get('_widthOffset');
            var popupDesktopWidth = this.model.get('popupDesktopWidth');
            //this.$('.imagesquare-item').css('width', actualWidth);
            //this.$('.imagesquare-body').css('width', actualWidth);
            //this.$('.imagesquare-item, .imagesquare-body, .imagesquare-instruction').css('width', this.model.get('componentDesktopWidth'));
            this.$('.imagesquare-item').css('width', this.model.get('componentDesktopWidth'));
            //this.$('.imagesquare-body').css('width', this.model.get('componentDesktopWidth'));
            var $widget = this.$('.imagesquare-widget'),
                totalWidth = $widget.outerWidth(),
                paddings = parseInt($widget.css('padding-left')) + parseInt($widget.css('padding-right'));
            totalWidth -= paddings;
            var feedWidth = totalWidth - actualWidth;
            if (popupDesktopWidth) {
                feedWidth = popupDesktopWidth;
            }
            //this.$('.imagesquare-popup').css('width', feedWidth);
            //this.$('.imagesquare-popup').css('margin-top', "-" + (parseInt(this.$('.imagesquare-inner').css("height").replace("px", "")) - parseInt(this.$('.imagesquare-inner').css("padding-top").replace("px", "")) + 11) + "px");
        },

        setDeviceSize: function () {
            //console.log("ImageSquare:" + this.model.get("_id"), 'setDeviceSize');
            if (Adapt.device.screenSize.toLowerCase() === 'large') {
                this.$el.addClass('desktop').removeClass('mobile');
                this.model.set('_isDesktop', true);
                if (this.model.get('_selectedIndex') >= 0) {
                    if (this.model.get('_isClose') != 0) {
                        if ($(".notify-popup").hasClass("active-notify-component-" + this.model.get('_id'))) {
                            $(".notify-shadow").trigger("click"); //to close notify popup
                        }
                        this.$('.imagesquare-popup').show();
                    }
                }

                //this.$('.imagesquare-item, .imagesquare-body, .imagesquare-instruction').css('width', this.model.get('componentDesktopWidth'));
                this.$('.imagesquare-item').css('width', this.model.get('componentDesktopWidth'));
                //this.$('.imagesquare-body').css('width', this.model.get('componentDesktopWidth'));
                //console.log("ImageSquare:" + this.model.get("_id"), 'componentDesktopWidth', this.model.get('componentDesktopWidth'));
                this.setComponentsWidth();
            } else {
                this.$el.addClass('mobile').removeClass('desktop');
                this.model.set('_isDesktop', false)
                if (this.model.get('_selectedIndex') >= 0) {
                    if (this.model.get('_isClose') != 0) {
                        if (this.$('.imagesquare-popup').is(":visible")) {
                            //this.$('.imagesquare-popup').hide();
                            //if ($(".notify").css("visibility") != "visible") {
                            //    this.openNotifyPopup(this.model.get('_selectedIndex'));
                            //}
                            var parent_pop = $(".notify").find(".active-notify-component-" + this.model.get('_id'));

                            this.$('.imagesquare-popup').hide();

                            if (parent_pop.attr('class') == undefined) {
                                this.openNotifyPopup(this.model.get('_selectedIndex'));
                            }
                        }
                    }
                }
                //this.$('.imagesquare-item, .imagesquare-body, .imagesquare-instruction').css('width', this.model.get('componentSmartphoneWidth'));
                this.$('.imagesquare-item').css('width', this.model.get('componentSmartphoneWidth'));
                //this.$('.imagesquare-body').css('width', this.model.get('componentSmartphoneWidth'));
            }
        },

        events: {
            'click .imagesquare-item-inner': 'onItemClick'
        },

        onItemClick: function (event) {
            event.preventDefault();
            if ($(event.currentTarget).children('.imagesquare-item-title').children('.imagesquare-item-image-inner-default').css('display') == 'block') {
                $(event.currentTarget).children('.imagesquare-item-title').children('.imagesquare-item-image-inner-default').css('display', 'none');
                $(event.currentTarget).children('.imagesquare-item-title').children('.imagesquare-item-image-inner-visited').css('display', 'block');
            }
            var buttonID = $(event.currentTarget).data('id');
            var currentItem = buttonID.replace("item", "index");
            var currentItem1 = buttonID.replace("item", "id");
            this.$('.imagesquare-popup-item').hide().removeClass('active');
            this.$('.' + currentItem).show().addClass('active');
            this.$('.' + currentItem1).show().addClass('active');
            var currentIndex = this.$(event.currentTarget).index();
            this.model.set('_selectedIndex', currentIndex);
            this.model.set('_isClose', 1);
            this.setVisited(currentIndex);
            this.setSelected(currentIndex);

            if (Adapt.device.screenSize.toLowerCase() === 'large') {
                if (this.model.get('_isClose') != 0) {
                    this.$('.imagesquare-popup').show();
                    if ($(".notify-popup").hasClass("active-notify-component-" + this.model.get('_id'))) {
                        $(".notify-shadow").trigger("click"); //to close notify popup
                    }
                }
                //this.$('.imagesquare-item, .imagesquare-body, .imagesquare-instruction').css('width', this.model.get('componentDesktopWidth'));
                this.$('.imagesquare-item').css('width', this.model.get('componentDesktopWidth'));
                //this.$('.imagesquare-body').css('width', this.model.get('componentDesktopWidth'));
                this.setComponentsWidth();
            } else {
                //this.showFeedback(currentIndex);
                if (this.model.get('_isClose') != 0) {
                    this.$('.imagesquare-popup').hide();
                    this.openNotifyPopup(currentIndex);
                }
                //this.$('.imagesquare-item, .imagesquare-body, .imagesquare-instruction').css('width', this.model.get('componentSmartphoneWidth'));
                this.$('.imagesquare-item').css('width', this.model.get('componentSmartphoneWidth'));
                //this.$('.imagesquare-body').css('width', this.model.get('componentSmartphoneWidth'));
            }
        },

        openNotifyPopup: function (index) {
            var item;
            (this.model.get('_isInlineBody') == true)? item = this.model.get('items')[index-2]:item = this.model.get('items')[index];
            var child_notify_button_html = '';
            var content = "";
            var applyclass = "";
            if (item.graphic.feedback_src != "") {
                content = '<img class="image-inner-alignment" src="' + item.graphic.feedback_src + '" title="' + item.feedbacktitle + '" />';
                applyclass = "notify-with-image openNotifyPopup active-notify-component-" + this.model.get('_id');
            }
            else {
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

        setVisited: function (index) {
            var item;
            (this.model.get('_isInlineBody') == true)? item = this.model.get('items')[index-2]:item = this.model.get('items')[index];
            
            //console.log('>>>>>>>>>>>>>>> index' , index);
            //console.log('>>>>>>>>>>>>>>> item' , item);
            if(item == undefined) return;
            item._isVisited = true;
            this.$('.imagesquare-item-title').eq(index).addClass('visited');
            this.checkCompletionStatus();

            if (this.model.get('_isResetOnRevisit') == false) {
                if (this.$('.imagesquare-item-title').eq(index).hasClass("visited")) {
                    this.$('.imagesquare-item-title').eq(index).addClass('visited-icon');
                }
            }
        },

        setSelected: function (index) {
            this.$('.imagesquare-item-title').removeClass('selected');
            var item = this.model.get('items')[index];
            this.$('.imagesquare-item-title').eq(index).addClass('selected');
            this.checkCompletionStatus();
        },

        getVisitedItems: function () {
            return _.filter(this.model.get('items'), function (item) {
                return item._isVisited;
            });
        },

        setVisitedIcon: function () {
            if (this.model.get('_isResetOnRevisit') == false) {
                return _.filter(this.model.get('items'), function (item, i) {
                    if (this.$('.imagesquare-item-title').eq(i).hasClass("visited")) {
                        this.$('.imagesquare-item-title').eq(i).addClass('visited-icon');
                    }
                });
            }
        },

        checkCompletionStatus: function () {
            //if (!this.model.get('_isComplete')) {
            if (this.getVisitedItems().length == this.model.get('items').length) {
                this.setCompletionStatus();
                this.changeInstruction();
            }
            //}
        },


        showFeedback: function (index) {
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

    Adapt.register("imagesquare", ImageSquare);
    return ImageSquare;
});
