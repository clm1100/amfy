var _ = require("lodash");
var urlencode = require('urlencode');
var request = require('request');
var moment = require('moment');
var swig = require('swig');
var express = require('express');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var app = express();

//连接数据库;
var mongoose = require('mongoose'), mongoosastic = require('mongoosastic');
var mongoose_options = { server: { poolSize: 10 }};
var mongoosastic_options;
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/clm', mongoose_options);
mongoosastic_options = { host: 'localhost', port: 9200, hydrate:true, bulk: { size: 500, delay: 500} };
//设置静态文件
app.use(express.static(__dirname + ('/public')));
app.use(bodyParser.json({limit: '3mb'}));
app.use(bodyParser.urlencoded({limit:'3mb', extended: true}));
var zhuyemodel = require('./models/zhuye')();
var uuser = require('./models/user')();

//设置session
app.use(session({
        secret:'essdfdsf',
        store: new MongoStore({
            cookieSecret:'qwertyuiop',
            db:'clm',
            host:"localhost"
        })
    }
));
//设置session中间件;
app.use(function(req,res,next){
    var user = req.session.user;


        app.locals.user = user;

    next();
});
//设置模板引擎
app.engine('html',swig.renderFile);
app.set('view engine','html');

//设置路由;
var zhuye  = require("./routes/zhuye.js")();
var login  = require("./routes/login.js")();
var logup  = require("./routes/logup.js")();
app.use(zhuye);
app.use(login);
app.use(logup);


app.listen(process.env.PORT || 5050);
console.log(111)
