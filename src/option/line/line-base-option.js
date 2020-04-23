export default {
    container: [400, 200],
    echartOption: {
        title: {
            show: true,
            text: '折线图标题',
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
            subtext: '副标题'
        },
        legend: {
            show: true,
            top: 20,
            left: 'left',
            orient:'horizontal',
            align: 'auto',
            padding:5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            symbolKeepAspect: true,
            inactiveColor: '#ccc',
            textStyle:{
                color:'#333'
            },
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 1,
            borderRadius: 0,
            shadowBlur:{
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 10
            },
            shadowColor:'rgba(0,0,0,0)',//是否生成组件渲染生成渐变等多种颜色状态
            shadowOffsetX: 0,
            shadowOffsetY: 0,
        },
        grid:{
            show:true,
            left:"10",
            top:"10",
            widht:"80%",
            height:'80%',
            containLabel:false,
            backgroundColor:"rgba(0,0,0,0)",
            borderColor:'rgba(0,0,0,0)',
            borderWidth:1,
            shadowBlur:1,
            shadowColor:'rgba(0,0,0,0)',
            shadowOffsetX:0,
            shadowOffsetY:0,
          },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
                name: 'Lenged',
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            },
            {
                name: 'Lenged1',
                data: [901, 934, 1290, 1330, 1320, 820, 932, ],
                type: 'line'
            }
        ]
    }
};