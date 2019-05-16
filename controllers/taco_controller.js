var express = require("express");

var router = express.Router();

var taco = require("../models/taco.js");

router.get("/", function (req, res) {
    taco.all(function (data) {
        var hbsObject = {
            tacos: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/tacos", function (req, res) {
    taco.create([
        "taco_name", "devoured"
    ], [
            req.body.taco_name, req.body.devoured
        ], function (result) {

            res.json({ id: result.insertId });
            console.log("i am in taco_controller")
        });
});

router.put("/api/tacos/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    taco.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


router.delete("/api/tacos/:id", function (req, res) {
    console.log("i am in controller.js");
    var condition = "id = " + req.params.id;
    console.log(condition);

    taco.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;
