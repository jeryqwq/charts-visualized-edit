const {InputTypes} =require ('./../config').default;
export default{
    yAxis:{
    show: InputTypes.BOOLEAN,
    name:InputTypes.STRING,
    position: InputTypes.ARRAYDATA,
    offset: InputTypes.NUMBER,
    type: InputTypes.SELECT,
    nameLocation:InputTypes.SELECT,
    nameTextStyle:InputTypes.TEXTSTYLE,
    nameGap: InputTypes.NUMBER,
    nameRotate: InputTypes.NUMBER,
    inverse:InputTypes.BOOLEAN,
    min: InputTypes.NUMBER,
    max: InputTypes.NUMBER,
    minInterval: InputTypes.NUMBER,
    silent: InputTypes.BOOLEAN,
    triggerEvent: InputTypes.BOOLEAN,
    axisLine:InputTypes.AXISLINE,
    axisTick:InputTypes.AXISTICK,
    axisLabel:InputTypes.AXISLABEL,
    splitLine:{
        show:InputTypes.BOOLEAN,
        interval:InputTypes.NUMBER,
        lineStyle:InputTypes.LINESTYLE
    },
    splitArea:InputTypes.SPLITAREA,
    }
}