/* jshint -W079 */
/* jshint -W020 */

"use strict";
var _ = require("lodash");
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
    var zhuyeSchema = new Schema({
        t:String,
        d:String,
        c:String
    },schema_options);
    zhuyeSchema.virtual('td').get(function(){
        return this.t+''+this.d;
    });
    global.Zhuye = mongoose.model('Zhuye',zhuyeSchema);
};
