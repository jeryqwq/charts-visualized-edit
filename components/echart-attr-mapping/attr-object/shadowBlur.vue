<template>
  <div>
    <div class="">阴影模糊颜色: <MyColorPicker :value="pValue.shadowColor" :cb="(val)=>{pValue.shadowColor=val}" /></div>
    <div class="">
        阴影模糊大小:<el-input-number v-model="pValue.shadowBlur"/>
    </div>
   
  </div>
</template>
<script>
import MyColorPicker from './../ui-status/MyColorPick';
export default {
    components:{
        MyColorPicker
    },
    props:['value','cb'],
    data() {
        return {
                pValue:{
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
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