
function GetQueryString(name) {
                    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                    var r = window.location.search.substr(1).match(reg);
                    if(r!=null)return  unescape(r[2]); return null;
}
var imgarr = [
    "http://suancai-mxp.stor.sinaapp.com/xz%2Fannajin.jpg",
    "http://suancai-mxp.stor.sinaapp.com/xz%2Fbaka.jpg",
    "http://suancai-mxp.stor.sinaapp.com/xz%2Fbb8.jpeg",
    "http://suancai-mxp.stor.sinaapp.com/xz%2Fjiaba.jpg",
    "http://suancai-mxp.stor.sinaapp.com/xz%2Flaiya.jpg",
    "http://suancai-mxp.stor.sinaapp.com/xz%2Fluke.jpg"
];
var xzname = [
    "阿纳金",
    "楚巴卡",
    "BB_8",
    "贾巴",
    "莱亚公主",
    "卢克"
];
//向url传递数据;
function chuandi(){
    var dianji_data = {};
    var dianji_data1 ;
    var dianji_data2 ;
    var name3;
    var name4;
    var imgsrc;
    $("#show-alert").click(function(){
        var t = Math.floor(Math.random()*6);
        imgsrc =imgarr[t];
        name4 =xzname[t];
        name3 = $("#name3").val();
        dianji_data.name3 = name3;
        dianji_data.name4 = name4;
        dianji_data.imgsrc = imgsrc;
        dianji_data1 = JSON.stringify(dianji_data);
        dianji_data2 = encodeURIComponent(dianji_data1);
        if(name3){
            $.confirm("现在就去测", function() {
                //点击确认后的回调函数
                window.location.href = "test.html?"+dianji_data2+"+++";
            }, function() {
                //点击取消后的回调函数
            });
        }else{
            $.alert("快去填写姓名")
        }
    })
}
//接受url中的数据;
function jieshou(){
    var huoqu_data = window.location.search.substring(window.location.search.indexOf("?")+1,window.location.search.indexOf("+++"));
    var huoqu_data1 = decodeURIComponent(huoqu_data);
    var huoqu_data2 = JSON.parse(huoqu_data1);
    console.log(huoqu_data1);
    console.log(huoqu_data2.name3);
    $("#name").html(huoqu_data2.name3);
    $("#name2").html(huoqu_data2.name4);
    $(".img img").attr({"src":huoqu_data2.imgsrc})
}
$(function(){
    chuandi();
    jieshou();
});
