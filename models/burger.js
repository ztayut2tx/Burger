var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
//creates new burger
    create: function(cols,vals,cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
//sends burger to devoured
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals , condition, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;