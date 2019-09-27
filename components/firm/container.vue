function getOption(type) { 
    return require(`./../../option/${type}/${type}-base-option`).default;
 }
export default{
    data(){
        return{
            typeOption: {},
        }
    },
    watch: {
        deep:true,
        "$attrs.options"(val){
            this.$emit('setContainer',{width:val.width,height:val.height,idx:this.$attrs.idx});
            this.$refs.echart.resize();
        },
    },
    render(h) {
        let {type}=this.$attrs.options;
        console.log(getOption(type));
        this.typeOption=getOption(type);
        let [width,height]=this.typeOption.container;
        if(!this.$attrs.options.width||!this.$attrs.options.height){//先使用默认配置的宽高
            this.$emit('setContainer',{width,height,idx:this.$attrs.idx});
        };
        console.log(this.typeOption)
        // this.$attrs.options.echartOption||
        // let curOption=this.typeOption.echartOption;
        let Echart=require(`./../../tools/charts/${this.$attrs.options.type}/index.js`);
        return(
            <div style={{width:`${this.$attrs.options.width}px`,height:`${this.$attrs.options.height}px`}}>
               {
                   <Echart.default ref="echart" typeOptions={this.typeOption.echartOption} index={this.$attrs.index} />
               }
            </div>
        )
    },
}