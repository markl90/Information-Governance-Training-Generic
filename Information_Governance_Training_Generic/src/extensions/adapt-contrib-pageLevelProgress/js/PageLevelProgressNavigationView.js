define(function(require) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');
    var completionCalculations = require('./completionCalculations');

    var PageLevelProgressView = require('extensions/adapt-contrib-pageLevelProgress/js/PageLevelProgressView');

    var PageLevelProgressNavigationView = Backbone.View.extend({

        tagName: 'div',

        className: 'base page-level-progress-navigation',

        initialize: function() {
            this.listenTo(Adapt, 'remove', this.remove);
            this.listenTo(Adapt, 'router:location', this.updateProgressBar);
            this.listenTo(Adapt, 'pageLevelProgress:update', this.refreshProgressBar);
            Adapt.on("blockView:postRender", this.onViewPostRender, this);
            this.listenTo(this.collection, 'change:_isInteractionComplete', this.updateProgressBar);
            this.listenTo(this.model, 'change:_isInteractionComplete', this.updateProgressBar);
            //this.$el.attr('role', 'button');
            this.ariaText = '';
            
            if (Adapt.course.has('_globals') && Adapt.course.get('_globals')._extensions && Adapt.course.get('_globals')._extensions._pageLevelProgress && Adapt.course.get('_globals')._extensions._pageLevelProgress.pageLevelProgressIndicatorBar) {
                this.ariaText = Adapt.course.get('_globals')._extensions._pageLevelProgress.pageLevelProgressIndicatorBar +  ' ';
            }
            
            this.render();
            
            _.defer(_.bind(function() {
                this.updateProgressBar();
            }, this));
        },

        // events: {
        //     'click': 'onProgressClicked'
        // },

        render: function() {
            var components = this.collection.toJSON();
            var data = {
                components: components,
                _globals: Adapt.course.get('_globals')
            };            

            var template = Handlebars.templates['pageLevelProgressNavigation'];
            $('.navigation-drawer-toggle-button').after(this.$el.html(template(data)));
            return this;
        },
        
        refreshProgressBar: function() {
            var currentPageComponents = this.model.findDescendants('components').where({'_isAvailable': true});
            var availableChildren = completionCalculations.filterAvailableChildren(currentPageComponents);
            var enabledProgressComponents = completionCalculations.getPageLevelProgressEnabledModels(availableChildren);
            
            this.collection = new Backbone.Collection(enabledProgressComponents);
            this.updateProgressBar();
        },

        updateProgressBar: function() {
            var completionObject = completionCalculations.calculateCompletion(this.model);
            
            //take all assessment, nonassessment and subprogress into percentage
            //this allows the user to see if assessments have been passed, if assessment components can be retaken, and all other component's completion
            
            var completed = completionObject.nonAssessmentCompleted + completionObject.assessmentCompleted + completionObject.subProgressCompleted;
            var total  = completionObject.nonAssessmentTotal + completionObject.assessmentTotal + completionObject.subProgressTotal;

            var percentageComplete = Math.floor((completed / total)*100);

            //console.log("updateProgressBar, completionObject.nonAssessmentCompleted: "+completionObject.nonAssessmentCompleted+", completionObject.assessmentCompleted: "+completionObject.assessmentCompleted+", completionObject.subProgressCompleted: "+completionObject.subProgressCompleted);
            //console.log("updateProgressBar, completionObject.nonAssessmentTotal: "+completionObject.nonAssessmentTotal+", completionObject.assessmentTotal: "+completionObject.assessmentTotal+", completionObject.subProgressTotal: "+completionObject.subProgressTotal);
            this.$('.page-level-progress-navigation-bar').css('width', percentageComplete + '%');
            //this.$('.page-level-progress-navigation-text').html(completed+'/'+total);

            // Add percentage of completed components as an aria label attribute
            this.$el.attr('aria-label', this.ariaText +  percentageComplete + '%');

            // Set percentage of completed components to model attribute to update progress on MenuView
            this.model.set('completedChildrenAsPercentage', percentageComplete);
        },

        onProgressClicked: function(event) {
            if(event && event.preventDefault) event.preventDefault();
            Adapt.drawer.triggerCustomView(new PageLevelProgressView({collection: this.collection}).$el, false);
        },

        onViewPostRender: function(view) {  
            this.$blockElement = view.$el;			
            var _blockModelObj = view.model;	
            var id = _blockModelObj.get("_id");

            if (!this._firstId) this._firstId = id;

            this.$blockElement.attr("progress-id", id);
            this.$blockElement.on("onscreen",  _.bind(this.onBlockInview, this));

            this._activeId = this._firstId;
        },

        onBlockInview: function (event, measurments) {
            var isOnscreen = measurments.percentFromTop < 60 && measurments.percentFromBottom < 60;
            if (!isOnscreen) return;

            var $target = $(event.target);
            var id = $target.attr("progress-id");

            if (this._activeId === id) return;

            this._activeId = id;

            if(this._activeIdCopy!=this._activeId){
                this._activeIdCopy = this._activeId;

                var _blockmodel = Adapt.blocks.findWhere({_id:this._activeIdCopy});

                if(_blockmodel){
                    var _articlemodel = Adapt.articles.findWhere({_id:_blockmodel.get('_parentId')});
                    if(_articlemodel){
                        var _articleID = _articlemodel.get('_id');
                        var completionObject = completionCalculations.calculateCompletion(this.model);
                        var total  = completionObject.nonAssessmentTotal + completionObject.assessmentTotal + completionObject.subProgressTotal;
                        var currentBlockNumberToShow = (_blockmodel.get("_nthChild")/2);
                        var totalBlockNumberToShow = total;
                        if(_articleID.split('-').indexOf('pre')>=0){
                            currentBlockNumberToShow = 1;
                            totalBlockNumberToShow = total - 1;
                        }
                        if(_articleID.split('-').indexOf('post')>=0){
                            currentBlockNumberToShow = total - 1;
                            totalBlockNumberToShow = total - 1;
                        }
                        if(_articlemodel.get('_assessment')){
                            currentBlockNumberToShow = currentBlockNumberToShow + 1;
                            totalBlockNumberToShow = total - 1;
                        }
                        this.$('.page-level-progress-navigation-text').html(currentBlockNumberToShow+'/'+totalBlockNumberToShow);
                    }
                }
            }
        }

    });

    return PageLevelProgressNavigationView;

});