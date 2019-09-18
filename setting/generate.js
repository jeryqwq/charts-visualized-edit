import TextStyle from './../components/echart-attr-mapping/attr-object/textStyle.vue';
import MySwitch from './../components/echart-attr-mapping/ui-status/MySwitch.vue';
import MySelect from './../components/echart-attr-mapping/ui-status/MySelect.vue';
import MyColorPicker from './../components/echart-attr-mapping/ui-status/MyColorPick.vue'
const {InputTypes} =require('./config').default;
export default function generateInput(h,cb,descOption,val,type,key) {
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
            return generateSelect(h,cb,descOption,val,type,key)
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
function generateSelect(h,cb,descOption,val,type,key){
    switch (key) {
        case "orient"://布局朝向
                let option=[{
                    label:'横向',
                    value:'horizontal'
                  },
                  {
                    label:'竖向',
                    value:'vertical'
                  }]
                  return <span>{descOption}<MySelect options={option} val={val} setOption={(val)=>{cb(val)}}/></span>
            break;
            case "align"://文字对齐
            let option1=[{
                label:'自动',
                value:'auto'
              },
              {
                label:'左对齐',
                value:'left'
              },
              {
                label:'右对齐',
                value:'right'
              }]
              return <span>{descOption}<MySelect options={option1} val={val} setOption={(val)=>{cb(val)}}/></span>
        break;
        default:
            return <h1>未被加入识别的魔法   </h1>
            break;
    }
}