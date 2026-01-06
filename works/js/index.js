// スライダー
var slide_main = $(".slide").slick({
  asNavFor: ".slide-navigation",
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
});
var slide_sub = $(".slide-navigation").slick({
  asNavFor: ".slide",
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  focusOnSelect: true,
});
var open_window_Width = $(window).width();
$(window).resize(function() {
  var width = $(window).width();
  if (open_window_Width != width) {
  slide_main.slick("setPosition");
  slide_sub.slick("setPosition");
  }
});

// 横から流れる文字
function BlurTextAnimeControl() {
  $('.blurTrigger').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('blur');
    }else{
    $(this).removeClass('blur');
    }
    });
}
$(window).on('load', function () {
  BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});

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