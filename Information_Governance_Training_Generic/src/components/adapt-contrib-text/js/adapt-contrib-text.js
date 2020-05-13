define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var Text = ComponentView.extend({
        events: {
            'click .buttons-action':'onNextClick'
        },
        preRender: function() {
            this.checkIfResetOnRevisit();
        },

        postRender: function() {
            this.setReadyStatus();
            this.setupInview();
        },

        setupInview: function() {
            var selector = this.getInviewElementSelector();

            if (!selector) {
                this.setCompletionStatus();
            } else {
                this.model.set('inviewElementSelector', selector);
                this.$(selector).on('inview', _.bind(this.inview, this));
            }
        },

        showResult: function() {
            var groupID = this.model.get('_groupID');
            var screenID = this.model.get('_id');
            var result;
            //console.log("groupID: ", groupID, ", result: ", result);
            if(groupID && groupID.length>0){
                result = Adapt.BranchingRecordKeeping.getGroupResult(groupID);
                $(('.text-component.'+screenID)).addClass('default');
                $(('.text-component.'+screenID)).removeClass('good');
                $(('.text-component.'+screenID)).removeClass('intermediate');
                $(('.text-component.'+screenID)).removeClass('poor');
            }
            //console.log("groupID: ", groupID, ", result: ", result);
            if(result && result.length>0){
                $(('.text-component.'+screenID)).addClass(result);
            }
        },

        /**
         * determines which element should be used for inview logic - body, instruction or title - and returns the selector for that element
         */
        getInviewElementSelector: function() {
            if(this.model.get('body')) return '.component-body';

            if(this.model.get('instruction')) return '.component-instruction';
            
            if(this.model.get('displayTitle')) return '.component-title';

            return null;
        },

        checkIfResetOnRevisit: function() {
            var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled set defaults
            if (isResetOnRevisit) {
                this.model.reset(isResetOnRevisit);
            }
        },

        inview: function(event, visible, visiblePartX, visiblePartY) {
            this.showResult();
            if (visible) {
                if (visiblePartY === 'top') {
                    this._isVisibleTop = true;
                } else if (visiblePartY === 'bottom') {
                    this._isVisibleBottom = true;
                } else {
                    this._isVisibleTop = true;
                    this._isVisibleBottom = true;
                }

                if (this._isVisibleTop && this._isVisibleBottom) {
                    this.$(this.model.get('inviewElementSelector')).off('inview');
                    if(this.model.get('_nextButton') == undefined) this.setCompletionStatus();
                }
            }
        },

        onNextClick: function() {
            this.setCompletionStatus();
            $('.nav-buttons-item-1').trigger('click');
        },
        
        remove: function() {
            if(this.model.has('inviewElementSelector')) {
                this.$(this.model.get('inviewElementSelector')).off('inview');
            }
            
            ComponentView.prototype.remove.call(this);
        }
    },
    {
        template: 'text'
    });

    Adapt.register('text', Text);

    return Text;
});
