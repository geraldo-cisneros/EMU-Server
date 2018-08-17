var mongoose = require('mongoose');

var inputSwitchSchema = new mongoose.Schema({
    create_date: {
        type: Date,
        default: Date.now
    },
    //names are temporary... change when switch functions are decided
    switch1: String,
    switch2: String,
    switch3: String,
    switch4: String,
    switch5: String,
    switch6: String,

});

var inputSwitch = mongoose.model('DCU', inputSwitchSchema);

module.exports.inputSwitch = function(inputData, callback){
    var itemOne = inputSwitch({
        switch1: inputData.sw1,
        switch2: inputData.sw2,
        switch3: inputData.sw3,
        switch4: inputData.sw4,
        switch5: inputData.sw5,
        switch6: inputData.sw6,
        }).save(function(err){
            if (err) 
                throw (err); 
        console.log("successfully saved switches");
       
    });
}