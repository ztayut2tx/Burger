var express = require("express");
var burger = require("../model/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObj = {
            burger_name: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});
router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({id: result.insertId});
    });
});
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    
    console.log("condition", condition);
    
    burger.update({
        devoured: true
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;