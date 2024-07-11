//左に動くアニメーションここから
function slideAnime(){
    $('.leftAnime').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
        }else{
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
        }
    });
}
    $(window).scroll(function (){
    slideAnime();
    });
    $(window).on('load', function(){
    slideAnime();
    });

//スクロール時にふわっと表示させる
$(window).scroll(function(){
    $(".fadeIn").each(function(){
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();  
    if(scroll > position - windowHeight + 100 ){
        $(this).addClass("active");
    }
    });
});

//  トップへ戻るボタン
let pageTop = $("#page-top");

pageTop.hide();

$(window).scroll(function(){
    if($(this).scrollTop() > 500 ){
    pageTop.fadeIn();
    } else {
    pageTop.fadeOut();
    };
});

pageTop.click(function(){
    window.location.href = '#';
});
