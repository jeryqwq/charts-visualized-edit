<template>
    <div class="body-wrap">
        <div class="left-mini">
            <vuedraggable class="wrapper" v-model="miniTools" ghost-class="ghost" @end="onEnd">
                <transition-group>
                    <div v-for="(item,idx) in miniTools" :key="idx" class="item">
                        <p>{{item.name}}</p>
                        <img :src="require('./statis/imgs/'+item.img+'.png')"/>
                    </div>
                </transition-group>
            </vuedraggable>
        </div>
        <DragItem v-for="(item,idx) in options" :key="item.id"  :options="item" :idx="idx"
         @setOption="setOption" />
        <div class="rg-option">
            <ConfigUi v-if="options[index]" :curOption="options[index]"
             :index="index" />
        </div>
    </div>
</template>

<script>
    import DragItem from './components/firm/drag-item.vue';
    import config from './setting/config';
    import vuedraggable from 'vuedraggable';
    import ConfigUi from './components/firm/config-ui.js';
    export default {
        components: {
            DragItem,
            vuedraggable,
            ConfigUi
        },
        created() {
        this.$bus.$on('setOptionItem',(option,idx)=>{
            console.log('app Setoption',option)
            // this.options[idx]=option;
            this.$set(this.options[idx],'echartOption',option)
            this.index=idx;
            this.setActive(idx);
        });
            this.$bus.$on('delItem',(idx)=>{
                 this.$delete(this.options,idx);
        });
        },
        data() {
            return {
                miniTools:config.types,
                index:0,
                curOption:undefined,
                options: [ {
                        type: 'bar',
                        id:10001,
                        x: 80,
                        y: 300,
                        isActive:false,
                        echartOption:undefined
                    }]
            }
        },
        methods: {
            setOption(item, idx) {
                this.$set(this.options,idx,item)
            },
            setActive(idx){
                this.options.forEach((item,index) => {
                    index===idx?this.$set(this.options[index],'isActive',true):this.$set(this.options[index],'isActive',false);
                });
            },
            onEnd: function (evt) {
                if (evt.originalEvent.clientX >= 140) {
                    this.options.push({
                        type: this.miniTools[evt.oldIndex].value,
                        x: evt.originalEvent.clientX - 100,
                        y: evt.originalEvent.clientY - 100,
                        id:Math.random(),
                        echartOption:undefined,
                        isActive:false,
                    });
                }
            },
        },
    }
</script>

<style>
    div.item.sortable-chosen.sortable-ghost {
        cursor: pointer;
        -webkit-user-drag: element;
        user-select: element !important;
    }
    .rg-option{
        position: absolute;
        /* right: -290px; */
        right:0;
        width: 300px;
        background: rgba(0, 0, 0, 0.2);
        height: 100%;
            overflow: scroll;
    }
    .rg-option:hover{
        right: 0;
    }
    .ghost {
        background: red;
    }

    .wrapper {
        cursor: pointer;
    }

    html,
    body,
    .body-wrap {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .left-mini:hover {
        left: 0;
        cursor: pointer;
    }

    .left-mini {
        width: 140px;
        position: absolute;
        left: -130px;
        top: 0;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
    }
    .nonmal{
        height: auto;
    }
    .close{
        overflow: hidden;
        height: 20px;
    }
</style>