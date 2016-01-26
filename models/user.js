/* jshint -W079 */
/* jshint -W020 */

"use strict";
var _ = require("lodash");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');
var request = require('request');
var thenjs = require('thenjs');
var fs = require('fs');
var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var mongoose_options = { server: { poolSize: 10 }};
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var deep = require('mongoose-deep-populate')(mongoose);
var schema_options = {versionKey: false, toJSON: { getters: true, virtuals: true }, toObject: { getters: true, virtuals: true }};


module.exports = function() {
    var userSchema = new Schema({
        name:{type:String,unique:true},
        pass:String
    },schema_options);
    global.User = mongoose.model('User',userSchema);
};
