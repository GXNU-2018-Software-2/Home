// 学生详细数据
var stuData = [
    // 第一页数据
    [
        ['201812300332', '林传胤', '男', '--', '54-509', '17877356656'], 
        ['201812300323', '谭广阳', '男', '--', '54-507', '17773704869'], 
        ['201812300328', '李坤源', '女', '生活委员', '45-504', '18377524583'], 
        ['201710800043', '吴浩', '男', '班长', '54-509', '13040235335'], 
        ['201812300330', '潘耀', '男', '--', '54-507', '15272548115'], 
        ['201812300293', '林卓玉', '女', '--', '45-504', '19968143026'], 
        ['201812300324', '周耀美', '女', '--', '45-503', '18276508487'], 
        ['201812300309', '韦静', '女', '--', '45-501', '13360323642'], 
        ['201812300308', '黄扬兰', '女', '--', '45-504', '17777339290'], 
        ['201812300291', '陈宏达', '男', '--', '54-509', '18977759090'], 
        ['201812300333', '邓小龙', '男', '--', '54-506', '13549960201'], 
        ['201812300297', '谢祥文', '男', '--', '54-508', '18286456053'], 
        ['201812300321', '成海梅', '女', '--', '45-503', '18077336820'], 
        ['201812300299', '潘丽霖', '女', '--', '45-503', '17777330250'], 
        ['201812300292', '张可怡', '女', '宣传委员', '45-502', '15994650819'], 
        ['201812300307', '黄春妮', '女', '--', '45-503', '18174165393'],
    ],
    // 第二页数据
    [
        ['201812300298', '吴燕', '女', '--', '45-503', '15578746698'], 
        ['201812300327', '凌富清', '女', '团支书', '45-504', '19943127896'], 
        ['201812300315', '苟海青', '女', '劳纪委员', '45-504', '18978818332'], 
        ['201812300304', '周渊翔', '男', '副班长', '54-509', '未填写'], 
        ['201812300295', '陈创建', '男', '--', '54-506', '18778758397'], 
        ['201812300303', '彭明鑫', '男', '--', '54-510', '15703052005'], 
        ['201812300329', '李媛媛', '女', '--', '45-502', '18376194076'], 
        ['201812300290', '陈淼昊', '男', '体育委员', '54-508', '18978676174'], 
        ['201812300300', '韩立康', '男', '--', '54-507', '17777326612'], 
        ['201812300322', '陈龙腾', '女', '组织委员', '45-504', '18177363376'], 
        ['201812300314', '李喜龙', '男', '--', '54-508', '15878075427'], 
        ['201812300316', '韩妍', '女', '--', '45-502', '未填写'], 
        ['201812300312', '黄靖辉', '男', '--', '54-509', '15678624711'], 
        ['201812300317', '梁形', '男', '--', '54-508', '13471527208'], 
        ['201812300318', '黄秋燕', '女', '--', '45-501', '18978389894'], 
        ['201812300325', '冯俞富', '男', '--', '54-507', '15878005029'],

    ],
    // 第三页数据
    [
        ['201812300294', '李建慧', '女', '--', '45-501', '18397151756'], 
        ['201812300285', '莫达成', '男', '--', '54-506', '18078587990'], 
        ['201812300286', '黄维靖', '男', '--', '54-507', '18376271563'], 
        ['未录入', '全秋燕', '女', '--', '未录入', '未录入'],
        ['未录入', '屈浩宇', '男', '--', '未录入', '未录入'],
        ['未录入', '封宇翔', '男', '--', '未录入', '未录入'],
        ['未录入', '刘坤', '男', '--', '未录入', '未录入'],
        ['未录入', '祁海鹏', '男', '--', '未录入', '未录入'],
        ['未录入', '黄晓丹', '女', '--', '未录入', '未录入'],
        ['未录入', '江荧', '女', '--', '未录入', '未录入'],
        ['未录入', '廖文龙', '男', '--', '未录入', '未录入'],
        ['未录入', '吴家毅', '男', '--', '未录入', '未录入'],
        ['未录入', '邓敏', '女', '--', '未录入', '未录入'],
    ]
];

// 学生分布地区数据
var stuDistributionData = [
    {name: '广西', value: [108.00, 23.99, 22]},
    {name: '江苏', value: [119.38, 32.94, 1]},
    {name: '广东', value: [112.20, 22.65, 2]},
    {name: '天津', value: [117.30, 39.00, 1]},
    {name: '湖南', value: [111.65, 28.21, 2]},
    {name: '湖北', value: [113.31, 30.95, 1]},
    {name: '贵州', value: [106.71, 26.57, 1]},
    {name: '重庆', value: [106.54, 29.59, 1]},
    {name: '河南', value: [112.00, 34.35, 1]},
    {name: '山东', value: [117.29, 36.65, 2]},
    {name: '青海', value: [99.99, 35.99, 1]}
]

// 男女比例数据
var sexData = [
    {value: 24, name: '男'},
    {value: 21, name: '女'},
]