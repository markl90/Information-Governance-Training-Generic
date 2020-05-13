define([
    'coreJS/adapt'
],function(Adapt) {

    Adapt.on('questionView:showFeedback', function(view) {

        var alertObject = {
            title: view.model.get("feedbackTitle"),
            body: view.model.get("feedbackMessage")
        };

        if (view.model.has('_isCorrect')) {
            // Attach specific classes so that feedback can be styled.
            if (view.model.get('_isCorrect')) {
                alertObject._classes = 'correct notify-correct-incorrect-feedback';
            } else {
                if (view.model.has('_isAtLeastOneCorrectSelection')) {
                    // Partially correct feedback is an option.
                    alertObject._classes = view.model.get('_isAtLeastOneCorrectSelection')
                        ? 'partially-correct notify-correct-incorrect-feedback'
                        : 'incorrect notify-correct-incorrect-feedback';
                } else {
                    alertObject._classes = 'incorrect notify-correct-incorrect-feedback';
                }
            }
        }

        Adapt.once("notify:closed", function() {
            Adapt.trigger("tutor:closed", view, alertObject);
        });

        Adapt.trigger('notify:popup', alertObject);

        Adapt.trigger('tutor:opened', view, alertObject);
    });

});
