<template>
    <el-select v-model="value" placeholder="请选择一个属性配置" @change="change">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
  </el-select>
</template>

<script>
export default {
    props:['options','setOption'],
    data() {
        return {
            value:'',
        }
    },
    methods: {
        change(val){
            this.setOption(val);
        }
    },
}
</script>

<style>

</style>