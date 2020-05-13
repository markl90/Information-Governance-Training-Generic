# adapt-yesno-table

Set of questions for which up to 3 possible answers are presented (minimum 2) in a form of a table.

## Installation

Download the ZIP and extract into the src > components directory and run an appropriate Grunt task.

## Settings Overview

The attributes listed below are used in *components.json* to configure **Yes/No Table**, and are properly formatted as JSON in [example.json](/example.json). 

### Attributes

In addition to the attributes specifically listed below, [*question components*](https://github.com/adaptlearning/adapt_framework/wiki/Core-Plug-ins-in-the-Adapt-Learning-Framework#question-components) can implement the following sets of attributes:   
+ [**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes): These are inherited by every Adapt component. They have no default values. Like the attributes below, their values are assigned in *components.json*. 
+ [**core buttons**](https://github.com/adaptlearning/adapt_framework/wiki/Core-Buttons): Default values are found in *course.json*, but may be overridden by **Yes/No Table's** model in *components.json*.

### Accessibility
**Yes/No Table Question** has been assigned a label using the [aria-label](https://github.com/adaptlearning/adapt_framework/wiki/Aria-Labels) attribute: **ariaRegion**. This label is not a visible element. It is utilized by assistive technology such as screen readers. Should the region's text need to be customised, it can be found within the **globals** object in [*properties.schema*](/properties.schema).   

For user/my answer string created it requires **_accAnswer** attribute:
```
            "_yesnoTable": {
                "ariaRegion": "This is a Yes/No table, select an option for each row then select submit button below.",
                "_accAnswer": {
                    "correctAnswerPrefix": "Correct answer is: ",
                    "myAnswerPrefix": "Your answer is: ",
                    "_pattern": {
                        "correctAnswer": "%itemPrefix% %text% %selection% %choice%.",
                        "myAnswer": "%itemPrefix% %text% %selectionPrefix% %selection% %choice%, %ratingPrefix% %_rating%."
                    },
                    "itemPrefix": "Option",
                    "selectionPrefix": "You have",
                    "selection": "Selected",
                    "ratingPrefix": "this is",
                    "_rating": {
                        "correct": "Correct",
                        "incorrect": "Incorrect"
                    }
                }
            }
```
Also the 'Selected' state is used in IE to describe the buttons state due to the [BUG](https://connect.microsoft.com/IE/feedback/details/1157686/ie11-does-not-pick-up-aria-checked-state-for-radio-roles).
