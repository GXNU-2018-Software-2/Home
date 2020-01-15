
// 导航栏点击事件
$('.secPage dl').children().on('click', function (e) {
    $('.secPage dl .active').removeClass('active');
    $(e.target).addClass('active');
    initClassCondition();
    console.log('over');
})

initClassCondition();






