<template>
    <div class="body-wrap">
        <div class="left-mini">
            <vuedraggable class="wrapper" v-model="miniTools" ghost-class="ghost" @end="onEnd">
                <transition-group>
                    <div v-for="(item,idx) in miniTools" :key="idx" class="item">
                        <p>{{item.name}}</p>
                        <img :src="require('./statis/imgs/'+item.img+'.png')" />
                    </div>
                </transition-group>
            </vuedraggable>
        </div>
        <DragItem v-for="(item,idx) in options" :key="item.id" :options="item" :idx="idx" @setOption="setOption" />
        <div class="rg-option">
            <ConfigUi v-if="options[index]" :curOption="options[index]" :index="index" />
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
            this.$bus.$on('setOptionItem', (option, idx) => {
                this.$set(this.options[idx], 'echartOption', option)
                this.options.forEach((item, index) => {
                    index === idx ? this.$set(this.options[index], 'isActive', true) : this.$set(this
                        .options[index], 'isActive', false);
                });
                this.index = idx;
            });
            this.$bus.$on('delItem', (idx) => {
                this.$nextTick().then((res) => {
                    this.$delete(this.options, this.index);
                })
            });
        },
        data() {
            return {
                miniTools: config.types,
                index: 0,
                curOption: undefined,
                options: [{
                    type: 'bar',
                    id: 10001,
                    x: 180,
                    y: 300,
                    isActive: false,
                    echartOption: undefined
                }]
            }
        },
        methods: {
            setOption(item, idx) {
                this.$set(this.options, idx, item);
                this.index = idx;
            },
            onEnd: function (evt) {
                if (evt.originalEvent.clientX >= 140) {
                    this.options.push({
                        type: this.miniTools[evt.oldIndex].value,
                        x: evt.originalEvent.clientX - 100,
                        y: evt.originalEvent.clientY - 100,
                        id: Math.random(),
                        echartOption: undefined,
                        isActive: false,
                    });
                    this.index = this.options.length - 1;
                }
            },
        },
    }
</script>

<style lang=scss>
    div.item.sortable-chosen.sortable-ghost {
        cursor: pointer;
        -webkit-user-drag: element;
        user-select: element !important;
    }

    .rg-option {
        position: absolute;
        /* right: -290px; */
        right: 0;
        width: 300px;
        background: rgba(0, 0, 0, 0.2);
        height: 100%;
        overflow: scroll;

        &:hover {
            right: 0;
        }
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

    .left-mini {
        width: 140px;
        position: absolute;
        left: -130px;
        top: 0;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);

        &:hover {
            left: 0;
            cursor: pointer;
        }

        >.ghost {
            background: red;
        }
    }
    .nonmal {
        height: auto;
    }
    .close {
        overflow: hidden;
        height: 20px;
    }
</style>