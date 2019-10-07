<template>
    <div :class="isOpen?'normal':'close'">
        <div @click="isOpen=!isOpen">点击展开>></div>
        <div>
            是否显示:<el-switch v-model="splitArea.show"></el-switch>
        </div>
        <div class="">
            间隔:
            <el-input-number v-model="splitArea.interval" />
        </div>
        <AreaStyle :value="splitArea.splitArea" :cb="(val)=>{splitArea.areaStyle=val}"/>
    </div>
</template>

<script>
    import AreaStyle from './area-style';
    export default {
        components: {
            AreaStyle
        },
        props: ['value', 'cb'],
        watch: {
            value: {
                deep: true,
                handler(val) {
                    this.splitArea = val;
                }
            },
            splitArea: {
                deep: true,
                handler(val) {
                    this.cb(val);
                }
            }
        },
        data() {
            return {
                isOpen: false,
                splitArea: {
                    interval: 0,
                    show: true,
                    areaStyle: {
                        color: 'rgba(250,250,250,0)',
                        shadowBlur: {
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10 
                        },
                        shadowColor: 'red',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: 0.7
                    }

                },
            }
        },

    }
</script>

<style lang=scss>

</style>