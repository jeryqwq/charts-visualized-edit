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
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
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