/*jslint nomen:true, plusplus:true */
/*global define:false, console:false, $:false, _:false */
define(function (require) {
    "use strict";
    require('./lib/jquery.ba-throttle-debounce.js');
    var TAG = "SectionHeadings",
        Adapt = require('coreJS/adapt'),
        AdaptView = require('coreViews/adaptView'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        CSS_STICKY_HEADER = "stickyHeader",
        CSS_STICKY_HEADER_BLOCK = "stickyHeaderBlock",
        SectionHeadings = _.extend({

            DEBUG: false,
            log: function () {
                if (this.DEBUG === false) {
                    return;
                }
                var args = Array.prototype.slice.call(arguments);
                //args.unshift(this.model.get("_id"));
                args.unshift(TAG);


                if (window.console && window.console.log) {
                    try {
                       //console.log.apply(console, args);
                    } catch (e) {
                       //console.log(args);
                    }
                }
            },
            emptyRect: {
                'left': 0,
                'top': 0,
                'right': 0,
                'bottom': 0,
                'height': 0,
                'width': 0
            },
            //public static
            initialize: function (model) {
                this.log("initialize", model);
                var headers = this.$headers = $("." + CSS_STICKY_HEADER);
                this.log("initialize", headers);
                if (headers.length === 0) {
                    //abort
                    this.remove();
                    return;
                }


                //
                this._isRemoved = false;
                this.model = model;
                this.log("initialize", this.model);
                this.$window = $(window);
                this.topMargin = $('.navigation').height();
                this.$navTitle = $('.navigation .section-heading-title-inner');
                //
                this.removeBinded = _.bind(this.remove, this);
                this.listenTo(Adapt, 'remove', this.removeBinded);
                this.scrolling = $.throttle(this.model.get("throttle"), false, _.bind(this._whenScrolling, this));
                this.afterScroll = $.debounce(this.model.get("throttle") * 2, false, _.bind(this._whenScrolling, this));
                this.wheel = /*$.debounce(this.model.get("throttle") * 2, false, */ _.bind(this._whenScrolling, this); /*);*/
                //
                this.$window.off("scroll.adapt-section-headings")
                    .on("scroll.adapt-section-headings", this.scrolling)
                    .on("scroll.adapt-section-headings", this.afterScroll)
                    .off("wheel mousewheel.adapt-section-headings")
                    .on("wheel mousewheel.adapt-section-headings", this.wheel);


                this.scrolling();
                //$('.navigation .section-heading-title-main').text('');
                this.getFirstStickyHeader();
            },

            getFirstStickyHeader: function() {
                var headers = this.$headers,
                    $thisHeader,
                    rect;
                    $thisHeader = /*$(this)*/ $(headers[0]);
                    rect = this.getStickyHeaderRect($thisHeader);
                    if (this.$navTitle) {
                        this.$navTitle.html($thisHeader.html());
                    }
            },
            _whenScrolling: function () {
                var headers = this.$headers,
                    i = headers ? headers.length : 0,
                    $thisHeader,
                    rect;
                this.log("_whenScrolling length", i);
                while (i--) {

                    $thisHeader = /*$(this)*/ $(headers[i]);
                    rect = this.getStickyHeaderRect($thisHeader);

                    this.log(i, "left:" + rect.left, "top:" + rect.top, "right:" + rect.right, "bottom:" + rect.bottom, "height:" + rect.height, "width:" + rect.width);

                    if (rect.top + (rect.height * 0.75) < this.topMargin) {
                        this.log("Set title to: " + $thisHeader.text());
                        if (this.$navTitle) {
                            this.$navTitle.html($thisHeader.html());
                        }
                        break;
                    }

                }
                this.log(i);
                /*
                if (i < 0) {
                    //send empty
                    this.log("CLEAR TITLE");
                    if (this.$navTitle) {
                        this.$navTitle.text("");
                    }
                }*/
            },
            getStickyHeaderRect: function (sticky) {
                if (!sticky || sticky.length === 0) {
                    return this.emptyRect;
                }
                var r = sticky[0].getBoundingClientRect(),
                    rect = {
                        left: r.left,
                        top: r.top,
                        right: r.right,
                        bottom: r.bottom,
                        height: "height" in r ? r.height : r.bottom - r.top,
                        width: "width" in r ? r.width : r.right - r.left
                    };
                return rect;
            },
            remove: function () {
                this.log("remove", this);
                if (this._isRemoved) {
                    return;
                }

                if (this.$window) {
                    this.$window.off("scroll.adapt-section-headings")
                        .off("wheel mousewheel.adapt-section-headings");
                }
                this.stopListening();

                this.scrolling = undefined;
                this.afterScroll = undefined;
                this.wheel = undefined;
                this.$window = undefined;
                this.$headers = undefined;
                this.model = undefined;
                this.topMargin = undefined;
                if (this.$navTitle) {

                    this.$navTitle.text("");
                    this.$navTitle = undefined;
                }

                //last thing:)
                this._isRemoved = true;
            }


        }, Backbone.Events),
        mergeConfigs = function (base, config) {

            var existBase = !_.isUndefined(base),
                existConfig = !_.isUndefined(config),
                newConfig;

            if (existBase && !existConfig) {
                return base;
            }
            if (!existBase && existConfig) {
                return config;
            }
            if (!existBase && !existConfig) {
                return {};
            }

            //copy
            newConfig = {};
            if (base.hasOwnProperty("_isEnabled")) {
                newConfig._isEnabled = base._isEnabled;
            }
            if (base.hasOwnProperty("throttle")) {
                newConfig.throttle = base.throttle;
            }

            //merge
            if (config.hasOwnProperty("_isEnabled")) {
                newConfig._isEnabled = config._isEnabled;
            }
            if (config.hasOwnProperty("throttle")) {
                newConfig.throttle = config.throttle;
            }

            return newConfig;
        };

    Adapt.on('pageView:ready', function (page) {

        var config = mergeConfigs(Adapt.config.get('_sectionHeadings'), page.model.get('_sectionHeadings')),
            model;
        //console.log(TAG, "page post ready", page.model.get("_id"), config);
        //console.log(TAG, "_.isUndefined(config)", _.isUndefined(config));
        //console.log(TAG, "config._isEnabled", config._isEnabled);


        if (!_.isUndefined(config) && config._isEnabled === false) {
            //dont use it - turned off
            return;
        }

        if (!config.hasOwnProperty("throttle")) {
            config.throttle = 150;
        }
        if (!config.hasOwnProperty("initDelay")) {
            config.initDelay = 250;
        }

        config.pageId = page.model.get("_id");

        model = new Backbone.Model(config);
        //console.log(TAG, "model", model);
        _.delay(function () {
            //console.log(TAG, "delayed");
            SectionHeadings.initialize(model);
        }, config.initDelay);
    });
});
