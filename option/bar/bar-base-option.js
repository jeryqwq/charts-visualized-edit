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
                color:'#333'
            },
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 1,
            borderRadius: 0,
            shadowBlur:{
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
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