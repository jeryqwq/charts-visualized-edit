const {InputTypes} =require ('./../config').default;
export default{
        tooltip:{
            show: InputTypes.BOOLEAN,
            // position:
            trigger: InputTypes.SELECT,
            alwaysShowContent:InputTypes.BOOLEAN,
            triggerOn:InputTypes.SELECT,
            // position:InputTypes.STRING,
            formatter:InputTypes.STRING,
            backgroundColor: InputTypes.COLOR,
            borderColor: InputTypes.COLOR,
            borderWidth: InputTypes.NUMBER,
            padding: InputTypes.NUMBER,
            textStyle:InputTypes.TEXTSTYLE,
        }
}