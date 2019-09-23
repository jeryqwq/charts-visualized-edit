<template>
  <div :class="isOpen?'normal':'close'" >
                      <div @click="isOpen=!isOpen">点击展开>></div>
    <div>
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
            isOpen:false,
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
mounted() {
    console.log(123,this.value);
},
}
</script>

<style lang=scss scoped>

</style>