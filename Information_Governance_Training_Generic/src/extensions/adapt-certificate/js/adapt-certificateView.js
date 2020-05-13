define(function (require) {
    var DateUtils = require('./date-utils');
    var Backbone = require('backbone');
    var Handlebars = require('handlebars');
    var Adapt = require('coreJS/adapt');
    var CertificateView = Backbone.View.extend({
        
        className: "certificate",

        events: {
            'click .print-btn':'onPrintClicked',
            'click .close-btn':'onCloseClicked'
        },

        initialize: function () {
            console.log("initialize", this.model); //, );
            this.model.set('_globals', Adapt.course.get('_globals'));
            var today = new Date();
            var formatted = DateUtils.format(this.model.get('dateFormat') || '', today);
            this.model.set('date', formatted);

            this.render();
            this.listenTo(Adapt, "remove", this.remove);
            
            //hide to wait for an image
            $(this.el).hide();
            this.$('.bg-image').imageready(_.bind(function () {
                $(this.el).show();//image loaded - show
                //$("body, html").css('overflow', 'hidden');

                /*ALLOWS POPUP MANAGER TO CONTROL FOCUS*/
                Adapt.trigger('popup:opened', this.$el);
                $('body').scrollDisable();

                //set focus to first accessible element
                this.$('.notify-popup').a11y_focus();
            }, this));
            
            return this;
        },

        render: function () {
            //console.log("render", this); //, );
            var data = this.model.toJSON();
            var template = Handlebars.templates["certificate"];
            //console.log("template", template);
            //console.log("template(data)", template(data));
            $(this.el).html(template(data)).appendTo('#wrapper');
            return this;
        },

        remove: function () {
            this.off("remove", this.remove);
            Backbone.View.prototype.remove.apply(this, arguments);

            $('body').scrollEnable();
            Adapt.trigger('popup:closed');
        },

        onPrintClicked:function(e){
            //console.log("onPrintClicked", this); //, );
            if (e) e.preventDefault();
            window.print();
            //this.remove();
        },

        onCloseClicked: function(e) {
            if(e) e.preventDefault();
            _.defer(function(){
                Adapt.trigger("certificate:close");
            });
            this.remove();
        }
    });
    return CertificateView;
})