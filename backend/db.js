

/* 
 *               **** NOTE ****
 * ----------------------------------------------
 * This file db.js is for the mongodb configuration
 * ----------------------------------------------
 */
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/cruddb";
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(url, (err) => {
    if (!err) {
        console.log('Connected to Mongo..');
    } else {
        console.log('Connectio error: ' + JSON.stringify(err, undefined, 2));
    }
});


/*const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const dbname = "cruddb";
const url = "mongodb://localhost:27017";
const mongoOptions = { useUnifiedTopology: true, useNewUrlParser: true };
const state = { db: null };*/


/*
 * -------------------------------
 * Datbase connection native code
 * -------------------------------
 */
/*const connect = (cb) => {
    if (state.db) {
        cb();
    } else {
        MongoClient.connect(url, mongoOptions, (err, client) => {
            if (err) {
                console.log(err);
                cb(err);
            } else {
                console.log("Connected..");
                state.db = client.db(dbname);
                cb();
            }
        })
    }
}*/

/*const getPK = (_id) => {
    return ObjectID(_id);
}*/


/*const getDB = () => {
    return state.db;
}*/


/*
 * -----------------------------------------------------------
 * Exported for the methods to be executed in the app.js file
 * -----------------------------------------------------------
 */
module.exports = mongoose;