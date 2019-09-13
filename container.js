export default{
    props:{
        options:{
            type:Object,
            default:()=>{
                return {
                type:'bar',
                }
            }
        }
    },
    data(){
        return{
            typeOption: {}
        }
    },
    watch: {
        deep:true,
        "options.width"(val){
            this.typeOption.container.width=val.width;
            this.$refs.echart.resize();
        },
        "options.height"(val){
            this.typeOption.container.height=val.height;
            this.$refs.echart.resize();
        }
    },
    render(h) {
        let {type}=this.options;
        this.typeOption=require(`./option/${type}/${type}-base-option`).default;
        let {width,height}=this.typeOption.container;
        if(!this.options.width&&!this.options.height){//先试用默认配置的宽高
            this.$emit('setContainer',{width,height});
        };
        let Echart=require(`./tools/charts/${this.options.type}/index.js`);
        return(
            <div style={{width:`${this.options.width}px`,height:`${this.options.height}px`}}>
               {
                   <Echart.default ref="echart" typeOptions={this.typeOption.echartOption} />
               }
            </div>
        )
    },
}