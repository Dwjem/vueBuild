<template>
    <div class="GradSon" :style="{color}">孙子组件</div>
    <h2 :style="{color: color_s}">测试注入颜色是否有效</h2>
</template>

<script lang="ts">
import { defineComponent, inject, StyleValue } from 'vue';
export default defineComponent({
    name:"GradSon",
    props:["color"],
    setup(){
        const color_s = inject<StyleValue | undefined>("color_s")
        
        return {
            color_s
        }
    }
})
</script>

<style lang="">
    
</style>
