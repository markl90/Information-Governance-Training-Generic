define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title component-title\">\r\n            <div role=\"heading\" tabindex=\"0\" class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title-inner component-title-inner\"  aria-level=\"4\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body component-body\">\r\n            <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body-inner component-body-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction component-instruction\">\r\n            <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-header component-header\">\r\n    <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-header-inner component-header-inner\">\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>\r\n";
},"useData":true}));

Handlebars.registerPartial("state", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-complete\">"
    + alias2((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"a11y_normalize","hash":{},"data":data}))
    + " "
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isQuestionType : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._canShowFeedback : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.correct : stack1), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incorrect : stack1), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-incomplete\">"
    + alias1((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"a11y_normalize","hash":{},"data":data}))
    + " "
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + "</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"accessibility-state\">\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}));

Handlebars.registerPartial("buttons", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "<button class=\"base button submit\">\r\n    <span>  \r\n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.submit : stack1), depth0)) != null ? stack1 : "")
    + " \r\n    </span>\r\n</button>\r\n<button class=\"base button reset\">\r\n    <span>\r\n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.reset : stack1), depth0)) != null ? stack1 : "")
    + " \r\n    </span>\r\n</button> \r\n<button class=\"base button model\">\r\n    <span> \r\n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.showCorrectAnswer : stack1), depth0)) != null ? stack1 : "")
    + " \r\n    </span>\r\n</button>\r\n<button class=\"base button user\">\r\n    <span>\r\n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.hideCorrectAnswer : stack1), depth0)) != null ? stack1 : "")
    + " \r\n    </span>\r\n</button>\r\n";
},"useData":true}));

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title-image component-title-image\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.titleImage || (depth0 != null ? depth0.titleImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titleImage","hash":{},"data":data}) : helper)))
    + "\">\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title component-title\">\r\n            <div role=\"heading\" tabindex=\"0\" class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title-inner component-title-inner\"  aria-level=\"4\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body component-body\">\r\n            <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body-inner component-body-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction component-instruction\">\r\n            <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n            <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\r\n                  "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.instructionFinal : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n              </div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-header component-header\">\r\n    <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-header-inner component-header-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.titleImage : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"useData":true}));

Handlebars.registerPartial("state", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-complete\">"
    + alias2((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"a11y_normalize","hash":{},"data":data}))
    + " "
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isQuestionType : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._canShowFeedback : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.correct : stack1), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incorrect : stack1), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-incomplete\">"
    + alias1((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"a11y_normalize","hash":{},"data":data}))
    + " "
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + "</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"accessibility-state\">\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"article-title\">\r\n            <div role=\"heading\" tabindex=\"0\" class=\"article-title-inner h2\"  aria-level=\"2\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"article-body\">\r\n            <div class=\"article-body-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"article-instruction\">\r\n            <div class=\"article-instruction-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"article-inner block-container\">\r\n\r\n    <div class=\"article-header\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"block-title\">\r\n            <div role=\"heading\" tabindex=\"0\" class=\"block-title-inner h3\"  aria-level=\"3\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"block-body\">\r\n            <div class=\"block-body-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"block-instruction\">\r\n            <div class=\"block-instruction-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"block-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <div class=\"component-container\">\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"buttons-marking-icon icon display-none\">\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"buttons-display\">\r\n        <div class=\"buttons-marking-icon icon display-none\">\r\n        </div>\r\n        <div class=\"buttons-display-inner\">\r\n        </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"buttons-inner\">\r\n    <div class=\"buttons-cluster clearfix\">\r\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <button class=\"buttons-action\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\r\n        <button class=\"buttons-feedback\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\" disabled=\"true\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\r\n    </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"drawer-inner\">\r\n	<span class='aria-label prevent-default' tabindex='0' role='region'>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.drawer : stack1), depth0))
    + "</span>\r\n	<div class=\"drawer-holder\">\r\n	</div>\r\n	<div class=\"drawer-toolbar clearfix\">\r\n		<div class=\"drawer-back-button\">\r\n		<button class=\"base drawer-back icon icon-controls-small-left\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\r\n		</button>\r\n		</div>\r\n		<div class=\"drawer-close-button\">\r\n		<button class=\"base drawer-close icon icon-cross\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeDrawer : stack1), depth0))
    + "\">\r\n		</button>\r\n		</div>\r\n	</div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<button class=\"base drawer-item-open "
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"drawer-item-title\">\r\n		<div class=\"drawer-item-title-inner h5\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n	</div>\r\n	<div class=\"drawer-item-description\">\r\n		<div class=\"drawer-item-description-inner\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\r\n	</div>\r\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\r\n    <div class=\"loader-gif\"><div role=\"heading\" tabindex=\"0\" class=\"h3\" aria-level=\"1\">Loading...</div></div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"navigation-inner clearfix\" role=\"navigation\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigation : stack1), depth0))
    + "\">\r\n    <button class=\"base navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\"></button>\r\n    <button class=\"base navigation-drawer-toggle-button icon icon-list display-none\" data-event=\"toggleDrawer\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigationDrawer : stack1), depth0))
    + "\"></button>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "                    <div class=\"notify-popup-icon\">\r\n                        <div class=\"icon"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"if_value_equals","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"alert",{"name":"if_value_equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n                        </div>\r\n                    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " icon-question";
},"4":function(container,depth0,helpers,partials,data) {
    return " icon-warning";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                    <div class=\"notify-popup-title\">\r\n                        <div class=\"notify-popup-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\r\n                        "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                    </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"notify-popup-body\">\r\n                        <div class=\"notify-popup-body-inner\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\r\n                    </div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                    <div class=\"notify-popup-buttons\">\r\n                        <button class=\"notify-popup-button notify-popup-alert-button\" role=\"button\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\r\n                    </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"notify-popup-buttons\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._prompts : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                            <button class=\"notify-popup-button notify-popup-prompt-button\" data-event=\""
    + container.escapeExpression(((helper = (helper = helpers._callbackEvent || (depth0 != null ? depth0._callbackEvent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data}) : helper)))
    + "\" role=\"button\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <button class=\"base notify-popup-done\" role=\"button\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\r\n                <div class=\"notify-popup-icon-close icon icon-cross\"></div>\r\n            </button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"notify-popup notify-type-"
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_classes","hash":{},"data":data}) : helper)))
    + "\" role=\"region\" aria-label=\""
    + alias4(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\r\n    <div class=\"notify-popup-inner\">\r\n        <div class=\"notify-popup-content\">\r\n            <div class=\"notify-popup-content-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._showIcon : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"alert",{"name":"if_value_equals","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"if_value_equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"popup",{"name":"if_value_equals","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n\r\n\r\n<div class=\"notify-shadow\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "<div class=\"notify-push-inner\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\r\n	<div class=\"notify-push-title\">\r\n		<div class=\"notify-push-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\r\n			"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n	<div class=\"notify-push-body\">\r\n		<div class=\"notify-push-body-inner\">\r\n			"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias4).call(alias3,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n</div>\r\n<button class=\"base notify-push-close\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\r\n	<span class=\"icon icon-cross\"></span>\r\n</button>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "					    <div class=\"page-title\">\r\n					        <div class=\"page-title-inner h1\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\r\n					            "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n					        </div>\r\n					    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					    <div class=\"page-body\">\r\n					        <div class=\"page-body-inner\">\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pageBody : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "					        </div>\r\n					    </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					            	"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pageBody : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					            	"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"page-inner article-container\" role=\"main\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.page : stack1), depth0))
    + "\">\r\n\r\n    	<div class=\"page-header\">\r\n    		<div class=\"page-header-inner clearfix\">\r\n\r\n    			<div class=\"page-header-content\">\r\n    				<div class=\"page-header-content-inner\">\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    				</div>\r\n    			</div>\r\n\r\n    		</div>\r\n    	</div>\r\n</div>\r\n<div class=\"aria-label rest-on-top a11y-ignore-focus prevent-default\" tabindex=\"0\" role=\"region\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.pageEnd : stack1), depth0))
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow display-none\"></div>";
},"useData":true});

