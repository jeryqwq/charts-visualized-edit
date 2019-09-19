import TextStyle from './../components/echart-attr-mapping/attr-object/textStyle.vue';
import MySwitch from './../components/echart-attr-mapping/ui-status/MySwitch.vue';
import MySelect from './../components/echart-attr-mapping/ui-status/MySelect.vue';
import MyColorPicker from './../components/echart-attr-mapping/ui-status/MyColorPick.vue';
import XAxisLine from './../components/echart-attr-mapping/attr-object/xAxisLine.vue'
import inputData from './Input-data';
const {InputTypes} =require('./config').default;
const InputTypesMapping={//组件映射，避免频繁判断渲染
  BOOLEAN:MySwitch,
  COLOR:MyColorPicker,
  SELECT:MySelect,
  TEXTSTYLE:TextStyle,
  AXISLINE:XAxisLine
}
export default function generateInput(h,cb,descOption,val,type,key) {
    switch (type) {
        case InputTypes.STRING://简单的字符串
            return  <label>
              {descOption}:
              <input on-input={(e)=>{
                cb(e.target.value)
            }}  value={val} />
          </label>
        break;
        case InputTypes.NUMBER://简单的数字
            return  <label>
            {descOption}:
            <input type="number" on-input={(e)=>{
             cb(parseInt(e.target.value));
          }}  value={val}/>
          </label>
        break;
        case InputTypes.ARRAYDATA://数据集
        return  <label>
          {descOption}:
          <input on-input={(e)=>{
            cb(e.target.value.split(','))
        }}  value={val} />
      </label>
    break;
        case InputTypes.SELECT://下拉框选项
        return  inputData[key]?<span>{descOption}<MySelect options={inputData[key]} val={val} setOption={(val)=>{cb(val)}}/></span>:<h4>{key}未被识别的下拉框</h4>
        break;
        default:
            if(InputTypesMapping[type]){
              var PType=InputTypesMapping[type]
              return <span>
              {descOption}:
              <PType value={val} cb={(val)=>{cb(val)}}/>
              </span>
            }else{
              return  <h3>{type}:未加入识别库的对象</h3>
            }
        break;
    }
}
