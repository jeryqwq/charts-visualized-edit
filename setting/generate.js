import TextStyle from './../components/echart-attr-mapping/attr-object/textStyle.vue';
import MySwitch from './../components/echart-attr-mapping/ui-status/MySwitch.vue';
import MySelect from './../components/echart-attr-mapping/ui-status/MySelect.vue';
import MyColorPicker from './../components/echart-attr-mapping/ui-status/MyColorPick.vue'
const {InputTypes} =require('./config').default;
export default function generateInput(h,cb,descOption,val,type) {
    switch (type) {
        case InputTypes.STRING:
            return  <label>
            {descOption}:
            <input on-input={(e)=>{
              cb(e.target.value)
          }}  value={val} />
        </label>
        break;
        case InputTypes.NUMBER:
            return  <label>
            {descOption}:
            <input type="number" on-input={(e)=>{
             cb(parseInt(e.target.value));
          }}  value={val}/>
          </label>
        break;
        case InputTypes.TEXTSTYLE:
            return <span>
            {descOption}:
            <TextStyle value={val} cb={(val)=>{cb(val)}}/>
            </span>
        break;
        case InputTypes.SELECT:
            return <h4>"下拉框特殊处理，需渲染带选项"</h4>
        break;
        case InputTypes.COLOR:
            return  <span>
            {descOption}:
            <MyColorPicker cb={(val)=>{
              cb(val) 
            }} color={val}/>
            </span>
        break;
        case InputTypes.BOOLEAN:
                return  <span>
                {descOption}:{val}
                <MySwitch cb={(val)=>{cb(val)}}  value={val}/>
            </span>
            break;
        default:
            console.log(type)
            return  <h6>"other"</h6>
        break;
    }
}