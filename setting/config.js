export default {
    types: [ //所有支持的图标类型
        {
            name: '折线统计图',
            value: 'line',
            img: 'line'
        }, {
            name: '条形统计图',
            value: 'bar',
            img: 'bar'
        }, {
            name: '饼图',
            value: 'pie',
            img: 'pie'
        },
        {
            name: '地图',
            value: 'map',
            img: 'map'
        },
        {
            name: '散点图',
            value: 'scatter',
            img: 'scatter'
        },
        {
            name: '雷达图',
            value: 'radar',
            img: 'radar'
        },
    ],
    InputTypes:{//映射控件对象的类型
        BOOLEAN:'BOOLEAN',
        TEXTSTYLE:'TEXTSTYLE',
        COLOR:'COLOR',
        SELECT:"SELECT",
        STRING:"STRING",
        NUMBER:'NUMBER',
        AXISLINE:"AXISLINE",
        AXISTICK:"AXISTICK",
        AXISLABEL:'AXISLABEL',
        SPLITLINE:'SPLITLINE',
        SPLITAREA:'SPLITAREA',
        ARRAYDATA:"ARRAYDATA",
    },
    optionName: {
        title: {
            name: "title | 标题",
            support: 'ALL'
        },
        legend: {
            name: "legend | 图例",
            support: "ALL"
        },
        grid: {
            name: 'grid | 坐标网格',
            support: ['line', 'bar']
        },
        tooltip:{
            name:'tooltip | 提示框组件'
        },
        xAxis:{
            name:'xAxis | X轴'
        },
    }
}