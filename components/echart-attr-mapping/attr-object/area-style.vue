<template>
  <div>
      <div class="">区域颜色: <MyColorPicker :value="pValue.color" :cb="(val)=>{pValue.color=val}" /></div>
      <!-- <ShadowBlur  :value="pValue.shadowBlur" :cb="(val)=>{pValue.shadowBlur=val}"/> -->
    <div class="">阴影颜色: <MyColorPicker :value="pValue.shadowColor" :cb="(val)=>{pValue.shadowColor=val}" /></div>
  <div class="">
        水平偏移:<el-input-number v-model="pValue.shadowOffsetX"/>
    </div>
    <div class="">
        垂直偏移:<el-input-number v-model="pValue.shadowOffsetY"/>
    </div>
  </div>
</template>
<script>
import MyColorPicker from './../ui-status/MyColorPick';
// import ShadowBlur from './shadowBlur';

export default {
    components:{
        MyColorPicker,
        // ShadowBlur
    },
    props:['value','cb'],
    data() {
        return {
                pValue:{
                       color: 'rgba(250,250,250,0)',
                        shadowBlur: {
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10 
                        },
                        shadowColor: 'red',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: 0.7
                },
            }
        },
watch: {
    value:{
        deep:true,
        handler(val){
            this.pValue=this.value
        },
    },
    pValue:{
        deep:true,
        handler(val){
            this.cb(val);
        }
    }
},

}
</script>

<style lang=scss scoped>

</style>