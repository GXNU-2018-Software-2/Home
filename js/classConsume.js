// 初始化事件
function initClassConsumeEvent () {
    // 选择日期
    $('.secPage .mainCon .classConsume .dateChoice').children().on('click', function (e) {
        // 改变按钮状态
        $('.secPage .mainCon .classConsume .dateChoice .active').removeClass('active');
        $(e.target).addClass('active');

        // 改变显示的页面
        $('.secPage .mainCon .classConsume .showCon').find('.appear').fadeOut(0).removeClass('appear').end()
        .children().eq($(e.target).index()).fadeIn(0).addClass('appear').removeClass('hide')
    });
}

// 获取班费数据
function getClassConsumeData () {
    // 计算班费余额
    function calcCurMoney (totalMoney, details) {
        // console.log(totalMoney, details)
        var curMoney = totalMoney;
        details.forEach(function (ele) {
            curMoney += ele.consume;
        });
        return curMoney;
    }
    // 2019-2020班费数据整合
    var D2019_2020 = {
        totalMoney: _2019_2020TotalMoney,
        details: _2019_2020,
        curMoney: calcCurMoney(_2019_2020TotalMoney, _2019_2020)
    }
    return {
        M2019_2020: D2019_2020
    }
}

// 渲染2019-2020数据
function render2019_2020 (details, total, curMoney) {
    // console.log(details, total, curMoney);
    // 渲染详情
    details.forEach (function (ele, index) {
        $('.secPage .mainCon .classConsume table .template').clone().removeClass('template').children()
        .eq(0).text(ele.time).end()
        .eq(1).text(ele.event).end()
        .eq(2).text(ele.consume).end().end()
        .appendTo('.secPage .mainCon .classConsume table')
    });
    // 渲染班费总金额 和 班费余额
    $('.secPage .mainCon .classConsume .showCon').children().eq(1).find('.total').text('班费总金额：' + total + '元').end()
    .find('.currentMoney').text('班费余额：' + curMoney + '元')
}

// 渲染数据函数
function renderConsumeData () {
    // 调用渲染2019-2020数据函数
    var details2019_2020 = getClassConsumeData().M2019_2020.details;
    var total2019_2020 = getClassConsumeData().M2019_2020.totalMoney;
    var curMoney2019_2020 = getClassConsumeData().M2019_2020.curMoney;
    render2019_2020(details2019_2020, total2019_2020, curMoney2019_2020);
}

// 初始化函数
function initClassConsume () {
    // 调用初始化事件函数
    initClassConsumeEvent();

    renderConsumeData();
}