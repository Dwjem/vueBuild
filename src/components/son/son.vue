<template>
    <div class="son">
        <h2 :style="{color}">儿子组件</h2>
    </div>
    <GradSon :color="color" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GradSon from "./GradSon.vue"

export default defineComponent({
    name:"son",
    components:{
        GradSon
    },
    props:["color"],
    setup(){
        
        return {

        }
    }
})
</script>

<style lang="">
    
</style>
