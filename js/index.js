// 进入按钮点击事件
$('.firstPage .enterBtn img').on('click', function () {
    $('.firstPage').fadeOut(1000).children().fadeOut(1000, function () {
        $('.secPage .welcome').addClass('welcome-run');
    });
})

// 处理加载提醒
window.onload = function () {
    $('.firstPage .load').text('加载完成').css('opacity', 0);
}