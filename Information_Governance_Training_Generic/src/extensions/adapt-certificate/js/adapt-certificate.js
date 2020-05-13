/**
 * Certificate appears when the course is completed
 **/

define(function (require) {
    var Adapt = require('coreJS/adapt'),
        Backbone = require('backbone'),
        scorm = require('extensions/adapt-contrib-spoor/js/scorm'),
        DateUtils = require('./date-utils'),
        CertificateView = require('./adapt-certificateView'),
        CertificateInputNameView = require('./adapt-certificateInputNameView'),
        CERTIFICATE_SHOW = "certificate:show",
        NAVIGATION_CERTIFICATE_SHOW = "navigation:" + CERTIFICATE_SHOW;


    var keys = [];
    var Certificate = _.extend({
            //private
            //when true it will not be automatically opened when completed
            _certificateWasOpened: false,
            //certificate is allowed to be opened - course is completed
            _openCertificate: false,
            _onComplete: function (e) {
                console.log("Certificate", "_onComplete", e, this, this.model);
                if (e && e.hasOwnProperty('assessments') && e.hasOwnProperty('isPercentageBased')) {
                    this.model.isPercentageBased = e.isPercentageBased;
                    this.model.scoreAsPercent = e.scoreAsPercent;
                    this.model.score = e.score;
                    this.model.maxScore = e.maxScore;                    
                    if(this.model.scoreAsPercent < 57){
                        this._hideCertificateButton();  
                        }                   
                }
               
                if (this._checkTrackingCriteriaMet()) {
                    this._openCertificate = true;
                    this._showCertificateButton();                    
                    if (!this._certificateWasOpened && this.model._openCertificateOnComplete) {
                        this._showCertificate();
                    }                
                }
            },

            _hideCertificateButton: function () {
                console.log("Certificate", "_hideCertificateButton");
                $('html').addClass("hide-certificate");
            },

            _showCertificateButton: function () {
                console.log("Certificate", "_showCertificateButton");
                $('html').removeClass("hide-certificate");
            },
            /**
             * Based on the spoor method, checks if the course has met completion criteria
             */
            _checkTrackingCriteriaMet: function () {
                console.log("Certificate", "_checkTrackingCriteriaMet");
                var criteriaMet = false;
                if (this._config._tracking._requireCourseCompleted && this._config._tracking._requireAssessmentPassed) { // user must complete all blocks AND pass the assessment
                    criteriaMet = (Adapt.course.get('_isComplete') && Adapt.course.get('_isAssessmentPassed'));
                } else if (this._config._tracking._requireCourseCompleted) { //user only needs to complete all blocks
                    criteriaMet = Adapt.course.get('_isComplete');
                } else if (this._config._tracking._requireAssessmentPassed) { // user only needs to pass the assessment
                    criteriaMet = Adapt.course.get('_isAssessmentPassed');
                }

                return criteriaMet;
            },

            _onShowCertificate: function (model) {
                console.log("Certificate", "_onShowCertificate", model, this);
                this._certificateWasOpened = true;
                this._showCertificate(model);
            },

            _showCertificate: function (model) {
                var init = {
                    model: new Backbone.Model(this.model)
                };
                console.log("Certificate", "_showCertificate", init);
                //
                if (this._config && this._config._isEnabled !== false) {
                    var userName = scorm.getStudentName();
                    var userId = scorm.getStudentId();
                }
                //console.log("Certificate", "init", init);
                //console.log("Certificate", "userName", userName);
                //
                console.log('scorm.lmsConnected - ', scorm.lmsConnected);

                if (scorm.lmsConnected || (typeof userName !== 'undefined' || (model && (model.userName || (model.name && model.surname))))) {
                    init.model.set("userName", userName || model.userName || model.name + " " + model.surname);
                    init.model.set("userId", userId || model.userId || "");
                    if (model && model.isStandalone) init.model.set("isStandalone", model.isStandalone); //must be offline as this view was displayed                            
                    
                    var assessmentState = Adapt.assessment.getState();
                    //alert("score "+assessmentState.score+"\nmaxScore="+assessmentState.maxScore);
                    init.model.set("isPercentageBased", assessmentState.isPercentageBased);
                    init.model.set("scoreAsPercent", assessmentState.scoreAsPercent);
                    init.model.set("score", assessmentState.score);
                    init.model.set("maxScore", assessmentState.maxScore);
                    
                    new CertificateView(init);
                } else {
                    new CertificateInputNameView(init);
                }
                // 
            },

            checkKeys: function (event) {
                keys.push(event.which);
                //c,e,r,t
                //if (keys.toString().indexOf("67,69,82,84") >= 0) {
                //l,e,e,d,s
                if (keys.toString().indexOf("76,69,69,68,83") >= 0) {
                    keys = [];
                    this._showCertificateButton();
                    this._showCertificate();
                }
            },

            //public
            initialize: function (model) {
                this.model = model;
                // this._hideCertificateButton();

                if (!_.isUndefined(model) && model._isDebug == true) {
                    //listen to 'cert'
                    $(document).on("keyup", _.bind(this.checkKeys, this));
                }
                //spoor config
                this._config = Adapt.config.get('_spoor');
                console.log("Certificate", "initialize(model), _config", model, this._config);

                if (this._config && this._config._tracking._requireAssessmentPassed) {
                    Adapt.listenTo(Adapt, 'assessments:complete', _.bind(this._onComplete, this));
                    Adapt.listenTo(Adapt, 'assessment:complete', _.bind(this._onComplete, this));
                    Adapt.listenTo(Adapt.course, 'change:_isAssessmentPassed', _.bind(this._onComplete, this));
                }
                Adapt.listenTo(Adapt.course, 'change:_isComplete', _.bind(this._onComplete, this));
                
                Adapt.on(NAVIGATION_CERTIFICATE_SHOW, _.bind(this._onShowCertificate, this));
                Adapt.on(CERTIFICATE_SHOW, _.bind(this._onShowCertificate, this));
            }
        },
        Backbone.Events);
    //initialize
    Adapt.once('app:dataReady', function () {
        var model = Adapt.config.get('_certificate') || Adapt.course.get('_certificate');
        if (!_.isUndefined(model) && model._isEnabled == false) {
            //dont use it - turned off
            return;
        }
        //
        Adapt.certificate = Certificate;
        Certificate.initialize(model);
    });
});