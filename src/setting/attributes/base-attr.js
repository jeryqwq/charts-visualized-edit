const {InputTypes} =require ('./../config').default;
export default {
    title:{
        show:InputTypes.BOOLEAN,
        left:InputTypes.STRING,
        top:InputTypes.STRING,
        text:InputTypes.STRING,
        textStyle:InputTypes.TEXTSTYLE,
        subtext:InputTypes.STRING,
        subtextStyle:InputTypes.TEXTSTYLE,
        shadowColor:InputTypes.COLOR,
        shadowBlur:InputTypes.SHADOWBLUR,
    },
    legend:{
        show:InputTypes.BOOLEAN,
        left:InputTypes.STRING,
        top:InputTypes.STRING,
        orient:InputTypes.SELECT,
        align:InputTypes.SELECT,
        padding:InputTypes.NUMBER,
        itemGap: InputTypes.NUMBER,
        itemWidth: InputTypes.NUMBER,
        itemHeight: InputTypes.NUMBER,
        symbolKeepAspect:InputTypes.BOOLEAN,
        inactiveColor: InputTypes.COLOR,
        textStyle:InputTypes.TEXTSTYLE,
            // icon:'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
        borderColor: InputTypes.COLOR,
        borderWidth: InputTypes.NUMBER,
        borderRadius: InputTypes.NUMBER,
        shadowBlur:InputTypes.SHADOWBLUR,
        shadowColor:InputTypes.COLOR,//是否生成组件渲染生成渐变等多种颜色状态
        shadowOffsetX: InputTypes.NUMBER,
        shadowOffsetY: InputTypes.NUMBER,
        pageTextStyle:InputTypes.TEXTSTYLE
    }
}