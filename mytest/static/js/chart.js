 <!--        图表信息-->
    var myChart = echarts.init(document.getElementById('chart'));
    var pbcpInfoTime=pbcpInfoList.time
    var length = pbcpInfoTime.length
    var title = pbcpInfoList.title
    var maxBack = parseInt(pbcpInfoList.MaxBack)
    var addNum=10
    if(title=='配邦一号'){
        addNum=90
    }else if(maxBack<20){
        addNum=35
    }else if(maxBack>=20){
        addNum=90
    }
    var xLength = 0;
    var rLength = 90;
    if(length > 100 ){
        xLength=Math.floor((length/100)+1)
    }
    if(length < 25 ){
        rLength=0
    }else if(length < 50){
        rLength=30
    }else if(length < 100){
        rLength=45
    }
    else if(length < 108){
        rLength=60
    }
    // 指定图表的配置项和数据
    let option = {
        color : ['#d0000b','#095726'], //修改曲线颜色
        title : {
            x: 'center', //标题居中
            text: pbcpInfoList.title+'净值图',
            itemGap: 10,                   //间距
            textStyle: {                   //文字设置
                color: '#337ab7',
                fontFamily: '宋体',
                fontSize: 30,
                fontWeight: 'bolder'
            }
        },
        tooltip : {
            trigger: 'axis',
            showDelay : 0,
            axisPointer: {
                show: true,
                type : 'cross',
                lineStyle: {
                    type : 'dashed',
                    width : 1
                }
            }
        },
        legend: {
            y: 'bottom', //图例说明(属性)在底部显示，不写默认在顶部显示
            type: 'scroll', //图例说明(属性)过多时，设置为scroll，加上滚动翻页
            data: ['当前净值(左)','当前回撤(右)'], //属性类别
            selectedMode:'multiple', //选中模式
            selected:{ //初始默认后面一条数据不显示
                '当前净值(左)':true
            }
        },
        toolbox: {
            show : true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature : {
                mark : {show: true},
                dataZoom : {show: true},
                dataView : {show: true},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        grid:{
            left: '3%', //y轴离左侧边框边距
            right: '3%', //y轴离右侧边框边距
            bottom: '12%', //x轴离底部边框边距
            containLabel: true
        },
        calculable : true,
        //动态滑块
        dataZoom : {
            show : true,
            realtime : true,
            type: 'slider', // slider表示有滑动块的，inside表示内置的
            bottom:"5%",
            start: 0, // 初始x轴位置在最右边
            end: 100, // 初始x轴位置在最右边
            borderColor:"transparent", // 滚动条边框颜色
            height: 10
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLabel: {
                    interval: xLength,
                    rotate: rLength,    //倾斜度
                    show: true,
                    textStyle: {     //轴上文字
                        color: '#515c66'   //颜色
                    }
                },
                data:pbcpInfoList.time
            }
        ],
        yAxis : [
            {
                 max: (value) => {
                    return (pbcpInfoList.maxEquity+0.02).toFixed(4);
                  },
                min:function(value){
                    if(pbcpInfoList.minEqu<1 && pbcpInfoList.minEqu>=0.8){value.min=0.8}
                    else{value.min=0.0}
                    return value.min
                 },
                type: 'value',
                name:"当前净值",
<!--                 minInterval: 0.01,-->
<!--                 interval:0.05,-->
                length:20,
                axisLabel : { //调整左侧Y轴刻度， 直接按对应数据显示
                    show:true,
                    showMinLabel:true,
                    showMaxLabel:true,
                    formatter: function (value) {

                        return value;
                    }
                }
            },
            {
                max:((pbcpInfoList.MaxBack)+addNum).toFixed(0),
                min:-0.3,
                type: 'value',
                name:"当前回撤(%)",
                axisLabel : { //调整左侧Y轴刻度， 直接按对应数据显示
                    show:true,
                    showMinLabel:true,
                    showMaxLabel:true,
                    formatter:'{value}%'
                    // formatter: function (value) {
                    //     return value;
                    // }
                }
            }
        ],
        series : [
            {
                name:'当前净值(左)',
                type:'line',
                showSymbol: false,//隐藏所有数据点
                smooth: true,
                yAxisIndex: 0, //属性，归属左侧y轴
                tooltip:{
                    trigger: 'axis'
                },
                data:pbcpInfoList.equtiy,
            },
            {
                name:'当前回撤(右)',
                type:'line',
                showSymbol: false,//隐藏所有数据点
                smooth: true,
                yAxisIndex: 1, //属性，归属右侧y轴
                tooltip:{
                    trigger: 'axis'
                },
                      markPoint:{
                         label: {
                           show: true,
                           position: "top",
                            textStyle: {
                            fontSize:18
                            },
                           distance:30,
                           offset: [1, 1],
                           formatter: '{b}: {c}%',
                         },
                         "textStyle": {
                            "fontSize": 18 },
                         symbol: "circle",
                         symbolSize: 10,
                         symbolOffset: [0, 0],
                         data: [{type: 'max', name: '最大回撤'}],
                        },
                data:pbcpInfoList.back,
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option, true); // 重新渲染曲线图
    window.onresize = myChart.resize; // 图表随浏览器拉伸自动变化
   }