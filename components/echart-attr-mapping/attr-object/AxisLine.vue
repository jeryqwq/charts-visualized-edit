<template>
    <div :class="isOpen?'normal':'close'" >
                <div @click="isOpen=!isOpen">点击展开>></div>
        <div>
            是否显示轴线:<el-switch v-model="axisLine.show"></el-switch>
        </div>
        <div class="">
            XY轴同在0刻度:<el-switch v-model="axisLine.onZero"></el-switch>
        </div>
        <div class="">
            轴线两边的箭头: <el-select v-model="axisLine.symbol" placeholder="请选择">
                <el-option label="不显示" value="none">
                </el-option>
                <el-option label="箭头" value="arrow">
                </el-option>
            </el-select>
        </div>
        <div class="">
            箭头偏移:<el-input-number  v-model="axisLine.symbolOffset"/>
        </div>
        <LineStyle :value="axisLine.lineStyle" :cb="(val)=>{axisLine.lineStyle=val}"/>
    </div>
</template>

<script>
import LineStyle from './lineStyle';
    export default {
        components:{
            LineStyle
        },
        props: ['value', 'cb'],
        watch: {
            value: {
                deep: true,
                handler(val) {
                    this.axisLine = val;
                }
            },
            axisLine: {
                deep: true,
                handler(val) {
                    this.cb(val);
                }
            }
        },
        data() {
            return {
                isOpen:false,
                axisLine: {
                    show: true,
                    onZero: true,
                    // onZeroAxisIndex:
                    symbol: 'none',
                    symbolSize: [10, 15],
                    symbolOffset: 0,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid',
                        shadowColor: 'rgba(0,0,0,0)'
                    }
                },
            }
        },
   
    }
</script>

<style lang=scss>

</style>