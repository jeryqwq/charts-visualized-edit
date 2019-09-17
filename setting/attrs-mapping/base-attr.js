import TextStyle from '../../components/echart-attr-mapping/attr-object/textStyle.vue';
import MySwitch from '../../components/echart-attr-mapping/ui-status/MySwitch.vue';
import MySelect from '../../components/echart-attr-mapping/ui-status/MySelect.vue';
import MyColorPicker from '../../components/echart-attr-mapping/ui-status/MyColorPick.vue'
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
      return  <label>
    {descOption}:
    <MyColorPicker cb={(val)=>{
      cb(val) 
    }} color={val}/>
    </label>
    },
    textStyle:function(h,cb,descOption,val){
      return <span>
      {descOption}:
      <TextStyle value={val} cb={(val)=>{cb(val)}}/>
      </span>
     },
     borderColor:function(h,cb,descOption,val){
      return  <label>
    {descOption}:
    <MyColorPicker cb={(val)=>{
      cb(val) 
    }} color={val}/>
    </label>},
    borderWidth:function(h,cb,descOption,val){
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