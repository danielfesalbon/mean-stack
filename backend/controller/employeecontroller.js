const express = require('express');
var router = express.Router();
var Employee = require('../model/employee');
var ObjectID = require('mongoose').Types.ObjectId;

/* ***** ***** Get all employee records ***** ***** */
router.get('/list', (req, res) => {
    Employee.find((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error getting employees: " + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`Employee ${req.params.id} not found`);
    }
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error getting employee: " + JSON.stringify(err, undefined, 2));
        }
    });
});


/* ***** ***** Save employee ***** ***** */
router.post('/save', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position
    });
    emp.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error saving employee: " + JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/update', (req, res) => {
    if (!ObjectID.isValid(req.body._id)) {
        return res.status(400).send('Employee' + req.body._id + 'not found');
    }
    Employee.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error updating employee: " + JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`Employee ${req.params.id} not found`);
    }
    Employee.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log("Error getting employee: " + JSON.stringify(err, undefined, 2));
        }
    });
});


module.exports = router;