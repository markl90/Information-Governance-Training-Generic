define([
    'coreJS/adapt',
    'coreViews/menuView'
], function(Adapt, MenuView) {

    var BoxMenuView = MenuView.extend({
        audioPlayer: '',
        isAudio: false,
        postRender: function() {
            var menuVisited = this.model.get('_menuVisited');
            this.isAudio = this.model.get('_globals')._audio._isEnabled;
            if (this.isAudio) this.audioPlayer = Adapt.audio._$audioElement[0];
            this.model.set('_menuVisited', true);
            //this.listenTo(Adapt, 'boxMenu:playAudio', this.playAudio);

            var nthChild = 0;
            var bankId = Adapt.course.get('_assessment')._bankId;
            console.log('BoxMenuView - previousBankId: ', bankId);
            this.model.getChildren().each(function(item, index) {
                if(bankId==0) {
                    if(index==8) item.set('_isAvailable', false);
                } else {
                    if(index==7) item.set('_isAvailable', false);
                }
                if (item.get('_isAvailable')) {
                    nthChild++;
                    item.set("_nthChild", nthChild);
                    //this.$('.menu-container-inner').append(new BoxMenuItemView({model: item}).$el);
                    this.$('.menu-items').append(new BoxMenuItemView({ model: item }).$el);
                }
            });



            //Audio
            if (this.isAudio && menuVisited != true) {
                var currentAudio = this.model.get('_globals')._menu._boxmenu._audio;
                this.$('.menu-header').first().prepend("<div><audio id='audPlayer' preload='auto' autoplay type='audio/mp3'/></div>");
                this.$el.parents().find('audio').attr('src', '');
                this.audioPlayer.pause();
                //this.audioPlayer['src'] = currentAudio;
                this.$('.menu-header').find('audio').attr('src', currentAudio);
                this.audioPlayer.load();
                this.audioPlayer.play();

                var os = Adapt.audio.getOS();
                if (os == 'Android' || os == 'iOS') {
                    $('.overlayPlayButton').show();
                    $('.mobile-notify').show();
                }
            }
        },
        // playAudio: function() {
        //     Adapt.audio.playAudio();
        //     this.audioPlayer.play();
        // },
    }, {
        template: 'boxmenu'
    });

    var BoxMenuItemView = MenuView.extend({

        events: {
            'click .menu-item-inner': 'onClickMenuItemButton',
            'mouseover .menu-item-inner': 'onItemFocus',
            'mouseout .menu-item-inner': 'onItemBlur'
        },

        className: function() {
            var nthChild = this.model.get("_nthChild");
            return [
                'menu-item',
                'menu-item-' + this.model.get('_id'),
                this.model.get('_classes'),
                this.model.get('_isVisited') ? 'visited' : '',
                this.model.get('_isComplete') ? 'completed' : '',
                this.model.get('_isLocked') ? 'locked' : '',
                'nth-child-' + nthChild,
                nthChild % 2 === 0 ? 'nth-child-even' : 'nth-child-odd'
            ].join(' ');
        },

        preRender: function() {
            this.model.checkCompletionStatus();
            this.model.checkInteractionCompletionStatus();
            this.listenTo(Adapt, "device:resize", this.setupMenuItemLayout);
        },

        postRender: function() {
            this.setupMenuItemLayout();
            var graphic = this.model.get('_graphic');
            if (graphic && graphic.src && graphic.src.length > 0) {
                this.$el.imageready(_.bind(function() {
                    this.setReadyStatus();
                }, this));
            } else {
                this.setReadyStatus();
            }
        },

        onClickMenuItemButton: function(event) {
            if (event && event.preventDefault) event.preventDefault();
            if (this.model.get('_isLocked')) return;
            Backbone.history.navigate('#/id/' + this.model.get('_id'), { trigger: true });
        },

        onItemFocus: function(event) {
            var id = 'graphic-' + this.model.get('_id');
            var targetImg = document.getElementById(id);
            targetImg.src = document.getElementById(id).getAttribute('src').split(".").join("_hov.");

            var targetTitle = 'menu-item-title-inner-' + this.model.get('_id');
            $("#" + targetTitle).siblings().children(".menu-item-title-left-base").removeClass("menu-item-title-left-base-normal").addClass("menu-item-title-left-base-over");
            $("#" + targetTitle).siblings().children(".menu-item-title-right-base").removeClass("menu-item-title-right-base-normal").addClass("menu-item-title-right-base-over");
        },

        onItemBlur: function(event) {
            var id = 'graphic-' + this.model.get('_id');
            var targetImg = document.getElementById(id);
            targetImg.src = document.getElementById(id).getAttribute('src').split("_hov.").join(".");

            var targetTitle = 'menu-item-title-inner-' + this.model.get('_id');
            $("#" + targetTitle).siblings().children(".menu-item-title-left-base").removeClass("menu-item-title-left-base-over").addClass("menu-item-title-left-base-normal");
            $("#" + targetTitle).siblings().children(".menu-item-title-right-base").removeClass("menu-item-title-right-base-over").addClass("menu-item-title-right-base-normal");
        },

        setupMenuItemLayout: function() {
            // console.log("setupMenuItemLayout:" + $(window).width());

            var newLen = $(".menu-item").length;

            for (var i = 0; i < newLen; i++) {
                var targetTitle = 'menu-item-title-inner-' + this.model.get('_id');
                var newHeight = Math.ceil($("#" + targetTitle + " " + ".menu-item-desc").outerHeight());
                newHeight += 10;

                $("#" + targetTitle).siblings().css("height", newHeight + "px");
                $("#" + targetTitle).parent().css("height", newHeight + "px");
            }

            // var menuItemWidth = $(".menu-item").width();
            // var menuItemInnerHeight = Math.floor(menuItemWidth * 0.4038) + 1;
            // console.log("setupMenuItemLayout menuItemWidth:" + menuItemWidth + ", menuItemInnerHeight:" + menuItemInnerHeight);
            // $(".menu-item-inner").css({
            //     height: menuItemInnerHeight + "px"
            // });

            var minHeight = 0;
            if ($(window))
                minHeight = $(window).height();

            if ($(".menu-container")) {
                $(".menu-container").css({
                    minHeight: minHeight + "px"
                });
            }
        }

    }, {
        template: 'boxmenu-item'
    });

    Adapt.on('router:menu', function(model) {

        $('#wrapper').append(new BoxMenuView({ model: model }).$el);

    });

});