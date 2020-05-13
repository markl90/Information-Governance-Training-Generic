define([
    'backbone',
    'core/js/adapt',
    './adapt-helpView',
], function(Backbone, Adapt, HelpView) {

    function setupHelp(helpData) {
        var helpModel = new Backbone.Model(helpData);
        var helpCollection = new Backbone.Collection(helpModel.get('_helpItems'));
        Adapt.on('help:showHelp', function() {
            Adapt.drawer.triggerCustomView(new HelpView({
                model: helpModel,
                collection: helpCollection
            }).$el);

            $('.drawer-title').show().html(Adapt.course.get('_help').title);
            $('.drawer-description').show().html(Adapt.course.get('_help').description);
        });
    }

    function initHelp() {
        var courseHelp = Adapt.course.get('_help');
        // do not proceed until resource set on course.json
        if (!courseHelp || courseHelp._isEnabled === false) return;
        var drawerObject = {
            title: courseHelp.title,
            description: courseHelp.description,
            className: 'help-drawer'
        };
        Adapt.drawer.addItem(drawerObject, 'help:showHelp');
        setupHelp(courseHelp);
    }

    Adapt.once('app:dataReady', function() {
        initHelp();
        Adapt.on('app:languageChanged', initHelp);
    });
});