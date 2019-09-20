import generateInput from './../../setting/generate';
export  default{
    name:'ConfigUi1',
    data(){
        return{
            curOptionKey:'title',
        }
    },
    watch: {
        '$attrs.curOption':{
            deep:true,
            handler(val){
                console.log(123,val)
                // this.$forceUpdate();
            }
        }
    },
    render(h){
        let attrsMapping={},option={};//属性生成对象，根据render函数生成获取属性对应的控件
        let {echartOption,type}=this.$attrs.curOption;
        let descOption=require(`./../../setting/attrs-desc/${type}.js`).default;//映射全局通用属性描述
        let defaultModel=require(`./../../setting/attributes/${type}.js`).default;//映射全局通用默认值类型
        let ChooseType=require(`./../echart-attr-mapping/ui-status/MySelect.vue`).default;
        let {optionName}=require(`./../../setting/config`).default;
        option=echartOption;
        // let deepClone=(option,defaultOption)=>{
        //     for (const key in defaultOption) {
        //         if (defaultOption.hasOwnProperty(key)) {
        //             if(typeof defaultOption[key]==='object'){
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
                        if(typeof element==='string'){
                            mapping[key]=generateInput(h,(val)=>{
                                option1[key]=val;
                                console.log("状态："+key,val,this.$attrs.index)
                                this.$bus.$emit('setOptionItem',option,this.$attrs.index);
                            },descOption[key],option1[key],element,key);
                        }
                    }
            }
        }
        echartOption&&deepIn(defaultModel,attrsMapping,descOption,echartOption);
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
                请选择属性:<ChooseType options={options} val={this.curOptionKey} setOption={setOption} />
                {
                   echartOption? Object.keys(attrsMapping).map((key)=>{
                      return  <div style={{display:this.curOptionKey===key?'block':'none'}}>
                          {deepGenerateDom(h,attrsMapping[key]) }
                      </div>
                    }):undefined
                }
            </div>
        )
    }
}