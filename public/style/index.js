document.addEventListener("touchmove", function(e){ e.preventDefault(); }, false);
$(function(){
    var Oimg = new Image();
    Oimg.src = "img/s_04.png";
    $(Oimg).load(function(){
        $(".body").css({"opacity":"1"}).addClass("animated fadeIn").one('webkitAnimationEnd  animationend', function() {
            //alert(11)
        });
    });
    var data = {};
    //alert($("document").height());
    var h = $(window).height();
    var w = $(window).width();
    $("body").css({height:h,width:w});
    $("#btn").tap(function(){
        var name = $("#name").val();
        data.name = name;

        if(!name){
            $(".msg").addClass("action").one('webkitTransitionEnd  transitionend', function() {
                $(".msg").removeClass("action");
            });
            return true
        }else{
            var filter = name.replace(/[^\u4e00-\u9fa5]/gi,"");
            var zhuan;
            if(!filter){
                filter = "A";
                zhuan = filter;
            }else{
                filter = pinyin.getCamelChars(filter);
                zhuan = filter.substr(-1);
            }
        }
        data.zhuan = zhuan;
        var json = JSON.stringify(data);
        var enjson = encodeURI(json);
        console.log(data);
        console.log(json);
        console.log(enjson);
        window.location.href = "b.html?"+"data="+enjson+"+++";
    })
})