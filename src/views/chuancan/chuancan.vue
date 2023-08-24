<template>
    <div class="father">
        
        <h2>父级组件&emsp;当前颜色: {{ color }}</h2>
    </div>
    <div>
        <button @click="color = 'red'">red</button>
        <button @click="color = 'yellow'">yellow</button>
        <button @click="color = 'green'">green</button>
    </div>
    <Son :color="color" />
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue';
import Son from "@/components/son/son.vue"
export default defineComponent({
    name: "chuancan",
    components:{
        Son
    },
    setup() {
        const color = ref("purple")
        provide("color_s", color)
        return {
            color
        }
    }
})
</script>

<style lang="">
    
</style>
