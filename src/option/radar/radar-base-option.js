export default{
    container:[300,300],
    echartOption: {
        title:{
            show:true,
            text:'雷达标题',
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
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#999999',
            }
          },
          splitArea: {
            areaStyle: {
              color: ['#fff', '#fff', '#fff', '#fff'],
              shadowColor: 'rgba(0, 100, 0, 0.3)'
            }
          },
          indicator: [
            {name: '行业信息', max: 6500},
            {name: '企业规模', max: 16000},
            {name: '企业信用', max: 30000},
            {name: '创新能力', max: 38000},
            {name: '人才潜力', max: 52000},
            {name: '融资能力', max: 25000}
          ]
        },
        series: [{
          type: 'radar',
          data: [
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '数据',
              itemStyle: {
                normal: {
                  color: 'rgba(5, 128, 242, 0.8)'
                }
              },
              areaStyle: {
                normal: {
                  color: '#0580f2'
                }
              }
            }
          ]
        }]
      }
}