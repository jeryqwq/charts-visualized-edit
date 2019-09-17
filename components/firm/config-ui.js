export  default{
    data(){
        return{
            curOptionKey:'title',
        }
    },
    render(h){
        let attrsMapping={},option={};//属性生成对象，根据render函数生成获取属性对应的控件
        let {echartOption,type}=this.$attrs.curOption;
        let MappingOption=require(`./../../setting/attrs-mapping/base-attr`).default;//映射全局通用控件
        let descOption=require(`./../../setting/attrs-desc/base-attr`).default;//映射全局通用属性描述
        let defaultModel=require(`./../../setting/attributes/base-attr`).default;//映射全局通用默认值
        let ChooseType=require(`./../echart-attr-mapping/ui-status/MySelect.vue`).default;
        let {optionName}=require(`./../../setting/config`).default;
        echartOption?option={
            ...defaultModel,
            ...echartOption,
        }:option={};
        // let deepClone=(option,defaultOption)=>{
        //     for (const key in defaultOption) {
        //         if (defaultOption.hasOwnProperty(key)) {
        //             if(typeof defaultOption[key]==='object'){
        //                 console.log(key)
        //                 option[key]?undefined:option[key]={};
        //                 deepClone(option[key],defaultOption[key]);
        //             }else{
        //                 if(!option[key]){
        //                     option[key]=defaultOption[key]
        //                 }
        //                 //模板没有参数时试用默认参数，避免vue空参数无法监听
        //             }
        //         }
        //     }
        // }
        // deepClone(option,defaultModel);
        let deepIn=(val,mapping,descOption,option1)=>{
            for (const key in val) {
                    let element = val[key];
                    if(typeof element==='object'){
                        option1[key]?undefined:option1[key]={};
                        attrsMapping[key]?undefined:attrsMapping[key]={};
                        deepIn(element, attrsMapping[key],descOption[key],option1[key]);//深度遍历属性配置
                    }else{
                        if(typeof element==='function'){
                            mapping[key]=element(h,(val)=>{
                                option1[key]=val;
                                this.$bus.$emit('setOptionItem',option,this.$attrs.index);
                            },descOption[key],option1[key]);
                        }
                    }
            }
        }
    
        
        deepIn(MappingOption,attrsMapping,descOption,option);
        let deepGenerateDom=(h,val)=>{
            if(val.tag){
                return val;
            }else{
                return Object.keys(val).map((key)=>{
                    return <div>
                    {
                        deepGenerateDom(h,val[key])
                    }
                </div>
               });
            }
        }
        let setOption=(val)=>{
           this.curOptionKey=val;
        }
        let options=(function(){
            let arr=[];
            Object.keys(attrsMapping).forEach((item)=>{
                arr.push({
                    label:optionName[item].name,
                    value:item
                })
            })
            return arr;
        })();
        return(
            <div>
                <ChooseType options={options} val={this.curOptionKey} setOption={setOption} />
                {
                    Object.keys(attrsMapping).map((key)=>{
                      return  <div style={{display:this.curOptionKey===key?'block':'none'}}>
                          {deepGenerateDom(h,attrsMapping[key]) }
                      </div>
                    })
                }
            </div>
        )
    }
}