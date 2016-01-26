var _ = require("lodash");
var urlencode = require('urlencode');
var request = require('request');
var moment = require('moment');
var express = require('express');
var router = express.Router();

module.exports = function(){
    router.get('/',function(req,res){
        Zhuye.findOne({"t":"手动对接"},function(err,item){
            if(!item) item = new Zhuye();
            item.t = "手动对接1111";
            item.d = "是大家都说";
            item.save(function(err,data){
                res.render('index',{title:data.td});
            });
        })
    });
    return router;
};