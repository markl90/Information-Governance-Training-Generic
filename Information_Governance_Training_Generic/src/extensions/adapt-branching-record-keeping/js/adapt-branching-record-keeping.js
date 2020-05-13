define(function (require) {
    var Adapt = require('coreJS/adapt');

    Adapt.BranchingRecordKeeping = _.extend({
        groupRecords: {},

        initialize: function() {
            
        },

        updateGroupRecord: function(groupID, screenID, result) {
            if(!this.groupRecords.hasOwnProperty(groupID))
                this.groupRecords[groupID] = {};
            
            this.groupRecords[groupID][screenID] = result;
        },

        getGroupResult: function(groupID) {
            if(!this.groupRecords.hasOwnProperty(groupID)) {
                console.log('Please check if provided GroupID (',groupID,') either not exist or no records yet recorded.');
                return;
            }
            var total = 0;
            var passed = 0;
            _.each(this.groupRecords[groupID], function(item){
                console.log("item: ", item);
                total++;
                if(item==1)
                passed++
            });

            if(total == passed)
                return 'good';
            if(passed > 0 && passed < total)
                return 'intermediate';
            else
                return 'poor';
        }
    });

    Adapt.BranchingRecordKeeping.initialize();
    return Adapt.BranchingRecordKeeping;
});