<template>
    <div :class="isOpen?'normal':'close'"  >
        <div @click="isOpen=!isOpen">点击展开>></div>
        <div>
            文字颜色： 
                    <MyColorPicker :value="textStyle.color" :cb="(val)=>{textStyle.color=val}"/>
        </div>
        <div>文字大小：
            <el-input-number v-model="textStyle.fontSize" />
        </div>
        <div>字体: <el-select v-model="textStyle.fontFamily" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
         <div class="">
            文字描边颜色：<MyColorPicker :value="textStyle.textBorderColor" :cb="(val)=>{textStyle.textBorderColor=val}"/>
        </div>
        <div class="">
            文字描边大小：
            <el-input-number v-model="textStyle.textBorderWidth" />
        </div>
           <div class="">
            文字阴影颜色：
            <MyColorPicker :value="textStyle.textShadowColor" :cb="(val)=>{textStyle.textShadowColor=val}"/>
        </div>
         <div class="">
            文字阴影大小：
            <el-input-number v-model="textStyle.textShadowBlur" />
        </div>
       
         <div class="">
            文字阴影横向偏移：
            <el-input-number v-model="textStyle.textShadowOffsetX" />
        </div>
            <div class="">
            文字阴影纵向偏移：
            <el-input-number v-model="textStyle.textShadowOffsetY" />
        </div>
    </div>
</template>
<script>
import MyColorPicker from './../ui-status/MyColorPick';
    export default {
        components:{
         MyColorPicker   
        },
        props: ['value', 'cb'],
        data() {
            return {
                isOpen:false,
                options: [{
                    value: '微软雅黑',
                    label: 'Microsoft YaHei'
                }, {
                    value: 'SimHei',
                    label: '黑体'
                }, {
                    value: 'KaiTi',
                    label: '楷体'
                }],
                predefineColors: [
                    '#ff4500',
                    '#ff8c00',
                    '#ffd700',
                    '#90ee90',
                    '#00ced1',
                    '#1e90ff',
                    '#c71585',
                    'rgba(255, 69, 0, 0.68)',
                    'rgb(255, 120, 0)',
                    'hsv(51, 100, 98)',
                    'hsva(120, 40, 94, 0.5)',
                    'hsl(181, 100%, 37%)',
                    'hsla(209, 100%, 56%, 0.73)',
                    '#c7158577'
                ],
                textStyle: {
                    color: '#333',
                    fontSize: 15,
                    fontFamily: 'Microsoft YaHei',
                    textBorderWidth: 0,
                    textBorderColor: 'red',
                    textShadowColor: 'rgba(0,0,0,0)',
                    textShadowBlur: 0,
                    textShadowOffsetX: 0,
                    textShadowOffsetY: 0,
                }
            }
        },

        watch: {
            value: {
                handler(newVal){
                this.textStyle = newVal;
                },
                deep:true
            },
            textStyle: {
                handler(newVal) {
                    this.cb && this.cb(newVal);
                },
                deep: true,
            },

        },
        mounted() {
            this.textStyle = this.value;
        },
    }
</script>

<style>

</style>