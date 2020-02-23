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
    data.gradeArr.sort((a, b) => b.grade - a.grade);
    data.gradeArr.forEach(function (ele, index) {
        $('.secPage .mainCon .studyCondition .showCon .' + dataTime).find('.grade .template').clone().removeClass('template')
        .children().eq(0).text(index + 1).end()
        .eq(1).text(ele.sNo).end()
        .eq(2).text(ele.name).end()
        .eq(3).text(ele.grade).end().end().appendTo('.secPage .mainCon .studyCondition .showCon .' + dataTime + ' .grade')
    });

    // 渲染成绩图表

    var dataObj = {};
    var dataArr = [
        ['score', 'amount', 'product']
    ];
    data.gradeArr.forEach (function (ele, index) {
        if (!dataObj[ele.grade + '']) {
            dataObj[ele.grade + ''] = 1
        } else {
            dataObj[ele.grade + ''] ++
        }
    });
    for (var prop in dataObj) {
        var arr = [];
        arr.push(parseInt(prop), dataObj[prop], prop);
        dataArr.push(arr)
    }

    var option = {
        dataset: {
            source: dataArr
        },
        grid: {containLabel: true},
        xAxis: {
            name: 'amount', 
            nameTextStyle: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'category', 
            name: 'Score', 
            nameTextStyle: {color: '#fff'}, 
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 0,
            max: 100,
            text: ['High Score', 'Low Score'],
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ['#D7DA8B', '#E15457']
            },
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            show: true,
            formatter: function (params) {
                // console.log(params)
                return params.data[0] + '分: ' + params.data[1] + '人</br>';
            },
            position:function(p){ //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            },
            extraCssText: 'width: auto; height: auto'
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
            }
        ]
    };
    // 获取dom元素
    var dom = $('.secPage .mainCon .studyCondition .showCon .' + dataTime).find('.chartWrap .grade-countChart')[0];

    renderEChart(option, dom);
}

// 渲染其他成绩
function renderOtherGrade () {
    var option = {
        color: ['#3398DB'],
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            extraCssText: 'width: auto; height: auto',
            formatter: function (params) {
                console.log(params, '5')
                return params[0].axisValue + '</br>通过率: ' + params[0].data + '%';
            },

        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['普通话', '计算机二级', '英语四级', '数学建模', '蓝桥杯', '英语竞赛', '大创项目', '网页设计大赛', '数学竞赛', '英语翻译与阅读比赛', '英语作文比赛'],
                axisTick: {
                    alignWithLabel: true
                },
                nameTextStyle: {
                    color: '#fff'
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                nameTextStyle: {color: '#fff'}, 
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series: [
            {
                name: '通过率',
                type: 'bar',
                barWidth: '40%',
                data: [66, 4.3, 36.2, 17, 21.3, 21.3, 4.3, 2.1, 2.1, 2.1, 2.1]
            }
        ]
    };
    
    var dom = $('.secPage .mainCon .studyCondition .showCon .GRADE-OTHER')[0];
    renderEChart(option, dom)    
}

// 渲染图表
function renderEChart (option, dom) {
    var chart = echarts.init(dom);
    chart.setOption(option);
}

// 初始化事件
function initGradeConditionEvent () {
    // 初始化时间选择点击事件
    $('.secPage .mainCon .studyCondition .nav').children().on('click', function (e) {
        // 切换选择时间按钮状态
        $('.secPage .mainCon .studyCondition .nav .active').removeClass('active');
        $(e.target).addClass('active');
        // 对应时间选择相应的页面显示
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

    }).eq(0).trigger('click');

    // 初始化2020-2021导航条事件

    // 初始化2021-2022导航条事件

    // 初始化其他成绩
    renderOtherGrade();

}


function initGradeCondition () {
    // 初始化时间选择点击事件
    initGradeConditionEvent();

    // 
}