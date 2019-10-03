<template>
  
</template>

<script>
export default {
  data(){
        return{
            typeOption: {},
        }
    },  
    watch: {
        deep:true,
        "$attrs.options"(val){
            this.$emit('setContainer',{width:val.width,height:val.height,idx:this.$attrs.idx});
            this.$refs.echart.resize();
        },
    },
}
</script>

<style>

</style>