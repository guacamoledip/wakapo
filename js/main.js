// //スクロール時にふわっと表示させる
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
