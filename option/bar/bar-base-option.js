export default {
    container: [400, 200],
    echartOption: {
        title: {
            show: true,
            text: '条形图标题',
            left: 100,
            top: 15,
            textStyle: {
                color: 'rgba(0,0,0,0.7)',
                fontSize: 18,
                textBorderColor: 'rgba(0,0,0,0)',
                textBorderWidth: 0,
                textShadowColor: 'rgba(0,0,0,0)',
                textShadowBlur: 0,
                textShadowOffsetX: 0,
                textShadowOffsetY: 0,
                fontFamily: 'Microsoft YaHei'
            },
            subtext: '副标题',
            subtextStyle: {
                color: 'rgba(0,0,0,0.7)',
                fontSize: 15,
                textBorderColor: 'rgba(0,0,0,0)',
                textBorderWidth: 0,
                textShadowColor: 'rgba(0,0,0,0)',
                textShadowBlur: 0,
                textShadowOffsetX: 0,
                textShadowOffsetY: 0,
                fontFamily: 'Microsoft YaHei'
            },
            shadowColor:"rgba(0,0,0,0)",
            shadowBlur :{
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
            }
        },
        legend: {
            show: true,
            left: 0,
            top: 0,
            orient: 'horizontal',
            align: 'auto',
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            symbolKeepAspect: true,
            inactiveColor: '#ccc',
            textStyle: {
                fontSize: 13,
                color: 'gray',
                textBorderColor: 'rgba(0, 0, 0, 0)',
                textBorderWidth: 0,
                textShadowColor: 'rgba(0, 0, 0, 0)',
                textShadowBlur: 0,
                textShadowOffsetX: 0,
                textShadowOffsetY: 0,
                fontFamily: 'Microsoft YaHei',
            },
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 1,
            borderRadius: 0,
            shadowBlur: {
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 10
            },
            shadowColor: 'rgba(0,0,0,0)', //是否生成组件渲染生成渐变等多种颜色状态
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            pageTextStyle: {
                fontSize: 13,
                color: '#333',
                textBorderColor: 'rgba(0, 0, 0, 0)',
                textBorderWidth: 0,
                textShadowColor: 'rgba(0, 0, 0, 0)',
                textShadowBlur: 0,
                textShadowOffsetX: 0,
                textShadowOffsetY: 0,
                fontFamily: 'Microsoft YaHei'
            },
        },
        grid: {
            show: true,
            left: "50",
            top: "50",
            widht: "60%",
            height: '60%',
            containLabel: false,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 1,
            shadowBlur: 1,
            shadowColor: 'rgba(0,0,0,0)',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
        },
        tooltip: {
            show: true,
            // position:'[10, 10]',
            trigger: 'item',
            alwaysShowContent: true,
            triggerOn: "mousemove",
            formatter: '{b0}: {c0}<br />{b1}: {c1}',
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderColor: '#333',
            borderWidth: 0,
            padding: 5,
            textStyle: {
                fontSize: 13,
                color: '#333',
                textBorderColor: 'rgba(0, 0, 0, 0)',
                textBorderWidth: 0,
                textShadowColor: 'rgba(0, 0, 0, 0)',
                textShadowBlur: 0,
                textShadowOffsetX: 0,
                textShadowOffsetY: 0,
                fontFamily: 'Microsoft YaHei'
            },
        },
        xAxis: {
            show: true,
            name: "坐标轴的名称",
            position: [10,10],
            offset: 0,
            type: 'category',
            nameLocation: 'end',
            nameTextStyle: {
                fontSize: 13,
                color: '#333',
                textBorderColor: 'rgba(0, 0, 0, 0)',
                textBorderWidth: 0,
                textShadowColor: 'rgba(0, 0, 0, 0)',
                textShadowBlur: 0,
                textShadowOffsetX: 0,
                textShadowOffsetY: 0,
                fontFamily: 'Microsoft YaHei'
            },
            nameGap: 15,
            nameRotate: null,
            inverse: false,
            min: null,
            max: null,
            minInterval: 0,
            silent: false,
            triggerEvent: false,
            axisLine: {
                show: true,
                onZero: true,
                // onZeroAxisIndex:
                symbol: 'none',
                symbolSize: [10, 15],
                symbolOffset: [0, 0],
                lineStyle:{
                    color: '#333',
                    width: 1,
                    type: 'solid',
                    shadowColor:'rgba(0,0,0,0)',
                    shadowBlur:{
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10
                    },
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                }
            },
            axisTick: {
                show: true,
                alignWithLabel: false,
                interval: 0,
                inside: false,
                length: 5,
                lineStyle:{
                    color: '#333',
                    width: 1,
                    type: 'solid',
                    shadowColor:'rgba(0,0,0,0)',
                    shadowBlur:{
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10
                    },
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                }
            },
            axisLabel: {
                fontSize: 12,
                color: '#333',
                textBorderColor: 'rgba(0, 0, 0, 0)',
                textBorderWidth: 0,
                textShadowColor: 'rgba(0, 0, 0, 0)',
                textShadowBlur: 0,
                textShadowOffsetX: 0,
                textShadowOffsetY: 0,
                fontFamily: 'Microsoft YaHei'
            },
            splitLine: {

            },
            splitArea: {

            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }]
    }
}