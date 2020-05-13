/**
 * AudioPlayer Extension,
 * 
 */
define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Adapt = require('coreJS/adapt'),
        mep = require('./mediaelement-and-player'),
        AudioPlayer = function() {};

    AudioPlayer.prototype = _.extend({
        resetPlayer: function() {
            if (this.$blockElement != null) {
                this.$blockElement.off("onscreen", _.bind(this.onBlockInview, this));
            }

            this.$blockElement = null;
            this._blockModel = null;
            this._blockAudModel = null;
            this._firstId = null;
            this._activeId = null;
            this._activeIdCopy = null;
        },

        initialize: function($targetPlayerElement) {
            console.log("AudioPlayer: initialize", $targetPlayerElement);
            this._$audioElement = null;
            if ($targetPlayerElement) {
                $targetPlayerElement.first().prepend("<div><audio id='audPlayer' preload='auto' autoplay type='audio/mp3'/></div>");
                this._$audioElement = $($targetPlayerElement).find('audio');
                this.setupPlayer();
                //console.log("value of  this"+this);
            }

            Adapt.on("blockView:postRender", this.onViewPostRender, this);

            this.listenTo(Adapt, "remove", this.resetPlayer);
            this.listenTo(Adapt, "navigationView : AudioButton", this.playAudio);
        },

        setupPlayer: function() {
            var modelOptions = {};
            if (modelOptions.pluginPath === undefined) modelOptions.pluginPath = 'assets/';
            if (modelOptions.pluginPath === undefined) modelOptions.type = 'audio';
            if (modelOptions.pluginPath === undefined) modelOptions.audioWidth = '2';
            if (modelOptions.pluginPath === undefined) modelOptions.audioHeight = '2';
            // create the player
            this._$audioElement.mediaelementplayer(modelOptions);
            //console.log("AudioPlayer: player: "+this._$audioElement.mediaelementplayer);
        },

        onViewPostRender: function(view) {
            this.$blockElement = view.$el;
            var _blockModelObj = view.model,
                _blockAudModelObj = _blockModelObj.get("_audio"),
                id = _blockModelObj.get("_id");

            if (!this._firstId) {
                this._firstId = id;
                this._blockAudModel = _blockAudModelObj;
            }

            this.$blockElement.attr("data-audioId", id);
            this.$blockElement.on("onscreen", _.bind(this.onBlockInview, this));

            this._activeId = this._firstId;
            if (!_blockAudModelObj || !_blockAudModelObj._isEnabled) {
                this.resetPlayer();
                return;
            }
        },

        onBlockInview: function(event, measurments) {
            Adapt.trigger("navigationView : AudioButton");
            //console.log("AudioPlayer : measurments.percentFromTop: "+measurments.percentFromTop+", measurments.percentFromBottom: "+measurments.percentFromBottom);
            var isOnscreen = measurments.percentFromTop < 60 && measurments.percentFromBottom < 60;
            if (!isOnscreen) return;

            var $target = $(event.target),
                id = $target.attr("data-audioId");
            //console.log("onBlockInview : id: "+id);
            if (this._activeId === id) return;

            this._activeId = id;

            if (this._activeIdCopy != this._activeId) {
                this._activeIdCopy = this._activeId;
                //console.log("onBlockInview : this._activeIdCopy: "+this._activeIdCopy);
                var _blockmodel = Adapt.blocks.findWhere({ _id: this._activeIdCopy });
                //console.log('_blockmodel: ' , _blockmodel);
                if (_blockmodel) {
                    this._blockAudModel = _blockmodel.get("_audio");
                    var _defaultSrc = (this._blockAudModel && this._blockAudModel._playlist && this._blockAudModel._playlist._default) ? this._blockAudModel._playlist._default : "";
                    //console.log("onBlockInview _defaultSrc: "+_defaultSrc);
                    if (_defaultSrc != "") {
                        //console.log("this._$audioElement: "+this._$audioElement);
                        this._$audioElement.attr('src', _defaultSrc);
                        this._$audioElement[0].load();
                        this._$audioElement[0].play();
                        Adapt.trigger("navigationView : AudioButton")
                    } else {
                        this._$audioElement.attr('src', "");
                        this._$audioElement[0].pause();
                    }
                }
            }
        },

        playAudio: function() {
            this._$audioElement[0].play();
        },

        stopAudio: function() {
            this._$audioElement.attr('src', "");
            this._$audioElement[0].pause();

            $('video,audio').each(function() {
                $(this)[0].pause();
            });
        },

        getOS: function() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
                return 'iOS';
            } else if (userAgent.match(/Android/i)) {
                return 'Android';
            } else {
                return 'unknown';
            }
        }
    }, Backbone.Events);

    Adapt.on("app:dataReady", function() {
        var _config = Adapt.config.get("_audio");
        if (!_config || !_config._isEnabled) return;
        console.log("AudioPlayer data ready");

        Adapt.on("pageView:postRender", function(view) {
            var model = view.model;
            Adapt.audio = new AudioPlayer();
            Adapt.audio.initialize(view.$el);

            var os = Adapt.audio.getOS();

            if (os == 'Android' || os == 'iOS') {
                $('.overlayPlayButton').show();
                $('.mobile-notify').show();
            }
        });
        Adapt.on("menuView:postRender", function(view) {
            var os = Adapt.audio.getOS();

            if (os == 'Android' || os == 'iOS') {
                $('.overlayPlayButton').show();
                $('.mobile-notify').show();
            }
        });
    });
})