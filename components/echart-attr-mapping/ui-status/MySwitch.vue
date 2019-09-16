<template>
    <span>
        <el-switch
            v-model="pvalue"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="change"
            >
        </el-switch>
    </span>
</template>

<script>
export default {
    props:['cb','value'],
    data() {
        return {
            pvalue:false
        }
    },
    watch: {
        'value'(val){
        this.pvalue=val;
        }
    },
    methods: {
        change(val){
            this.cb(val);
        }
    },
}
</script>



