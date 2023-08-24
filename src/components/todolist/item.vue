<template>
    <li class="item">
        <label><input type="checkbox" name="xxx" id="xxx" v-model="todo.isDone">
            <p>{{ todo.title }}</p>
        </label>
        <button class="del" @click="deledte(todo.id)">删除</button>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '../../types/todo';
export default defineComponent({
    name: "item",
    props:{
        todo: {
            type: Object as ()=> Todo,
            required: true
        },
        deleteTodo:{
            type: Function,
            required: true
        }
    },
    setup(props) {
        // 删除todo
        const deledte = (id: number)=>{
            props.deleteTodo(id);
        }
        return {
            deledte
        }
    }
})
</script>

<style lang="scss">
.item {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0 10px;
    margin: 10px 0;

    label {
        display: flex;

        input {
            margin-right: 5px;
        }

    }

    .del {
        display: none;
    }
}

.item:hover {
    background: #eee;

    .del {
        display: block;
    }
}
</style>
