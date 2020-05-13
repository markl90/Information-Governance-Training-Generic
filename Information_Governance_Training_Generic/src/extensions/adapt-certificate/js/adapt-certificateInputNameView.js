define(function (require) {

    var Backbone = require('backbone');
    var Handlebars = require('handlebars');
    var Adapt = require('coreJS/adapt'),
        scorm = require('extensions/adapt-contrib-spoor/js/scorm');
    var CertificateInputNameView = Backbone.View.extend({
        
        className: "certificate-input-name",

        events: {
            'click .submit-btn': 'onSubmitClicked',
            'click .close-btn': 'onCloseClicked',
            'keyup .text-box': 'onInputUpdated'
        },

        initialize: function () {
            //console.log("initialize"); //, );
            this.render();
            this.listenTo(Adapt, "remove", this.remove);
            //hide to wait for an image
            $(this.el).hide();
            this.$('.bg-image').imageready(_.bind(function () {
                $(this.el).show(); //image loaded - show
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
            //console.log("render");//, this, this.model, this.model.get('_input'));
            var data = {}
            if (!_.isUndefined(this.model) && this.model.has('_input')) {
                data = this.model.get('_input');
                //inject globals
                data._globals = Adapt.course.get('_globals');
            }
            var template = Handlebars.templates["certificate-input-name"];

            //console.log("template", template);
            //console.log("template(data)", template(data));

            $(this.el).html(template(data)).appendTo('#wrapper');

            this.$submit = this.$('.submit-btn');
            this.$inputs = this.$('.text-box');
           //console.log("this.$submit", this.$submit);
           //console.log("this.$inputs", this.$inputs);

            this.checkSubmitStatus();

            return this;
        },

        remove: function () {
            //$("body, html").css('overflow', '');
            this.off("remove", this.remove);
            Backbone.View.prototype.remove.apply(this, arguments);

            $('body').scrollEnable();
            Adapt.trigger('popup:closed');
        },

        isInputValid: function () {
            var valid = true;
            //for each .text-box
            this.$inputs.each(function (i, input) {
               //console.log(i, $(input).val());
                if (/^\s*$/.test($(input).val())) {
                    valid = false;
                    return false;
                }
            });

            return valid;
        },

        checkSubmitStatus: function () {
            if (this.isInputValid()) {
                //allowed to sent
                this.$submit.removeClass('cert-disabled')
                    .addClass('cert-active').a11y_cntrl_enabled(true);
            } else {
                //dissalow to sent
                this.$submit.removeClass('cert-active')
                    .addClass('cert-disabled').a11y_cntrl_enabled(false);
            }
        },

        onInputUpdated: function (e) {
            if (e) {
                if (e.originalEvent.keyIdentifier === "Enter" && this.isInputValid()) {
                    this.onSubmitClicked();
                    return;
                }
                this.checkSubmitStatus();
            }
        },

        onSubmitClicked: function (e) {
            //console.log("onSubmitClicked", this); //, );
            if (e) e.preventDefault();
            if (!this.isInputValid()) return;
            var model = {isStandalone:true};//must be offline as this view was displayed
            var inputs = this.$('.form input');
            //console.log("Inputs", inputs);
            for (var i = 0, l = inputs.length; i < l; i++) {
                model[inputs[i].name] = inputs[i].value;
            }

            this.remove();
            _.defer(function () {
                Adapt.trigger('certificate:show', model);
            });
        },

        onCloseClicked: function(e) {
            if(e) e.preventDefault();
            //
            this.remove();
        }

    });
    return CertificateInputNameView;
});
