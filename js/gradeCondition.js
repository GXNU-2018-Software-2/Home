// 获取数据
function getGradeData () {
    return {
        GRADE_2019_2020
    }
}

// 渲染数据    参数：数据   数据的类型（2018-2019 / 2019-2020 / 2020-2021 / 2021-2022 / 4 / 6）
function renderGradeData (data, dataTime) {
    // 渲染任课教师 / 挂科率
    console.log(data)
    $('.secPage .mainCon .studyCondition .showCon .' + dataTime).find('.grade .info').children().eq(0).text('任课教师：' + data.teacher).end()
    .eq(1).text('挂科率：' + data.noPassRate)

    // 渲染成绩列表
    $('.secPage .mainCon .studyCondition .showCon .' + dataTime).find('.grade .template').nextAll().remove();
    data.gradeArr.forEach(function (ele) {
        console.log('over')
        $('.secPage .mainCon .studyCondition .showCon .' + dataTime).find('.grade .template').clone().removeClass('template')
        .children().eq(0).text(ele.sNo).end()
        .eq(1).text(ele.name).end()
        .eq(2).text(ele.grade).end().end().appendTo('.secPage .mainCon .studyCondition .showCon .' + dataTime + ' .grade')
    });

    // 渲染成绩图表

}

// 初始化事件
function initGradeConditionEvent () {
    // 初始化时间选择点击事件
    $('.secPage .mainCon .studyCondition .nav').children().on('click', function (e) {
        // 切换选择时间按钮状态
        $('.secPage .mainCon .studyCondition .nav .active').removeClass('active');
        $(e.target).addClass('active');
        // 对应时间选择显示相应的页面
        $('.secPage .mainCon .studyCondition .showCon').find('.appear').fadeOut(0).removeClass('appear').end()
        .children().eq($(e.target).index()).fadeIn(0).addClass('appear').removeClass('hide')
    });
    
    // 初始化2018-2019导航条事件

    // 初始化2019-2020导航条事件
    $('.secPage .mainCon .studyCondition .GRADE-2019-2020 .subChoice').children().on('click', function (e) {
        // 改变2019-2020导航条状态
        $('.secPage .mainCon .studyCondition .GRADE-2019-2020 .subChoice .active').removeClass('active');
        $(e.target).addClass('active');

        // 渲染2019-2020数据
        renderGradeData(getGradeData().GRADE_2019_2020[$(e.target).index()], 'GRADE-2019-2020')

    })

    // 初始化2020-2021导航条事件

    // 初始化2021-2022导航条事件

}


function initGradeCondition () {
    // 初始化时间选择点击事件
    initGradeConditionEvent();

    // 
}