<template>
     <div @click="eventBus();" style="height:100%;width:100%" ref="echart"></div>
</template>

<script>
import echart from 'echarts';

export default {
          props:{
        typeOptions:{
            type:Object,
            default:()=>{return{}}
        },
        index:{
            type:Number,
        }
    },
    data() {
        return {
            
        }
    },
     watch: {
        deep:true,
        immediate: true,
        typeOptions:{
            handler(val){
            console.log(1,val)
            this.echartEl.setOption(val);
            },
            deep:true,
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
    mounted() {
        this.echartEl=echart.init(this.$refs.echart);
        this.echartEl.setOption(this.typeOptions);
        this.$bus.$emit('setOptionItem',this.typeOptions,this.index)
    },
}
</script>

<style>

</style>