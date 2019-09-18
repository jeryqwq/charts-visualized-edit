export default{
    container:[500,500],
    echartOption : {
        title:{
            show:true,
            text:'地图标题',
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
        legend: {
            show:true,
            top:20,
            left: 'left',
            orient:'horizontal',
            align: 'auto',
            padding:5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            symbolKeepAspect: true,
            inactiveColor: '#ccc',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        series: [
            {
                name: '中国',
                type: 'map',
                mapType: 'china',
                selectedMode : 'multiple',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name:'广东', selected:true}
                ]
            }
        ]
    }
}