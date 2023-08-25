<template>
    <div class="main">
        <ul class="list">
            <List v-for="item in todos" 
                :todo="item" :key="item.id"
                :deleteTodo="deleteTodo"
                :changeTodo="changeTodo"
             />
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import List from "./item.vue"
import { Todo } from "../../types/todo"
export default defineComponent({
    name: "list",
    props: {
        todos: {
            type: Object as ()=>Todo[],
            default: []
        },
        deleteTodo:{
            type: Function,
            required: true
        },
        changeTodo:{
            type: Function,
            required: true
        }
    },
    components:{
        List
    },
    setup() {

        return {

        }
    }
})
</script>

<style lang="scss">
.main {
    width: 100%;
    // border: 1px solid #ddd;
    margin-top: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    // padding: 0 10px;
}
</style>
