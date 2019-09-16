import TextStyle from '../../components/echart-attr-mapping/attr-object/textStyle.vue';
import MySwitch from '../../components/echart-attr-mapping/ui-status/MySwitch.vue';
import MySelect from '../../components/echart-attr-mapping/ui-status/MySelect.vue';
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
        console.log(val)
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
  }
}

}