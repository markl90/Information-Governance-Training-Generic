define(function(require) {

    var Backbone = require('backbone');
    var Adapt = require('core/js/adapt');

    var HelpView = Backbone.View.extend({

        className: "help",

        initialize: function() {
            this.listenTo(Adapt, 'remove', this.remove);
            this.render();
        },

        events: {
            
        },

        render: function() {
            var collectionData = this.collection.toJSON();
            var modelData = this.model.toJSON();
            var template = Handlebars.templates["help"];
            this.$el.html(template);
            _.defer(_.bind(this.postRender, this));
            return this;
        },

        postRender: function() {
            this.listenTo(Adapt, 'drawer:triggerCustomView', this.remove);
        },
    });

    return HelpView;
});
