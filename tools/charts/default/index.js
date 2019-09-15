import echart from 'echarts';
export default{
    props:{
        typeOptions:{
            type:Object,
            default:()=>{return{}}
        },
        index:{
            type:Number,
        }
    },
    mounted() {
        this.echartEl=echart.init(this.$refs.echart);
        this.echartEl.setOption(this.typeOptions);
    },
    watch: {
        deep:true,
        typeOptions(val){
            this.echartEl.setOption(val);
        }
    },
    methods: {
        resize(){
            this.echartEl.resize();
        },
        resetOption(option){
        this.echartEl.setOption(option);
        },
        eventBus(){
            this.$bus.$emit('setOptionItem',this.typeOptions,this.index)
        }
    },
    render(h) {
        return(
            <div on-click={()=>{
                this.eventBus();
            }} style={{height:'100%',width:'100%'}} ref="echart"></div>
        )
    },
}

