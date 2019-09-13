<template>
    <div >
         <vue-drag-resize 
         :isActive="true" :w="options.width" :h="options.height" v-on:resizing="resize" v-on:dragging="resize">
            <Container :options="options" @setContainer="setContainer"/>
         </vue-drag-resize>
    </div>
</template>

<script>
  import VueDragResize from 'vue-drag-resize';
  import Container from './container.js';
    export default {
        components:{
            VueDragResize,
            Container
        },
        data() {
            return {
                top: 0,
                left: 0 ,
                options:{
                    type: "bar",
                    width:undefined,
                    height:undefined
                }
            }
        },
        methods: {
             resize(newRect) {
                this.options.width = newRect.width;
                this.options.height = newRect.height;
                this.top = newRect.top;
                this.left = newRect.left;
            },
            setContainer({width,height}){
                this.options.width=width;
                this.options.height=height;
            }
        },
    }
</script>

<style  >
    .echart-wrap{
        width: 100%;
        height: 100%;
    }
</style>