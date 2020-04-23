<template>
  <div :class="isOpen?'normal':'close'">
       <div @click="isOpen=!isOpen">点击展开>></div>
      <div class="">线条颜色: <MyColorPicker :value="pValue.color" :cb="(val)=>{pValue.color=val}" /></div>
      <div class="">线条宽度：<el-input-number v-model="pValue.width"/></div>
      <div class="">轴线类型：<el-select v-model="pValue.type" placeholder="请选择">
                <el-option label="实线" value="solid">
                </el-option>
                <el-option label="粗虚线" value="dashed">
                </el-option>
                <el-option label="细虚线" value="dotted">
                </el-option>
            </el-select></div>
    <div class="">阴影颜色: <MyColorPicker :value="pValue.shadowColor" :cb="(val)=>{pValue.shadowColor=val}" /></div>
    <ShadowBlur  :value="pValue.shadowBlur" :cb="(val)=>{pValue.shadowBlur=val}"/>
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
import ShadowBlur from './shadowBlur';
export default {
    components:{
        MyColorPicker,
        ShadowBlur
    },
    props:['value','cb'],
    data() {
        return {
            isOpen:false,
            pValue:{
                color: '#333',
                width: 1,
                type: 'solid',
                shadowColor:'rgba(0,0,0,0)',
                shadowBlur:{
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                },
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            }
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