import generateInput from './../../setting/generate';
export  default{
    name:'ConfigUi',
    data(){
        return{
            curOptionKey:'title',
        }
    },
    render(h){
        let attrsMapping={};//属性生成对象，根据render函数生成获取属性对应的控件
        console.log(this.$attrs.curOption)
        let {echartOption,type}=this.$attrs.curOption;
        let descOption=require(`./../../setting/attrs-desc/${type}.js`).default;//映射全局通用属性描述
        let defaultModel=require(`./../../setting/attributes/${type}.js`).default;//映射全局通用默认值类型
        let ChooseType=require(`./../echart-attr-mapping/ui-status/MySelect.vue`).default;
        let {optionName}=require(`./../../setting/config`).default;
        // let option={};
        // let deepCloneOption=(val,option1)=>{
        //     for (const key in val) {
        //         if (val.hasOwnProperty(key)) {
        //             const element = val[key];
        //             if(typeof element ==="object"){
        //                 option1[key]={};
        //                 deepCloneOption(element,option1[key]);
        //             }else{
        //                 option1[key]=element;
        //             }
        //         }
        //     }
        // }
        // deepCloneOption(echartOption,option);
        // console.log(option)
        let deepIn=(val,mapping,descOption,option1)=>{//控件类型  jSX映射控件  描述  配置对象
            for (const key in val) {
                    if(typeof val[key]==='object'){
                        option1[key]?undefined:option1[key]=new Object;
                        mapping[key]?undefined:mapping[key]=new Object;
                        deepIn(val[key], mapping[key],descOption[key],option1[key]);//深度遍历属性配置
                    }else{
                            mapping[key]=generateInput(h,(val)=>{
                                option1[key]=val;
                                // console.log("状态："+key,val);
                                // console.log(this.$attrs.index)
                                this.$bus.$emit('setOptionItem',echartOption,this.$attrs.index);
                            },descOption[key],option1[key],val[key],key);
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