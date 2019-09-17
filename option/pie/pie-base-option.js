export default {
    container:[300,300],
    echartOption: {
        title:{
            show:true,
            text:'饼图标题',
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
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
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
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
}