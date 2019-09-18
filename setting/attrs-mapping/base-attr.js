
import TextStyle from '../../components/echart-attr-mapping/attr-object/textStyle.vue';
import MySwitch from '../../components/echart-attr-mapping/ui-status/MySwitch.vue';
import MySelect from '../../components/echart-attr-mapping/ui-status/MySelect.vue';
import MyColorPicker from '../../components/echart-attr-mapping/ui-status/MyColorPick.vue';
import generateInput from './../generate.js';
const {InputTypes} =require('./../config').default;
export default {
    title:{
        show:function(h,cb,descOption,val){
              return <span>
                  {descOption}:
                  <MySwitch cb={(val)=>{cb(val)}}  value={val}/>
              </span>
        },
        left:function(h,cb,descOption,val){
            return   <label>
           {descOption}:
           <input on-input={(e)=>{
             cb(e.target.value)
         }}  value={val} />
       </label>
      },
        top:function(h,cb,descOption,val){
            return  <label>
           {descOption}:
           <input on-input={(e)=>{
             cb(e.target.value)
         }}  value={val}/>
       </label>
      },
        text:function(h,cb,descOption,val){
            return<label>
           {descOption}:
           <input on-input={(e)=>{
             cb(e.target.value)
         }}  value={val}/>
       </label>
      },
      textStyle:function(h,cb,descOption,val){
        return <span>
        {descOption}:
        <TextStyle value={val} cb={(val)=>{cb(val)}}/>
        </span>
       },
        subtext:function(h,cb,descOption,val){
            return <label>
           {descOption}:
           <input on-input={(e)=>{
             cb(e.target.value)
         }}  value={val}/>
       </label>
      },
       
        subtextStyle:function(h,cb,descOption,val){
          return <span>
          {descOption}:
          <TextStyle value={val} cb={(val)=>{cb(val)}}/>
          </span>
         },
    },
    legend:{
      show:function(h,cb,descOption,val){
        return <span>
            {descOption}:
            <MySwitch cb={(val)=>{cb(val)}}  value={val}/>
        </span>
      },
      left:function(h,cb,descOption,val){
        return   <label>
       {descOption}:
       <input on-input={(e)=>{
         cb(e.target.value)
     }}  value={val} />
   </label>
  },
    top:function(h,cb,descOption,val){
        return  <label>
       {descOption}:
       <input on-input={(e)=>{
         cb(e.target.value)
     }}  value={val}/>
   </label>
  },
  orient:function(h,cb,descOption,val){
    let options=[{
      label:'横向',
      value:'horizontal'
    },
    {
      label:'竖向',
      value:'vertical'
    },
    ]
    return <span>{descOption}<MySelect options={options} val={val} setOption={(val)=>{cb(val)}}/></span>
  },
  align:function(h,cb,descOption,val){
    let options=[{
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
    },
    ]
    return <span>{descOption}<MySelect options={options} val={val} setOption={(val)=>{cb(val)}}/></span>
  },
    padding:function(h,cb,descOption,val){
        return  <label>
      {descOption}:
      <input type="number" on-input={(e)=>{
       cb(parseInt(e.target.value));
    }}  value={val}/>
    </label>
    },
    itemGap:function(h,cb,descOption,val){
      return  <label>
    {descOption}:
    <input type="number" on-input={(e)=>{
      cb(parseInt(e.target.value));
    }}  value={val}/>
    </label>
    },
    itemWidth:function(h,cb,descOption,val){
      return  <label>
    {descOption}:
    <input type="number" on-input={(e)=>{
      cb(parseInt(e.target.value));
    }}  value={val}/>
    </label>
    },
    itemHeight:function(h,cb,descOption,val){
      return  <label>
    {descOption}:
    <input type="number" on-input={(e)=>{
     cb(parseInt(e.target.value));
    }}  value={val}/>
    </label>
    },
    inactiveColor:function(h,cb,descOption,val){
      return  <span>
    {descOption}:
    <MyColorPicker cb={(val)=>{
      cb(val) 
    }} color={val}/>
    </span>
    },
    textStyle:function(h,cb,descOption,val){
      return <span>
      {descOption}:
      <TextStyle value={val} cb={(val)=>{cb(val)}}/>
      </span>
     },
     borderColor:function(h,cb,descOption,val){
      return  <span>
    {descOption}:
    <MyColorPicker cb={(val)=>{
      cb(val) 
    }} color={val}/>
    </span>},
    borderWidth:function(h,cb,descOption,val){
      return  <label>
    {descOption}:
    <input type="number" on-input={(e)=>{
     cb(parseInt(e.target.value));
    }}  value={val}/>
    </label>
    },
    borderRadius:function(h,cb,descOption,val){
      return  <label>
    {descOption}:
    <input type="number" on-input={(e)=>{
     cb(parseInt(e.target.value));
    }}  value={val}/>
    </label>
    },
    shadowColor:function(h,cb,descOption,val){
      return  <span>
    {descOption}:
    <MyColorPicker cb={(val)=>{
      cb(val) 
    }} color={val}/>
    </span>},
    shadowOffsetX:function(h,cb,descOption,val){
      return  <label>
    {descOption}:
    <input type="number" on-input={(e)=>{
     cb(parseInt(e.target.value));
    }}  value={val}/>
    </label>
    },
    shadowOffsetY:function(h,cb,descOption,val){
      return  <label>
    {descOption}:
    <input type="number" on-input={(e)=>{
     cb(parseInt(e.target.value));
    }}  value={val}/>
    </label>
    },
    //  icon:function(h,cb,descOption,val){
    //   return  <label>
    // {descOption}:
    //     <textarea  on-input={(e)=>{
    //     cb(e.target.value);
    //   }}  value={val}/>
    //   </label>
    //  },

}

}