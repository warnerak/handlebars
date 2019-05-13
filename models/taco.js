var orm = require("../config/orm.js");

var taco = {
    all: function (cb) {
        orm.all("tacos", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("tacos", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("tacos", objColVals, condition, function (res) {
            cb(res);
        });
    }
};


module.exports = taco;
