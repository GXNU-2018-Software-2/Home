// 进入按钮点击事件
$('.firstPage .enterBtn img').on('click', function () {
    $('.firstPage').fadeOut(1000).children().fadeOut(1000, function () {
        $('.secPage .welcome').addClass('welcome-run');
    });
})