this["Handlebars"]["templates"]["animation-hotspot"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<a class=\"hotspot\" type=\"button\" role=\"button\" tabindex=\"0\" href=\"javascript:void(0);\"><img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1._src : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" title=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0)) != null ? stack1 : "")
    + "\"/></a>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1._highlight : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<img src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1._highlight : stack1), depth0))
    + "\" alt=\"\" title=\"\" tabindex=\"-1\" aria-hidden=\"true\"/>";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <div class=\"hotspot\" style=\"top:"
    + alias4(((helper = (helper = helpers._top || (depth0 != null ? depth0._top : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_top","hash":{},"data":data}) : helper)))
    + ";left:"
    + alias4(((helper = (helper = helpers._left || (depth0 != null ? depth0._left : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_left","hash":{},"data":data}) : helper)))
    + ";width:"
    + alias4(((helper = (helper = helpers._width || (depth0 != null ? depth0._width : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_width","hash":{},"data":data}) : helper)))
    + ";height:"
    + alias4(((helper = (helper = helpers._height || (depth0 != null ? depth0._height : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_height","hash":{},"data":data}) : helper)))
    + "; "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._borderRadius : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " \" tabindex=\"0\" aria-label=\""
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" role=\"button\"></div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return " border-radius: "
    + container.escapeExpression(((helper = (helper = helpers._borderRadius || (depth0 != null ? depth0._borderRadius : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_borderRadius","hash":{},"data":data}) : helper)))
    + ";";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"animation-hotspot-inner component-inner\" role=\"region\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1["_animation-hotspot"] : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1["_animation-hotspot"] : stack1)) != null ? stack1.ariaRegion : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"animation-hotspot-widget component-widget\">\r\n        <div class=\"animation-hotspot-widget-container\">\r\n            <div class=\"animation-hotspot-item-holder\">\r\n                <div class=\"animation-hotspot-item\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n                <div class=\"animation-hotspot-highlight\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\r\n                <div class=\"animation-hotspot-hotspot\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._hotspots : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["accordion"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "        <div class=\"accordion-item "
    + container.escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_classes","hash":{},"data":data}) : helper)))
    + "\">\r\n            <button role=\"button\" class=\"base accordion-item-title "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" aria-expanded=\"false\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">\r\n              <div class=\"accordion-item-title-inner\">\r\n                <div class=\"accordion-item-title-icon icon icon-plus h5\"></div>\r\n                      "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n              </div>\r\n            </button>\r\n            <div class=\"accordion-item-body\">\r\n                <div class=\"accordion-item-body-inner\">\r\n                    <div class=\"accordion-item-text\">\r\n                        "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._graphic : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "visited";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <div class=\"accordion-item-graphic\">\r\n                        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\">\r\n                    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"accordion-inner component-inner\" role=\"region\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._accordion : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"accordion-widget component-widget\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["assessmentResults"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"results-retry component-feedback\">\r\n            <div class=\"results-retry-inner component-feedback-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.retryFeedback : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n            <div class=\"results-review-buttons\">\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._sections : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                    <button data-id=\""
    + container.escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._certificate : depth0)) != null ? stack1.ariaButton : stack1), depth0))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"results-inner component-inner\">\r\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"results-widget component-widget\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isRetryEnabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \r\n        <div class=\"assessmentResults-certificate component-feedback\">\r\n            <div class=\"assessmentResults-certificate-button buttons\">\r\n				<div class=\"certificate-button-container\">\r\n                <button class=\"button certificate-button\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._certificate : depth0)) != null ? stack1.ariaButton : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._certificate : depth0)) != null ? stack1.button : stack1), depth0))
    + "</button></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["graphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " graphic-widget-attribution";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\"";
},"5":function(container,depth0,helpers,partials,data) {
    return " class=\"a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "	<div class=\"buttons\">\r\n		<div class=\"buttons-inner\">\r\n		    <div class=\"buttons-cluster clearfix\">\r\n		        <button class=\"buttons-action\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0._nextButton : depth0)) != null ? stack1.text : stack1), depth0))
    + "\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._nextButton : depth0)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "</button>\r\n		    </div>\r\n		</div>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"graphic-inner component-inner\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._graphic : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"graphic-widget component-widget"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n      <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" data-large=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\""
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "/>\r\n    </div>\r\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._nextButton : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["matching"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " disabled "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " complete submitted show-user-answer "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    return "correct";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <div class=\"matching-item item "
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " item-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n      <div class=\"matching-item-title\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\r\n      <div class=\"matching-select-container component-item-color\">\r\n        <div class=\"matching-select-state\">\r\n          <div class=\"matching-select-icon component-text-color matching-correct-icon icon icon-tick\"></div>\r\n          <div class=\"matching-select-icon component-text-color matching-incorrect-icon icon icon-cross\"></div>\r\n        </div>\r\n        <select class=\"matching-select component-text-color\" style=\"width:100%\">\r\n          <option>\r\n            "
    + alias3(container.lambda((depths[1] != null ? depths[1].placeholder : depths[1]), depth0))
    + "\r\n          </option>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._options : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\r\n      </div>\r\n    </div>\r\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._canShowMarking : depths[1]),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "incorrect";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "          <option "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n            "
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\r\n          </option>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"matching-inner component-inner\" role=\"region\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._matching : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._matching : stack1)) != null ? stack1.ariaRegion : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"matching-widget component-widget "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n  <div class=\"buttons\">\r\n  </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["mcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " disabled "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " complete submitted show-user-answer "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    return "correct";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "        <div class=\"mcq-item component-item component-item-color "
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n            <input type=\"checkbox\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" aria-labelledby=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "-aria\""
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " aria-label=\""
    + alias4((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || alias2).call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"a11y_normalize","hash":{},"data":data}))
    + "\"/>\r\n            <label aria-hidden=\"true\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "-aria\" for=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"component-item-text-color component-item-border"
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n                <div class=\"mcq-item-state\">\r\n                    <div class=\"mcq-item-icon mcq-answer-icon "
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.program(20, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + " component-item-text-color icon\"></div>\r\n                    <div class=\"mcq-item-icon mcq-correct-icon icon icon-tick\"></div>\r\n                    <div class=\"mcq-item-icon mcq-incorrect-icon icon icon-cross\"></div>\r\n                </div>\r\n                <div class=\"mcq-item-inner\">\r\n                    <div class=\"mcq-item-inner-index\">"
    + alias4((helpers.math || (depth0 && depth0.math) || alias2).call(alias1,(data && data.index),"+",1,{"name":"math","hash":{},"data":data}))
    + ".</div>\r\n                    "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                </div>\r\n            </label>\r\n        </div>\r\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._canShowMarking : depths[1]),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "incorrect";
},"12":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"14":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"16":function(container,depth0,helpers,partials,data) {
    return " selected";
},"18":function(container,depth0,helpers,partials,data) {
    return "radio";
},"20":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"mcq-inner component-inner\" role=\"region\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._mcq : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._mcq : stack1)) != null ? stack1.ariaRegion : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">  \r\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"mcq-widget component-widget "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"buttons\">\r\n    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["narrative"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "narrative-text-controls";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                    <button role=\"button\" class=\"base narrative-strapline-title\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">\r\n                        <div class=\"narrative-strapline-title-inner accessible-text-block h5\">\r\n                            "
    + ((stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " \r\n                        </div>\r\n                        <div class=\"icon icon-plus\"></div>\r\n                        <div class=\"focus-rect\"></div>\r\n                    </button>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                    <div class=\"narrative-content-item\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        <div class=\"narrative-content-body\">\r\n                            <div class=\"narrative-content-body-inner\">\r\n                                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                            </div> \r\n                        </div>\r\n                    </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                        <div class=\"narrative-content-title\">\r\n                            <div class=\"narrative-content-title-inner accessible-text-block h5\" role=\"heading\" aria-level=\"5\" tabindex=\"0\">\r\n                                "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " \r\n                            </div>\r\n                        </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                            <div class=\"narrative-progress component-item-color component-item-border\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "                <div class=\"narrative-slider-graphic "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n                    <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + " data-src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" data-mobile-src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.mobileSrc : stack1), depth0))
    + "\"/>\r\n                </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "visited";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\"";
},"15":function(container,depth0,helpers,partials,data) {
    return "class=\"a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                    <div class=\"narrative-progress narrative-step-no-padding component-item-color component-item-border\"  "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.rollOverText : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><span class=\"narrative-step-no\">"
    + container.escapeExpression((helpers.math || (depth0 && depth0.math) || helpers.helperMissing).call(alias1,(data && data.index),"+",1,{"name":"math","hash":{},"data":data}))
    + "</span></div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper;

  return "title=\""
    + container.escapeExpression(((helper = (helper = helpers.rollOverText || (depth0 != null ? depth0.rollOverText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"rollOverText","hash":{},"data":data}) : helper)))
    + "\"";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"narrative-progress component-item-color component-item-border\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.rollOverText : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"narrative-inner component-inner\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._narrative : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"narrative-widget component-widget "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._hasNavigationInTextArea : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n\r\n        <div class=\"narrative-strapline\">\r\n            <div class=\"narrative-strapline-header\">\r\n                <div class=\"narrative-strapline-header-inner clearfix\">\r\n                    <div></div>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"narrative-slide-container\">\r\n        \r\n            <div class=\"narrative-content\">\r\n                <div class=\"narrative-content-inner\">\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <div class=\"narrative-controls-container clearfix\">\r\n                        <div class=\"narrative-indicators\">\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </div>\r\n                        <button class=\"base narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\r\n                            <div class=\"icon icon-controls-left\"></div>\r\n                        </button>\r\n                        <button class=\"base narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\r\n                            <div class=\"icon icon-controls-right\"></div>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <button class=\"base narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\r\n                <div class=\"icon icon-controls-left\"></div>\r\n            </button>\r\n            <button class=\"base narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\r\n                <div class=\"icon icon-controls-right\"></div>\r\n            </button>\r\n\r\n            <div class=\"narrative-slider clearfix\">\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n            \r\n        </div>\r\n        \r\n       \r\n        <div class=\"narrative-indicators\">\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._numericSteps : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n               \r\n        <div class=\"clearfix\"></div>\r\n\r\n    </div>    \r\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["text"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "	<div class=\"buttons\">\r\n		<div class=\"buttons-inner\">\r\n		    <div class=\"buttons-cluster clearfix\">\r\n		        <button class=\"buttons-action\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0._nextButton : depth0)) != null ? stack1.text : stack1), depth0))
    + "\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._nextButton : depth0)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "</button>\r\n		    </div>\r\n		</div>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"text-inner component-inner\" role=\"region\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._text : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._nextButton : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["imagesquare"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"component-title-outer\"><b>"
    + ((stack1 = ((helper = (helper = helpers.topTitle || (depth0 != null ? depth0.topTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"topTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</b></div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title component-title\">\r\n            <div role=\"heading\" tabindex=\"0\" class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title-inner component-title-inner\"  aria-level=\"4\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                \r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body component-body\">\r\n                    <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body-inner component-body-inner\">\r\n                        "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction component-instruction\">\r\n                    <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\r\n                        "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                    <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\r\n                          "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.instructionFinal : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                      </div>\r\n                </div>\r\n";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "                <div class=\"imagesquare-item-inner item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-id=\"item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <a href=\"#\" class=\"imagesquare-item-title "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " imagesquare-anchor-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-item-anchor-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n                        <div class=\"imagesquare-item-title-image\">\r\n                            <img src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.feedback_src : stack1), depth0))
    + "\">\r\n                        </div>\r\n                        <div class=\"imagesquare-item-title-inner\">\r\n                            <div>\r\n                            <h5 align=\"center\">\r\n                                "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                            </h5>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "visited";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                <div class=\"imagesquare-popup-item index-"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.feedback_src : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <div class=\"imagesquare-popup-content\">\r\n                        <div class=\"imagesquare-popup-body\">\r\n                            <div class=\"imagesquare-content-body-inner\">\r\n                                "
    + ((stack1 = ((helper = (helper = helpers.feedbackbody || (depth0 != null ? depth0.feedbackbody : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"feedbackbody","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "                    <div class=\"imagesquare-popup-item-image-inner-default\">\r\n                        <img class=\"imagesquare-image-inner-alignment\" src=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.feedback_src : stack1), depth0))
    + "\" title=\""
    + alias1(((helper = (helper = helpers.feedbacktitle || (depth0 != null ? depth0.feedbacktitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"feedbacktitle","hash":{},"data":data}) : helper)))
    + "\" />\r\n                    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.topTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n<div class=\"imagesquare-inner component-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isInlineBody : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\r\n    <div class=\"imagesquare-widget component-widget\">\r\n        <div class=\"imagesquare-item\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isInlineBody : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"imagesquare-popup\">\r\n            <div class=\"imagesquare-popup-inner\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["reveal-steps"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"component-title-outer\"><b>"
    + ((stack1 = ((helper = (helper = helpers.topTitle || (depth0 != null ? depth0.topTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"topTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</b></div>";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\"reveal-steps-item-inner item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-id=\"item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <a href=\"#\" class=\"reveal-steps-item-title "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " reveal-steps-anchor-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(container.lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-item-anchor-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n                        <div class=\"reveal-steps-item-title-inner\">\r\n                            <div>\r\n                            <h5 align=\"center\">\r\n                                "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                            </h5>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "visited";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                <div class=\"reveal-steps-popup-item index-"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.feedback_src : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <div class=\"reveal-steps-popup-content\">\r\n                        <div class=\"reveal-steps-popup-body\">\r\n                            <div class=\"reveal-steps-content-body-inner\">\r\n                                "
    + ((stack1 = ((helper = (helper = helpers.feedbackbody || (depth0 != null ? depth0.feedbackbody : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"feedbackbody","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "                    <div class=\"reveal-steps-popup-item-image-inner-default\">\r\n                        <img class=\"reveal-steps-image-inner-alignment\" src=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.feedback_src : stack1), depth0))
    + "\" title=\""
    + alias1(((helper = (helper = helpers.feedbacktitle || (depth0 != null ? depth0.feedbacktitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"feedbacktitle","hash":{},"data":data}) : helper)))
    + "\" />\r\n                    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.topTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n<div class=\"reveal-steps-inner component-inner\">\r\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"reveal-steps-widget component-widget\">\r\n        <div class=\"reveal-steps-item\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"reveal-steps-popup\">\r\n            <div class=\"reveal-steps-popup-inner\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["simplecasestudy"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"component-title-outer\"><b>"
    + ((stack1 = ((helper = (helper = helpers.topTitle || (depth0 != null ? depth0.topTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"topTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</b></div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title component-title\">\r\n            <div role=\"heading\" tabindex=\"0\" class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title-inner component-title-inner\"  aria-level=\"4\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                \r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body component-body\">\r\n                    <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body-inner component-body-inner\">\r\n                        "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction component-instruction\">\r\n                    <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\r\n                        "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                    <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\r\n                          "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.instructionFinal : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                      </div>\r\n                </div>\r\n";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.backgroundColor : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "            <div class=\"simplecasestudy-item-inner item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-id=\"item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n                <a href=\"#\" class=\"simplecasestudy-item-title "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " simplecasestudy-anchor-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-item-anchor-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <div class=\"simplecasestudy-item-title-inner\">\r\n                        <h5 align=\"center\">\r\n                            "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                        </h5>\r\n                    </div>\r\n                    <div class=\"simplecasestudy-item-image-inner-default\">\r\n                        <img class=\"image-inner-alignment\" src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\"\" title=\"\" />\r\n                    </div>\r\n                    <div class=\"simplecasestudy-item-image-inner-visited\">\r\n                        <img class=\"image-inner-alignment\" src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.src1 : stack1), depth0))
    + "\" alt=\"\" title=\"\" />\r\n                    </div>\r\n                </a>\r\n            </div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "visited";
},"17":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "            <div class=\"simplecasestudy-item-inner item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + " simplecasestudy-color-case-parent\" data-id=\"item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n                <a href=\"#\" class=\"simplecasestudy-item-title "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " simplecasestudy-color-case simplecasestudy-anchor-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-item-anchor-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" style=\"background-color:"
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.backgroundColor : stack1), depth0)) != null ? stack1 : "")
    + ";\">\r\n                    <div class=\"simplecasestudy-item-title-image\">\r\n                        <img src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.feedback_src : stack1), depth0))
    + "\">\r\n                    </div>\r\n                    <div class=\"simplecasestudy-item-title-inner\">\r\n                        <div>\r\n                            <h5 align=\"center\">\r\n                                "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                            </h5>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n";
},"19":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\"simplecasestudy-popup-item index-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.feedback_src : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                    <div class=\"simplecasestudy-popup-content\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.feedbacktitle : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        <div class=\"simplecasestudy-popup-body\">\r\n                            <div class=\"simplecasestudy-content-body-inner\">\r\n                                "
    + ((stack1 = ((helper = (helper = helpers.feedbackbody || (depth0 != null ? depth0.feedbackbody : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"feedbackbody","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                            </div>\r\n                            <div class=\"simplecasestudy-content-notify\">\r\n                                <!--<img class=\"image-inner-alignment\" src=\"\" alt=\"\" title=\"\" />-->\r\n                                <button data-id=\""
    + alias4(container.lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-notify-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"simplecasestudy-image-button-inner-alignment\"></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"simplecasestudy-popup-item-image-inner-default\">\r\n                        <img class=\"simplecasestudy-image-inner-alignment\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.graphic : depth0)) != null ? stack1.feedback_src : stack1), depth0))
    + "\" />\r\n                    </div>\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                            <div class=\"simplecasestudy-popup-title\">\r\n                                <h5 class=\"simplecasestudy-popup-title-inner\">\r\n                                    "
    + ((stack1 = ((helper = (helper = helpers.feedbacktitle || (depth0 != null ? depth0.feedbacktitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"feedbacktitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                                </h5>\r\n                            </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.topTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n<div class=\"simplecasestudy-inner component-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isInlineBody : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    <div class=\"simplecasestudy-widget component-widget\">\r\n        <div class=\"simplecasestudy-item\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isInlineBody : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            \r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n\r\n        <div class=\"simplecasestudy-popup\">\r\n            <div class=\"simplecasestudy-popup-inner\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["title-bar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"title-bar-outer\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"title-bar-inner component-inner\"></div>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["yesno-table"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " tabindex=\"0\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " disabled "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " complete submitted user "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    return "correct";
},"7":function(container,depth0,helpers,partials,data) {
    return " two-column-table";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"yesno-table-cell yesno-table-column-radio yesno-table-column-radio-title\" role=\"columnheader\">\r\n                    <span class=\"yesno-table-radio-label yesno-table-radio-label-dont-know\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._columnLabels : depth0)) != null ? stack1.col1 : stack1), depth0))
    + "</span>\r\n                </div>\r\n";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <div role=\"row\"\r\n                 class=\"yesno-table-row component-item "
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " item-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n                <div class=\"yesno-table-cell yesno-table-column-text\">\r\n                    <div class=\"text-value\">\r\n                        <div class=\"text-value-index\">"
    + alias3((helpers.math || (depth0 && depth0.math) || alias2).call(alias1,(data && data.index),"+",1,{"name":"math","hash":{},"data":data}))
    + ".</div>\r\n                        "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                </div>\r\n                <div class=\"yesno-table-cell yesno-table-column-result\">\r\n                    <div class=\"yesno-table-radio-button-icon-correct icon icon-tick\"></div>\r\n                    <div class=\"yesno-table-radio-button-icon-incorrect icon icon-cross\"></div>\r\n                </div>\r\n                <div class=\"yesno-table-cell yesno-table-column-radio yesno-table-column-radio-button yesno-table-radio-yes column-0\">\r\n                    <button role=\"radio\" aria-label=\""
    + alias3((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || alias2).call(alias1,((stack1 = (depths[1] != null ? depths[1]._columnLabels : depths[1])) != null ? stack1.col0 : stack1),{"name":"a11y_normalize","hash":{},"data":data}))
    + "\">\r\n                        <span class=\"yesno-table-radio-label yesno-table-radio-label-yes\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,((stack1 = (depths[1] != null ? depths[1]._columnLabels : depths[1])) != null ? stack1.col0 : stack1),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\r\n                        <div class=\"yesno-table-radio-button\">\r\n                            <div class=\"yesno-table-radio-button-icon icon\"></div>\r\n                        </div>\r\n                    </button>\r\n                </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1]._showDontKnow : depths[1]),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"yesno-table-cell yesno-table-column-radio yesno-table-column-radio-button yesno-table-radio-no column-2\">\r\n                    <button role=\"radio\" aria-label=\""
    + alias3((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || alias2).call(alias1,((stack1 = (depths[1] != null ? depths[1]._columnLabels : depths[1])) != null ? stack1.col2 : stack1),{"name":"a11y_normalize","hash":{},"data":data}))
    + "\">\r\n                        <span class=\"yesno-table-radio-label yesno-table-radio-label-no\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,((stack1 = (depths[1] != null ? depths[1]._columnLabels : depths[1])) != null ? stack1.col2 : stack1),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\r\n                        <div class=\"yesno-table-radio-button\">\r\n                            <div class=\"yesno-table-radio-button-icon icon\"></div>\r\n                        </div>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"13":function(container,depth0,helpers,partials,data) {
    return "incorrect";
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "                <div class=\"yesno-table-cell yesno-table-column-radio yesno-table-column-radio-button yesno-table-radio-dont-know column-1\">\r\n                    <button role=\"radio\" aria-label=\""
    + container.escapeExpression((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || alias2).call(alias1,((stack1 = (depths[1] != null ? depths[1]._columnLabels : depths[1])) != null ? stack1.col1 : stack1),{"name":"a11y_normalize","hash":{},"data":data}))
    + "\">\r\n                        <span class=\"yesno-table-radio-label yesno-table-radio-label-dont-know\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,((stack1 = (depths[1] != null ? depths[1]._columnLabels : depths[1])) != null ? stack1.col1 : stack1),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\r\n                        <div class=\"yesno-table-radio-button\">\r\n                            <div class=\"yesno-table-radio-button-icon icon\"></div>\r\n                        </div>\r\n                    </button>\r\n                </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"yesno-table-inner component-inner\"\r\n     role=\"region\"\r\n     aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._yesnoTable : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\"\r\n     "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._yesnoTable : stack1)) != null ? stack1.ariaRegion : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"accessibility-answer\">\r\n        <span tabindex=\"-1\" role=\"region\" class=\"aria-label prevent-default\" id=\"aria-labels-accessibility-answer\"></span>\r\n    </div>\r\n    <div class=\"yesno-table-widget component-widget "
    + ((stack1 = helpers.unless.call(alias3,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias3,(depth0 != null ? depth0._showDontKnow : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n        <div class=\"yesno-table-table_border\">\r\n        <div class=\"yesno-table-table\">\r\n            <div role=\"row\"\r\n                 class=\"yesno-table-row yesno-table-row-title\">\r\n                <div class=\"yesno-table-cell yesno-table-column-text\">&nbsp;</div>\r\n                <div class=\"yesno-table-cell yesno-table-column-result\">&nbsp;</div>\r\n                <div class=\"yesno-table-cell yesno-table-column-radio yesno-table-column-radio-title\" role=\"columnheader\">\r\n                    <span class=\"yesno-table-radio-label yesno-table-radio-label-yes\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._columnLabels : depth0)) != null ? stack1.col0 : stack1), depth0))
    + "</span>\r\n                </div>\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._showDontKnow : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"yesno-table-cell yesno-table-column-radio yesno-table-column-radio-title\" role=\"columnheader\">\r\n                    <span class=\"yesno-table-radio-label yesno-table-radio-label-no\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._columnLabels : depth0)) != null ? stack1.col2 : stack1), depth0))
    + "</span>\r\n                </div>\r\n            </div>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n        </div>\r\n        <div class=\"buttons\">\r\n"
    + ((stack1 = container.invokePartial(partials.buttons,depth0,{"name":"buttons","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["certificate-input-name"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"certificate-input-name-outer-wrapper\"\r\n     role=\"region\" \r\n     aria-label=\""
    + alias4(((helper = (helper = helpers.popup || (depth0 != null ? depth0.popup : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"popup","hash":{},"data":data}) : helper)))
    + "\"\r\n     tabindex=\"0\">\r\n    <div class=\"certificate-input-name-inner\">\r\n        <div class=\"bg-image\">\r\n            <img src=\"assets/cerficate-input-interface.jpg\">\r\n        </div>\r\n        <div class=\"certificate-input-name-wrapper\">\r\n            <div class=\"body\">		\r\n                <p>"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</p>\r\n            </div>\r\n            <div class=\"form\">\r\n                <div class=\"field-name\">\r\n                    <label for=\"name\" id=\"name-label\">"
    + ((stack1 = ((helper = (helper = helpers.labelName || (depth0 != null ? depth0.labelName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</label>\r\n                    <input type=\"text\" class=\"text-box\" \r\n                           name=\"name\" \r\n                           aria-labelledby=\"name-label\"/>\r\n                </div>\r\n                <div class=\"field-surname\">\r\n                    <label for=\"surname\" id=\"surname-label\">"
    + ((stack1 = ((helper = (helper = helpers.labelSurname || (depth0 != null ? depth0.labelSurname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelSurname","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</label>\r\n                    <input type=\"text\" class=\"text-box\" \r\n                           name=\"surname\" \r\n                           aria-labelledby=\"surname-label\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"submit-btn-row\">\r\n                <a href=\"#\" class=\"button submit-btn clearfix\" \r\n                   role=\"button\" \r\n                   aria-label=\""
    + alias4(((helper = (helper = helpers.ariaLabelButton || (depth0 != null ? depth0.ariaLabelButton : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ariaLabelButton","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + ((stack1 = ((helper = (helper = helpers.labelButton || (depth0 != null ? depth0.labelButton : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelButton","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span></a>\r\n                <a href=\"#\" class=\"button close-btn clearfix\" \r\n                   role=\"button\" \r\n                   aria-label=\""
    + alias4(((helper = (helper = helpers.ariaLabelCloseButton || (depth0 != null ? depth0.ariaLabelCloseButton : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ariaLabelCloseButton","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + ((stack1 = ((helper = (helper = helpers.labelCloseButton || (depth0 != null ? depth0.labelCloseButton : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelCloseButton","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"certificate-shadow\"></div>";
},"useData":true});

this["Handlebars"]["templates"]["certificate"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " - "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._courseTitle_type : depth0)) != null ? stack1.standalone : stack1), depth0)) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.courseTitle_lang || (depth0 != null ? depth0.courseTitle_lang : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"courseTitle_lang","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.scoreAsPercent || (depth0 != null ? depth0.scoreAsPercent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"scoreAsPercent","hash":{},"data":data}) : helper)))
    + "%";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.maxScore || (depth0 != null ? depth0.maxScore : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxScore","hash":{},"data":data}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"box_headingtext4\" role=\"region\" tabindex=\"0\">"
    + ((stack1 = ((helper = (helper = helpers.extraText || (depth0 != null ? depth0.extraText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"extraText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"certificate-outer-wrapper\"\r\n     role=\"region\" \r\n     aria-label=\""
    + alias4(((helper = (helper = helpers.popup || (depth0 != null ? depth0.popup : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"popup","hash":{},"data":data}) : helper)))
    + "\"\r\n     tabindex=\"0\">\r\n    <div class=\"certificate-inner\">\r\n        <div class=\"bg-image\">\r\n            <img src=\"assets/cerficate-interface.jpg\">\r\n        </div>\r\n        <div class=\"certificate-wrapper\">\r\n            <div id=\"box_headingtext1\" role=\"region\" tabindex=\"0\">"
    + ((stack1 = ((helper = (helper = helpers.headingText || (depth0 != null ? depth0.headingText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headingText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n            <div id=\"box_text\" role=\"region\" tabindex=\"0\">"
    + ((stack1 = ((helper = (helper = helpers.boxText || (depth0 != null ? depth0.boxText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"boxText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n            <div id=\"userName\" role=\"region\" tabindex=\"0\">"
    + ((stack1 = ((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n            <img src=\"assets/certificate-line.png\">\r\n            <div id=\"box_text1\" role=\"region\" tabindex=\"0\">"
    + alias4(((helper = (helper = helpers.boxTextContinued || (depth0 != null ? depth0.boxTextContinued : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"boxTextContinued","hash":{},"data":data}) : helper)))
    + "</div>\r\n            <div id=\"box_headingtext2\" role=\"region\" tabindex=\"0\">"
    + alias4(((helper = (helper = helpers.courseTitle || (depth0 != null ? depth0.courseTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"courseTitle","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isStandalone : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.courseTitle_lang : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n            <div id=\"box_text2\" role=\"region\" tabindex=\"0\">"
    + ((stack1 = ((helper = (helper = helpers.labelScore || (depth0 != null ? depth0.labelScore : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelScore","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isPercentageBased : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "<br>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + ".</div>\r\n            "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.extraText : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n            <div id=\"print\"></div>\r\n        </div>\r\n\r\n        <div class=\"print-btn-row\">\r\n            <div class=\"button-wrapper\">\r\n                <a href=\"#\" class=\"button print-btn clearfix\" \r\n                   role=\"button\" \r\n                   aria-label=\""
    + alias4(((helper = (helper = helpers.ariaLabelPrintButton || (depth0 != null ? depth0.ariaLabelPrintButton : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ariaLabelPrintButton","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + ((stack1 = ((helper = (helper = helpers.labelPrintButton || (depth0 != null ? depth0.labelPrintButton : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelPrintButton","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span></a>\r\n                <a href=\"#\" class=\"button close-btn clearfix\" \r\n                   role=\"button\" \r\n                   aria-label=\""
    + alias4(((helper = (helper = helpers.ariaLabelCloseButton || (depth0 != null ? depth0.ariaLabelCloseButton : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ariaLabelCloseButton","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + ((stack1 = ((helper = (helper = helpers.labelCloseButton || (depth0 != null ? depth0.labelCloseButton : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelCloseButton","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span></a>\r\n            </div>    \r\n        </div>\r\n        <div class=\"watermark\">"
    + ((stack1 = ((helper = (helper = helpers.watermark || (depth0 != null ? depth0.watermark : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"watermark","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n    </div>\r\n</div>\r\n<div class=\"certificate-shadow\"></div>";
},"useData":true});

this["Handlebars"]["templates"]["languagePickerDrawerView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"languagepicker-language drawer-item "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias4(((helper = (helper = helpers._language || (depth0 != null ? depth0._language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = (helpers.equals || (depth0 && depth0.equals) || alias2).call(alias1,(depth0 != null ? depth0._direction : depth0),"rtl",{"name":"equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n          <button class=\"base drawer-item-open\" data-language=\""
    + alias4(((helper = (helper = helpers._language || (depth0 != null ? depth0._language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</button>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"4":function(container,depth0,helpers,partials,data) {
    return "dir-rtl";
},"6":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"languagepicker\">\r\n  <div class=\"languagepicker-inner\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._languages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["languagePickerView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <button class=\"languagepicker-language "
    + alias4(((helper = (helper = helpers._language || (depth0 != null ? depth0._language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers._language || (depth0 != null ? depth0._language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data}) : helper)))
    + "\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"languagepicker-inner\">\r\n    <div class=\"languagepicker-title\">\r\n        <div class=\"languagepicker-title-inner\" role=\"heading\" tabindex=\"0\">\r\n            "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n        </div>\r\n    </div>\r\n    <div class=\"languagepicker-body\">\r\n        <div class=\"languagepicker-body-inner\">\r\n            "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n        </div>\r\n    </div>\r\n    <div class=\"languagepicker-languages\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._languages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isPartOfAssessment : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(26, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <div role=\"listitem\" class=\"page-level-progress-item drawer-item\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisible : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "                    <div class=\"page-level-progress-item-title-inner accessible-text-block h5\">\r\n                    "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                    </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisible : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data})) != null ? stack1 : "")
    + "            </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <button class=\"base page-level-progress-item-title clearfix drawer-item-open\" tabindex=\"0\" role=\"button\" data-page-level-progress-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"page-level-progress-item-title drawer-item-open disabled clearfix\">\r\n                    <span class=\"aria-label prevent-default\" tabindex=\"0\" role=\"button\">"
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.locked : stack1), depth0))
    + ". "
    + alias1(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"title","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <div class=\"page-level-progress-indicator page-level-progress-indicator-"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n                            <div class=\"page-level-progress-indicator-bar\">\r\n                            </div>\r\n                        </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "complete";
},"15":function(container,depth0,helpers,partials,data) {
    return "incomplete";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            <div class=\"page-level-progress-item-optional-text\">\r\n                            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.optionalContent : stack1), depth0))
    + "\r\n                            </div>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            <div class=\"page-level-progress-indicator page-level-progress-indicator-"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n                                <div class=\"page-level-progress-indicator-bar\">\r\n                                </div>\r\n                            </div>\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "                </button>\r\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "                </div>\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <div role=\"listitem\" class=\"page-level-progress-item drawer-item\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisible : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "                    <div class=\"page-level-progress-item-title-inner accessible-text-block h5\">\r\n                    "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                    </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(31, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisible : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data})) != null ? stack1 : "")
    + "            </div>\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <button class=\"base page-level-progress-item-title clearfix drawer-item-open\" tabindex=\"0\" role=\"button\" data-page-level-progress-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <div class=\"page-level-progress-indicator page-level-progress-indicator-"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n                            <div class=\"page-level-progress-indicator-bar\">\r\n                            </div>\r\n                        </div>\r\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(32, data, 0),"data":data})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            <div class=\"page-level-progress-indicator page-level-progress-indicator-"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n                                <div class=\"page-level-progress-indicator-bar\">\r\n                                </div>\r\n                            </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"page-level-progress-inner\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgress : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgress : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n    <div role=\"list\">\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"aria-label a11y-ignore-focus prevent-default\" tabindex=\"0\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgressEnd : stack1), depth0))
    + "\"/>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressMenu"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"page-level-progress-menu-item-indicator\">\r\n	<div class=\"page-level-progress-menu-item-indicator-bar\" style=\"width:"
    + container.escapeExpression(((helper = (helper = helpers.completedChildrenAsPercentage || (depth0 != null ? depth0.completedChildrenAsPercentage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"completedChildrenAsPercentage","hash":{},"data":data}) : helper)))
    + "%\"><span class=\"aria-label\" role=\"region\" tabindex=\"0\"></span></div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"page-level-progress-navigation-completion\">\r\n    <div class=\"page-level-progress-navigation-bar\"></div>\r\n</div>\r\n<div class=\"page-level-progress-navigation-text\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["resources"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "			<button class=\"base resources-show-all selected\" data-filter=\"all\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.allAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\r\n				<span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.all : stack1), depth0))
    + "</span>\r\n			</button>\r\n"
    + ((stack1 = (helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || alias4).call(alias3,(depth0 != null ? depth0.resources : depth0),"_type","document",{"name":"if_collection_contains","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || alias4).call(alias3,(depth0 != null ? depth0.resources : depth0),"_type","media",{"name":"if_collection_contains","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || alias4).call(alias3,(depth0 != null ? depth0.resources : depth0),"_type","link",{"name":"if_collection_contains","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<button class=\"base resources-show-document\" data-filter=\"document\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.documentAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\r\n				<span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.document : stack1), depth0))
    + "</span>\r\n			</button>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<button class=\"base resources-show-media\" data-filter=\"media\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.mediaAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\r\n				<span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.media : stack1), depth0))
    + "</span>\r\n			</button>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<button class=\"base resources-show-link\" data-filter=\"link\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.linkAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\r\n				<span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.link : stack1), depth0))
    + "</span>\r\n			</button>\r\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"resources-item drawer-item "
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + "\">\r\n		<button class=\"base resources-item-open drawer-item-open\" data-href=\""
    + alias4(((helper = (helper = helpers._link || (depth0 != null ? depth0._link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_link","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\" role=\"button\" aria-label=\""
    + alias4(helpers.lookup.call(alias1,((stack1 = (depths[1] != null ? depths[1].model : depths[1])) != null ? stack1._filterButtons : stack1),(depth0 != null ? depth0._type : depth0),{"name":"lookup","hash":{},"data":data}))
    + ". "
    + alias4(container.lambda(((stack1 = (depths[1] != null ? depths[1].model : depths[1])) != null ? stack1.itemAriaExternal : stack1), depth0))
    + ". "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ". "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">\r\n			<div class=\"drawer-item-title\">\r\n				<div class=\"drawer-item-title-inner h5\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n			</div>\r\n			<div class=\"drawer-item-description\">\r\n				<div class=\"drawer-item-description-inner\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n			</div>\r\n		</button>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"resources-inner\" role=\"complementary\">\r\n	<div class=\"resources-filter clearfix resources-col-"
    + alias3((helpers.return_column_layout_from_collection_length || (depth0 && depth0.return_column_layout_from_collection_length) || alias2).call(alias1,(depth0 != null ? depth0.resources : depth0),"_type",{"name":"return_column_layout_from_collection_length","hash":{},"data":data}))
    + "\">\r\n"
    + ((stack1 = (helpers.if_collection_contains_only_one_item || (depth0 && depth0.if_collection_contains_only_one_item) || alias2).call(alias1,(depth0 != null ? depth0.resources : depth0),"_type",{"name":"if_collection_contains_only_one_item","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "	</div>\r\n	<div class=\"resources-item-container\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.resources : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n	<div class=\"aria-label a11y-ignore-focus prevent-default\" tabindex=\"0\" aria-label=\""
    + alias3(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._resources : stack1)) != null ? stack1.resourcesEnd : stack1), depth0))
    + "\"/>\r\n</div>\r\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " trickle-full-width";
},"3":function(container,depth0,helpers,partials,data) {
    return " locking";
},"5":function(container,depth0,helpers,partials,data) {
    return "display-none";
},"7":function(container,depth0,helpers,partials,data) {
    return "disabled\" disabled=\"disabled\"";
},"9":function(container,depth0,helpers,partials,data) {
    return "\"";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		        		"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		        		"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._isStart : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			        		"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			        	"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"component "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-component "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-component-"
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"_id","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isFullWidth : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._className : stack1), depth0))
    + "\">\r\n	<div class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-inner component-inner"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isLocking : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isVisible : stack1),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n	        <button role=\"button\" class=\"button "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isDisabled : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._isFinal : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "	        </button>\r\n	</div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["help"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"help-inner\">\r\n	<div class=\"help-title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._help : depth0)) != null ? stack1.title : stack1), depth0))
    + "</title>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["nav-buttons-item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"label\"><span class=\"labelText\">"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data}) : helper)))
    + "</span></div>";
},"useData":true});

this["Handlebars"]["templates"]["nav-buttons"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"nav-buttons\">\r\n    <div class=\"nav-buttons-container-inner\">\r\n    	<div class=\"page-level-progress-nav-buttons\"></div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["nav-link"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <button role=\"button\" class=\"nav-link-button button\" tabindex=\"0\" aria-label=\""
    + alias4(((helper = (helper = helpers._ariaLabel || (depth0 != null ? depth0._ariaLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_ariaLabel","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"nav-link-inner "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._navLink : depth0)) != null ? stack1._classes : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._navLink : depth0)) != null ? stack1._items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu-item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.visited : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"0\"";
},"5":function(container,depth0,helpers,partials,data) {
    return "visited";
},"7":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"9":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\"";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "            <img  id=\"graphic-"
    + alias1(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" src=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" />\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing, alias4="function";

  return "<div class=\"menu-item-inner\" aria-label=\""
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuItem : stack1), depth0))
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuItem : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " role=\"button\" class=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " accessible-text-block\" "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n    <div class=\"menu-item-graphic\">\r\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"menu-item-title\">\r\n        <div id=\"menu-item-title-base\" class=\"menu-item-title-base\">\r\n            <div id=\"menu-item-title-left-base\" class=\"menu-item-title-left-base menu-item-title-left-base-normal\"></div>\r\n            <div id=\"menu-item-title-right-base\" class=\"menu-item-title-right-base menu-item-title-right-base-normal\"></div>\r\n        </div>\r\n        <div id=\"menu-item-title-inner-"
    + alias1(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"menu-item-title-inner h3 accessible-text-block\" role=\"heading\" aria-level=\"2\" tabindex=\"0\">"
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "					<div class=\"menu-title\">\r\n						<div class=\"menu-title-inner h1 accessible-text-block\" role=\"heading\" aria-level=\"1\" tabindex=\"0\">\r\n							"
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n						</div>\r\n					</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<div class=\"menu-body\">\r\n						<div class=\"menu-body-inner accessible-text-block\">\r\n							"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n						</div>\r\n					</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"menu-container\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\r\n	<div class='menu-container-inner box-menu-inner clearfix'>\r\n		<div class=\"menu-wrapper\">\r\n			<div class=\"menu-header\">\r\n				<div class=\"menu-header-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n			<div class=\"menu-items\">\r\n				\r\n			</div>\r\n			<div class=\"aria-label rest-on-top a11y-ignore-focus prevent-default\" tabindex=\"0\" role=\"region\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuEnd : stack1), depth0))
    + "</div>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"article-title\">\r\n            <div role=\"heading\" tabindex=\"0\" class=\"article-title-inner h2\"  aria-level=\"2\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"article-body\">\r\n            <div class=\"article-body-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"article-instruction\">\r\n            <div class=\"article-instruction-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"article-inner block-container\">\r\n\r\n    <div class=\"article-header\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"block-title\">\r\n            <div role=\"heading\" tabindex=\"0\" class=\"block-title-inner h3\"  aria-level=\"3\">\r\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"block-body\">\r\n            <div class=\"block-body-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        <div class=\"block-instruction\">\r\n            <div class=\"block-instruction-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n            <div class=\"block-instruction-inner\">\r\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.instructionFinal : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"block-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <div class=\"component-container\">\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"buttons-display\">\r\n        <div class=\"buttons-marking-icon icon display-none\">\r\n        </div>\r\n        <div class=\"buttons-display-inner\">\r\n        </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda;

  return "<div class=\"buttons-inner\">\r\n    <div class=\"buttons-cluster clearfix\">\r\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <button class=\"buttons-action\" aria-label=\""
    + container.escapeExpression(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\r\n    </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"drawer-inner\">\r\n	<span class='aria-label prevent-default' tabindex='0' role='region'>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.drawer : stack1), depth0))
    + "</span>\r\n	<div class=\"drawer-holder\">\r\n	</div>\r\n	<div class=\"drawer-toolbar clearfix\">\r\n		<div class=\"drawer-back-button\">\r\n		<button class=\"base drawer-back icon icon-controls-small-left\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\r\n		</button>\r\n		</div>\r\n		<div class=\"drawer-close-button\">\r\n		<button class=\"base drawer-close icon icon-cross\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeDrawer : stack1), depth0))
    + "\">\r\n		</button>\r\n\r\n		</div>\r\n		<div class=\"drawer-title\"></div>\r\n		<div class=\"drawer-description\"></div>\r\n	</div>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<button class=\"base drawer-item-open "
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"drawer-item-title\">\r\n		<div class=\"drawer-item-title-inner h5\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n	</div>\r\n	<div class=\"drawer-item-description\">\r\n		<div class=\"drawer-item-description-inner\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\r\n	</div>\r\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\r\n    <div class=\"loader-gif\"><div role=\"heading\" tabindex=\"0\" class=\"h3\" aria-level=\"1\">Loading...</div></div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"navigation-inner clearfix\" role=\"navigation\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigation : stack1), depth0))
    + "\">\r\n    <button class=\"base navigation-drawer-toggle-button icon icon-menu\" data-event=\"homeButton\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigationDrawer : stack1), depth0))
    + "\">Menu</button>\r\n    <div class=\"section-heading-title\">\r\n    	<div class=\"section-heading-title-main\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._stickyHeader : stack1)) != null ? stack1.title : stack1), depth0))
    + "</div>\r\n        <div class=\"section-heading-title-inner ellipsis\"></div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers._workingIndex || (depth0 != null ? depth0._workingIndex : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_workingIndex","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "                    <div class=\"notify-popup-icon\">\r\n                        <div class=\"icon"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"if_value_equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"alert",{"name":"if_value_equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n                        </div>\r\n                    </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " icon-question";
},"6":function(container,depth0,helpers,partials,data) {
    return " icon-warning";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                    <div class=\"notify-popup-title\">\r\n                        <div class=\"notify-popup-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\r\n                        "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                    </div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"notify-popup-body\">\r\n                        <div class=\"notify-popup-body-inner\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\r\n                    </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                    <div class=\"notify-popup-buttons\">\r\n                        <button class=\"notify-popup-button notify-popup-alert-button\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\r\n                    </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"notify-popup-buttons\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._prompts : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                            <button class=\"notify-popup-button notify-popup-prompt-button\" data-event=\""
    + container.escapeExpression(((helper = (helper = helpers._callbackEvent || (depth0 != null ? depth0._callbackEvent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <button class=\"base notify-popup-done\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\r\n                <div class=\"notify-popup-icon-close icon icon-cross\"></div>\r\n            </button>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"custom-button-in-notify\">\r\n        "
    + ((stack1 = ((helper = (helper = helpers.childNotifyButtonHtml || (depth0 != null ? depth0.childNotifyButtonHtml : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"childNotifyButtonHtml","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div working-Index=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._workingIndex : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" class=\"notify-popup notify-type-"
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_classes","hash":{},"data":data}) : helper)))
    + "\" role=\"region\" aria-label=\""
    + alias4(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\r\n    <div class=\"notify-popup-inner\">\r\n        <div class=\"notify-popup-content\">\r\n            <div class=\"notify-popup-content-inner\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._showIcon : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"alert",{"name":"if_value_equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"if_value_equals","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"popup",{"name":"if_value_equals","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.childNotifyButtonHtml : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n\r\n<div class=\"notify-shadow\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "<div class=\"notify-push-inner\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\r\n	<div class=\"notify-push-title\">\r\n		<div class=\"notify-push-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\r\n			"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n	<div class=\"notify-push-body\">\r\n		<div class=\"notify-push-body-inner\">\r\n			"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias4).call(alias3,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n</div>\r\n<button class=\"base notify-push-close\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\r\n	<span class=\"icon icon-cross\"></span>\r\n</button>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["overlayPlayButton"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"overlayPlayButton\">\r\n    <div class=\"playImage\"></div>\r\n 	\r\n</div>\r\n<div class=\"mobile-notify\">\r\n	<div class=\"mobile-notify-body\"> This device doesn't support auto play the audio. Click on OK to hear the audio.</div>\r\n	<button class=\"overlayOkButton\">OK</button>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"page-inner article-container\" role=\"main\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.page : stack1), depth0))
    + "\">\r\n\r\n    	\r\n</div>\r\n<div class=\"aria-label rest-on-top a11y-ignore-focus prevent-default\" tabindex=\"0\" role=\"region\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.pageEnd : stack1), depth0))
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow display-none\"></div>";
},"useData":true});

return this["Handlebars"];

});