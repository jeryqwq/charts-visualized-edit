export default{
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
    widht:function(h,cb,descOption,val){
        return  <label>
       {descOption}:
       <input on-input={(e)=>{
         cb(e.target.value)
     }}  value={val}/>
    </label>
    },
    height:function(h,cb,descOption,val){
        return  <label>
       {descOption}:
       <input on-input={(e)=>{
         cb(e.target.value)
     }}  value={val}/>
    </label>
    },
    containLabel:function(h,cb,descOption,val){
        return <span>
            {descOption}:
            <MySwitch cb={(val)=>{cb(val)}}  value={val}/>
        </span>
  },
    backgroundColor:function(h,cb,descOption,val){
        return  <label>
      {descOption}:
      <MyColorPicker cb={(val)=>{
        cb(val) 
      }} color={val}/>
      </label>
      },
    borderColor:function(h,cb,descOption,val){
        return  <label>
      {descOption}:
      <MyColorPicker cb={(val)=>{
        cb(val) 
      }} color={val}/>
      </label>
      },
    borderWidth:function(h,cb,descOption,val){
        return  <label>
      {descOption}:
      <input type="number" on-input={(e)=>{
       cb(parseInt(e.target.value));
      }}  value={val}/>
      </label>
      },
    shadowBlur:function(h,cb,descOption,val){
        return  <label>
      {descOption}:
      <input type="number" on-input={(e)=>{
       cb(parseInt(e.target.value));
      }}  value={val}/>
      </label>
      },
    shadowColor:'阴影颜色',
    shadowOffsetX:'水平偏移距离',
    shadowOffsetY:'垂直偏移距离',
    tooltip:{
        show: "是否显示提示框",
        // position:
        trigger: '触发类型',
        backgroundColor: '浮层的背景颜色',
        borderColor: '浮层的边框颜色',
        borderWidth:"浮层的边框宽",
        padding: '浮层内边距',
        textStyle:{},
    }
}