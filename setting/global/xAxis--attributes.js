const {InputTypes} =require ('../config').default;
export default{
    xAxis:{
    show: InputTypes.BOOLEAN,
    name: InputTypes.STRING,
    // position: ...,
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
    splitLine:InputTypes.SPLITLINE,
    splitArea:InputTypes.SPLITAREA,
    data : InputTypes.ARRAYDATA,
    }
}