export default{
  
    data(){
        return{
            typeOption: {},
        }
    },

    watch: {
        deep:true,
        "options.width"(val){
            this.$refs.echart.resize();
        },
        "options.height"(val){
            this.$refs.echart.resize();
        },
    },
    render(h) {
        let {type}=this.$attrs.options;
        this.typeOption=require(`./../../option/${type}/${type}-base-option`).default;;
        let [width,height]=this.typeOption.container;
        if(!this.$attrs.options.width||!this.$attrs.options.height){//先使用默认配置的宽高
            this.$emit('setContainer',{width,height,idx:this.$attrs.idx});
        };
        let curOption=this.$attrs.options.echartOption||this.typeOption.echartOption;
        let Echart=require(`./../../tools/charts/${this.$attrs.options.type}/index.js`);
        return(
            <div style={{width:`${this.$attrs.options.width}px`,height:`${this.$attrs.options.height}px`}}>
               {
                   <Echart.default ref="echart" typeOptions={curOption} index={this.$attrs.index} />
               }
            </div>
        )
    },
}