<template>
  <div :class="isOpen?'normal':'close'" >
                      <div @click="isOpen=!isOpen">点击展开>></div>
    <div>
        是否显示刻度:<el-switch v-model="pValue.show"></el-switch>
    </div>
    <div>
        刻度和标签是否对其:<el-switch v-model="pValue.alignWithLabel"></el-switch>
    </div>
    <div>
        刻度显示间隔:<el-input-number v-model="pValue.interval"/>
    </div>
    <div>
        刻度是否朝内:<el-switch v-model="pValue.inside"></el-switch>
    </div>
    <div>
        刻度长度:<el-input-number v-model="pValue.length"/>
    </div>
    <LineStyle :value="pValue.lineStyle" :cb="(val)=>{pValue.lineStyle=val}"/>
  </div>
</template>
<script>
import LineStyle from './lineStyle';
export default {
    components:{
        LineStyle
    },
    props:['value','cb'],
    data() {
        return {
            isOpen:false,
                pValue:{
                show: true,
                alignWithLabel: false,
                interval: 0,
                inside: false,
                length: 5,
                                lineStyle:{
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