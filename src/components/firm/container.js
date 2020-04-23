export default{
    data(){
        return{
            curOption:{},
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
        let {type,echartOption}=this.$attrs.options;
         let typeOption=require(`./../../option/${type}/${type}-base-option`).default();
        let [width,height]=typeOption.container;
        if(!this.$attrs.options.width||!this.$attrs.options.height){//先使用默认配置的宽高
            this.$emit('setContainer',{width,height,idx:this.$attrs.idx});
        };
        let Echart=require(`./../../tools/charts/${this.$attrs.options.type}/index.js`);
        this.curOption=echartOption||typeOption.echartOption;
        return(
            <div style={{width:`${this.$attrs.options.width}px`,height:`${this.$attrs.options.height}px`}}>
               {
                   <Echart.default ref="echart" typeOptions={this.curOption} index={this.$attrs.index} />
               }
            </div>
        )
    },
}