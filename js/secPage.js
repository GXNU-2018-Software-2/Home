
// 导航栏点击事件
$('.secPage dl').children().on('click', function (e) {
    // 导航栏状态
    $('.secPage dl .active').removeClass('active');
    $(e.target).addClass('active');

    // 显示页面的状态
    $('.secPage .mainCon').find('.show').hide().removeClass('show').end()
    .children().eq($(e.target).index()).show().addClass('show').removeClass('hide');
})
// 初始化成员概况
initClassCondition();

// 初始化班级通知
initClassInfo();

// 初始化考试安排
initExamAnsign();

// 初始化班费开支
initClassConsume();

// 初始化成绩概况
initGradeCondition();






