// ハンバーガーメニュー
$(".inner").on("click", function () {
    let rightVal = 0;
    console.log("ここ");
    if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    rightVal = -300;
    } else {
    $(this).addClass("open");
    }

    $("#inner-navi").stop().animate(
    {
        right: rightVal,
    },
    1000
    );
});

$('.center').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    responsive: [
    {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
        }
    },
    {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
    }
    ]
});

//  トップへ戻るボタン
$(function(){
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
    } else {
            pagetop.fadeOut();
    }
    });
    pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
    });
});