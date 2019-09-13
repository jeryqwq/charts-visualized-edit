import echart from 'echarts';
export default{
    props:{
        typeOptions:{
            type:Object,
            default:()=>{return{}}
        }
    },
    mounted() {
        this.echartEl=echart.init(this.$refs.echart);
        this.echartEl.setOption(this.typeOptions);
    },
    methods: {
        resize(){
            this.echartEl.resize();
        }
    },
    render(h) {
        return(
            <div class="echart-wrap" ref="echart"></div>
        )
    },
}

