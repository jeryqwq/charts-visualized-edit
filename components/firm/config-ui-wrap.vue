<template>
<!-- <div>123</div> -->
    <ConfigUi  :options="this.options" :index="$attrs.index" />
</template>

<script>
import ConfigUi from './config-ui';
let defaultModel=require(`./../../setting/attributes/base-attr`).default;//映射全局通用默认值
        let deepClone=(option,defaultOption)=>{
            for (const key in defaultOption) {
                if (defaultOption.hasOwnProperty(key)) {
                    if(typeof defaultOption[key]==='object'){
                        console.log(key)
                        try {
                            option[key]?undefined:option[key]={};
                        } catch (error) {
                            
                        }
                        deepClone(option[key],defaultOption[key]);
                    }else{
                        if(!option[key]){
                            option[key]=defaultOption[key]
                        }
                        //模板没有参数时试用默认参数，避免vue空参数无法监听
                    }
                }
            }
        }
export default {
    props:['curOption','type'],
    components:{
        ConfigUi
    },
    mounted() {
          this.curOption.echartOption?this.options={
            ...defaultModel,
            ...this.curOption.echartOption,
        }:this.options={};
        deepClone(this.options,defaultModel);
        console.log(123,this.options)
    },
    data() {
        return {
            options:{}
        }
    },

}
</script>

<style>

</style>