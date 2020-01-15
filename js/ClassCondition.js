
// 翻页 点击事件
$('.secPage .students .pageBtn').children().on('click', function (e) {
    $(e.target).parent().find('.active').removeClass('active').end().end().addClass('active')
    renderTable($(e.target).index())
})

// 获取成员信息数据
function getData (page) {
    return stuData[page];
}

// 渲染成员信息
function renderTable (page) {
    // 清除之前的数据
    $('.secPage .mainCon table .hide').nextAll().remove();
    var pageData = getData(page);
    pageData.forEach(function (data) {
        $('.secPage .mainCon table .hide').clone().removeClass('hide').children()
        .eq(0).text(data[0]).end()
        .eq(1).text(data[1]).end()
        .eq(2).text(data[2]).end()
        .eq(3).text(data[3]).end()
        .eq(4).text(data[4]).end()
        .eq(5).text(data[5]).end()
        .end().appendTo('.secPage .mainCon table')
    })
}

// 初始化男女比例图
function initSexProportion () {
    var sexProportion = echarts.init($('.secPage .analysis .proportion').get(0));
    var option = {
        title: {
            text: '性别比例图',
            show: true,
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['男', '女']
        },
        series: [
            {
                name: '男女比例',
                type: 'pie',
                radius: ['25%', '55%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '男'},
                    {value: 310, name: '女'},
                ]
            }
        ]
    };    
    sexProportion.setOption(option);
}

// 初始化成员分布图
function initDistribution () {
    var mapData = [
        {name: '广西', value: [108.00, 23.99, 20]},
        {name: '江苏', value: [119.38, 32.94, 1]}
    ]

    var distributionChart = echarts.init($('.secPage .analysis .distribution').get(0));
    var option = {
        title: {
            text: '成员地区分布图',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            itemStyle: {					// 定义样式
                normal: {					// 普通状态下的样式
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {					// 高亮状态下的样式
                    areaColor: '#fff'
                }
            }
        },
        tooltip: {
            formatter: (el) => {
                return `
                    ${el.name} <br/ >
                    人数：${el.value[2]}
                `
            }
        },
        series: [
            {
                name: '分布图',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                hoverAnimation: true,
                symbolSize: (val) => {
                    console.log(val);
                    return (val[2] + 80) / 10;
                },
                itemStyle: {
                    normal: {
                        color: 'yellow'
                    }
                },
                data: mapData
            }
        ]
    }
    distributionChart.setOption(option);
}


// 成员概况页面初始化
function initClassCondition () {
    // 初始化表格数据
    renderTable(0);
    // 初始化饼图
    initSexProportion();
    // 初始化柱状图
    initDistribution();
}