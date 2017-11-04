/**
 * Created by xukan on 11/3/2017.
 */

var mongoose = require('mongoose');
var mbtaReturnSchema = mongoose.Schema({

    CarId: Number,
    AllTripId: [{type: Number, ref: "MBTAModel"}],
    PickAndDropAddress:[String],
    PickAndDropTime:[Date],


}, {collection: 'mbtaReturn'});
module.exports = mbtaReturnSchema