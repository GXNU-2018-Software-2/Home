// 获取考试信息
function getExamInfoData () {
    return examData;
}

// 渲染考试信息
function renderExamInfo (data) {
    data.forEach (function (ele, index) {
        $('.secPage .mainCon .examAnsign .template').clone().removeClass('template').children()
        .eq(0).text(ele.examName).end()
        .eq(1).text(ele.teacherName).end()
        .eq(2).text(ele.examTime).end()
        .eq(3).text(ele.examTimeLength).end()
        .eq(4).text(ele.address).end().end()
        .appendTo('.secPage .mainCon .examAnsign table')
    });
}

function initExamAnsign () {
    renderExamInfo(getExamInfoData());
}