/**
 * Created by xukan on 11/3/2017.
 */
var mongoose = require('mongoose');
var mbtaSchema = mongoose.Schema({

    TripId: Number,
    Subscription: {
        type: String, enum: ["Y", "N"]
    },
    ADA: {
        type: String, enum: ["ADA", "Non-ADA"]
    },
    Anchor: {type: String, enum: ["A", "P"]},
    RequestTime: Date,
    PCAs: {type: Number, enum: [0, 1]},
    Companions: Number,
    ServiceAnimal: {type: String, enum: ["Y", "N"]},
    PickHouseNumber: String,
    PickAddress1 : String,
    Pickcity: String,
    Pickzip: Number,
    DropHouseNumber: String,
    DropAddress1: String,
    Dropcity: String,
    DropZip: Number,




}, {collection: 'mbta'});
module.exports = mbtaSchema