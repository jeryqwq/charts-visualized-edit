export default {
    title:{
        show:function(h,cb,descOption,val){
              return <label>
                  {descOption}:
                  <input on-input={(e)=>{
                    cb(e.target.value)
                }}  value={val}/>
              </label>
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
        subtext:function(h,cb,descOption,val){
            return <label>
           {descOption}:
           <input on-input={(e)=>{
             cb(e.target.value)
         }}  value={val}/>
       </label>
      },
        textStyle:{
            fontSize:function(h,cb,descOption,val){
                return <label>
               {descOption}:
               <input on-input={(e)=>{
                 cb(e.target.value)
             }}  value={val}/>
           </label>
          },
        },
        subtextStyle:{
            fontSize:function(h,cb,descOption,val){
                return <label>
               {descOption}:
               <input on-input={(e)=>{
                 cb(e.target.value)
             }}  value={val}/>
           </label>
          },
        },
    }
}