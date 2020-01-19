// 获取班级通知数据
function getClassInfoData () {
    return classInfo;
}

// 渲染班级通知
function renderClassInfo (data) {
    data.forEach (function (ele, index) {
        $('.secPage .mainCon .classInfo .template').clone().removeClass('template')
        .children().eq(0).prop('href', '' + ele.link).text('' + (index + 1) + '.  ' + ele.title).end()
        .eq(1).text('' + ele.time).end().end().appendTo('.secPage .mainCon .classInfo ul');
    });
}

// 初始化班级通知
function initClassInfo () {
    renderClassInfo(getClassInfoData());
}