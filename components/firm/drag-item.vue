<template>
    <div class='item-wrap'  v-if="$attrs.options">
        <vue-drag-resize :isActive="$attrs.options.isActive" :x="options.left" 
        :y="options.top" :w="options.width" :h="options.height" 
        v-on:resizing="resize"  
            v-on:dragging="resize" :minw='200' :minh="200" >
            <div class="action-btn" v-show="$attrs.options.isActive">
                <span class="close" @click.self="remove">X
                </span>
            </div>
            <Container :options="options" @setContainer="setContainer" 
            :index="$attrs.idx" :key="$attrs.idx"/>
        </vue-drag-resize>
    </div>
</template>
<script>
    import VueDragResize from 'vue-drag-resize';
    import Container from './container.js';
    export default {
        inheritAttrs:false,
        components: {
            VueDragResize,
            Container
        },
        data() {
            return {
                options: {
                    type: this.$attrs.options.type,
                    width: undefined,
                    height: undefined,
                    top: 40,
                    left:80,
                    echartOption:undefined
                }
            }
        },
        mounted() {
            this.$attrs.options.x&&(this.options.left=this.$attrs.options.x);
            this.$attrs.options.y&&(this.options.top=this.$attrs.options.y);
            this.$attrs.options.echartOption?this.options.echartOption=this.$attrs.options.echartOption:undefined;
        },
        methods: {
            resize(newRect) {
                this.options.width = newRect.width;
                this.options.height = newRect.height;
                this.top = newRect.top;
                this.left = newRect.left;
                this.$emit('setOption',this.options,this.$attrs.idx);
            },
            setContainer({width,height}) {
                this.options.width = width;
                this.options.height = height;
            },
            remove(){
                this.$bus.$emit('delItem',this.$attrs.idx)
            }
        },
    }
</script>
<style scoped>
    .item-wrap{
        position:relative;
    }
    .action-btn{
        display:inline-block;
        position:absolute;
        right:0;
        z-index:5;
        cursor: pointer;
    }
    span.close{
        display: inline-block;
        width: 20px;
        height: 20px;
        background: red;
    }
    span.sure{
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 15px;
        background: green;
    }
</style>