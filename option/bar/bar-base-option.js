export default{
    container:[400,200],
    echartOption :{
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
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
        legend:{
            show:true,
            left:0,
            top:0,
            orient:'horizontal',
            align: 'auto',
            padding:5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            symbolKeepAspect: true,
            inactiveColor: '#ccc',
            textStyle:{
                fontSize:13,
                color:'gray',
                textBorderColor:'rgba(0, 0, 0, 0)',
                textBorderWidth:0,
                textShadowColor:'rgba(0, 0, 0, 0)',
                textShadowBlur:0,
                textShadowOffsetX:0,
                textShadowOffsetY:0,
                fontFamily:'Microsoft YaHei',
            },
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 1,
            borderRadius: 0,
            shadowBlur:{
                shadowColor:'rgba(0, 0, 0, 0)',
                shadowBlur: 10
            },
            shadowColor:'rgba(0,0,0,0)',//是否生成组件渲染生成渐变等多种颜色状态
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            pageTextStyle:{
                fontSize:13,
                color:'#333',
                textBorderColor:'rgba(0, 0, 0, 0)',
                textBorderWidth:0,
                textShadowColor:'rgba(0, 0, 0, 0)',
                textShadowBlur:0,
                textShadowOffsetX:0,
                textShadowOffsetY:0,
                fontFamily:'Microsoft YaHei'
        },
    },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            orient:'horizontal',
            align: 'auto',
            padding:5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            inactiveColor: '#ccc',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
            }
        ]
    }
}