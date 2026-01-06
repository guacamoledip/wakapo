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

// 日付選択
$("#datepicker").datepicker();