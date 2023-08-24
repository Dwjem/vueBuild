<template>
    <div class="container">
        <Headers :addTodo="addTodo" />
        <List :todos="todos" :deleteTodo="deleteTodo" />
        <Footers :isChecked="allChecked" :todos="todos" :changeAll="changeAll" :clearDone="clearDone" :deleteAll="deleteAll" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
import Headers from "@/components/todolist/header.vue"
import List from "@/components/todolist/list.vue"
import Footers from "@/components/todolist/footer.vue"
import { Todo } from "@/types/todo"
export default defineComponent({
    name: "todoList",
    components: {
        Headers,
        List,
        Footers
    },
    setup() {
        const data = reactive<{ todos: Todo[] }>({
            todos: [
                { id: 1, title: "吃饭", isDone: false },
                { id: 2, title: "睡觉", isDone: true },
                { id: 3, title: "打豆豆", isDone: false },
                { id: 4, title: "打游戏", isDone: true },
                { id: 5, title: "打人", isDone: false }
            ]
        })
        // 全选状态
        const allChecked = computed(() => {
            return data.todos.every(item => item.isDone)
        })
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
            console.log(data.todos);
            
        }
        // 删除所有
        const deleteAll = () => {
            data.todos = []
        }
        // 返回数据
        return {
            ...toRefs(data),
            addTodo,
            deleteTodo,
            changeAll,
            clearDone,
            deleteAll,
            allChecked
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
