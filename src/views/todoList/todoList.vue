<template>
    <div class="container">
        <Headers :addTodo="addTodo" />
        <List :todos="todos" :changeTodo="changeTodo" :deleteTodo="deleteTodo" />
        <Footers :todos="todos" :changeAll="changeAll" :clearDone="clearDone" :deleteAll="deleteAll" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch, watchEffect } from 'vue';
import Headers from "@/components/todolist/header.vue"
import List from "@/components/todolist/list.vue"
import Footers from "@/components/todolist/footer.vue"
import { Todo } from "@/types/todo"
import { getStore, setStore } from "@/utils/store"
export default defineComponent({
    name: "todoList",
    components: {
        Headers,
        List,
        Footers
    },
    setup() {
        // 创建todos列表
        const data = reactive<{ todos: Todo[] }>({
            todos: []
        })
        // 填充本地todos记录
        const todos = getStore<Todo[]>("todos")
        if (todos) {
            data.todos = todos
        }
        // 添加todo
        const addTodo = (todo: Todo) => {
            data.todos.unshift(todo)
        }
        // 删除todo
        const deleteTodo = (id: number) => {
            const confirm = window.confirm('确定删除吗？')
            if (confirm) {
                data.todos = data.todos.filter(item => item.id !== id)
            }
        }
        // 选中一个
        const changeTodo = (id:number, isDone:boolean)=>{
            const index = data.todos.findIndex(item => item.id === id)
            data.todos[index].isDone = isDone
        }
        // 全部选中
        const changeAll = (isDone: boolean) => {
            data.todos = data.todos.map(item => {
                item.isDone = isDone
                return item
            })
        }
        // 清除已完成
        const clearDone = () => {
            data.todos = data.todos.filter(item => item.isDone == false)
        }
        // 删除所有
        const deleteAll = () => {
            if(confirm('确定删除吗？')){
                data.todos = []
            }
        }
        // 监听数据变化
        watch(()=>data.todos, (newValue, oldValue) => {
            setStore("todos", newValue)
        },{deep:true})

        // 返回数据
        return {
            ...toRefs(data),
            addTodo,
            deleteTodo,
            changeTodo,
            changeAll,
            clearDone,
            deleteAll
        }
    }
})
</script>

<style lang="scss">
.container {
    width: 600px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-top: 20px;
}
</style>
