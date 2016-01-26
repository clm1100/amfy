
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
$(function(){
    var huoqu_data = window.location.search.substring(window.location.search.indexOf("?")+1,window.location.search.indexOf("+++"));
    var huoqu_data1 = decodeURIComponent(huoqu_data);
    var huoqu_data2 = JSON.parse(huoqu_data1);
    console.log(huoqu_data1);
    console.log(huoqu_data2.name3);

});