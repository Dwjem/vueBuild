<template>
    <div class="header">
        <input type="text" class="input" placeholder="请输入你的任务名称，按回车键确认"
            v-model.trim="title"
            @keydown.enter="add()"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { Todo } from "@/types/todo"
export default defineComponent({
    name: "headers",
    props: {
        addTodo: {
            type: Function,
            required: true
        }
    },
    setup(props) {
        const title = ref("")
        const add = ()=>{
            if(title.value){
                const todo:Todo = {
                    id: Date.now(),
                    title: title.value,
                    isDone: false
                }
                props.addTodo(todo)
                // 重置一下
                title.value = ""
            }else{
                console.log("请输入内容");
            }
        }
        return {
            title,
            add
        }
    }
})
</script>

<style lang="scss">
.header {
    width: 100%;

    .input {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        outline: none;
        font-size: 14px;
        padding-left: 10px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        color: #333;
    }
}
</style>
