export default{
    container:[400,200],
    echartOption: {
        title:{
            show:true,
            text:'散点图标题',
            left:100,
            top:15,
            textStyle:{
                color:'rgba(0,0,0,0.7)',
                fontSize: 18,
                textBorderColor:'rgba(0,0,0,0)',
                textBorderWidth:0,
                textShadowColor:'rgba(0,0,0,0)',
                textShadowBlur:0,
                textShadowOffsetX:0,
                textShadowOffsetY:0,
                fontFamily:'Microsoft YaHei'
            },
            subtextStyle:{
                color:'rgba(0,0,0,0.7)',
                fontSize: 15,
                textBorderColor:'rgba(0,0,0,0)',
                textBorderWidth:0,
                textShadowColor:'rgba(0,0,0,0)',
                textShadowBlur:0,
                textShadowOffsetX:0,
                textShadowOffsetY:0,
                fontFamily:'Microsoft YaHei'
            },
            subtext:'副标题'
        },
    grid: {
        right: '12%'
    },
    dataZoom: [{
        show: true,
        start: 0,
        end: 80,
        bottom: 10,
        height: 15,
        backgroundColor: '#041257',
        borderColor: 'transparent',
        fillerColor: '#059DFA',
        handleStyle: {
            color: 'transparent'
        },
        textStyle: {
            color: 'transparent'
        }
    }],
    visualMap: {
        right: 0,
        min: 0,
        max: 9000,
        dimension: 2,
        itemWidth: 10,
        itemHeight: 80,
        calculable: true,
        inRange: {
            color: ['#c23c33', '#d08a00', '#2c9a42'],
            symbolSize: [20, 60]
        },
        text: ['高', '低'],
        textStyle: {
            color: 'blue'
        }
    },
    xAxis: {
        type: "category",
        axisLine: {
            lineStyle: {
                color: '#447AD5'
            }
        },
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#447AD5 '
            }
        },
        axisLabel: {
            textStyle: {
                color: '#447AD5',
                fontSize: '14'
            }
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#447AD5 '
            }
        },
        axisLine: {
            lineStyle: {
                color: '#447AD5'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#447AD5',
                fontSize: '14'
            }
        },
    },
    series: [{
        type: 'scatter',
        symbol: 'circle',
        data: [
            ['Sun', -100, 1234],
            ['Mon', 40, 2000],
            ['Mon', -60, 4500],
            ['Mon', -10, 9000],
            ['Tue', -67, 2354],
            ['Wed', 67, 7890],
            ['Thu', 23, 6456],
            ['Fri', 68, 7890],
            ['Sat', 0, 890],
            ['Sat', 68, 7890]
        ]
    }]

}

}