// ハンバーガーメニュー
$(".btn-gnavi").on("click", function () {
    let rightVal = 0;
    console.log("ここ");
    if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        rightVal = -300;
    } else {
        $(this).addClass("open");
    }

    $("#global-navi").stop().animate(
    {
        right: rightVal,
    },
    2000
    );
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