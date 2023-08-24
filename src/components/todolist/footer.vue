<template>
    <div class="footer">
        <div>
            <label>
                <input type="checkbox" v-model="cheched" @change="changeAll(cheched)">
                <span>全选</span>&emsp;
            </label>
            <span>已完成 {{ checkedNum }}</span> /
            <span>全部 {{ todos.length }}</span>
        </div>
        <div class="buttons">
            <button class="clearIsDone" @click="clearDone()">删除已完成</button>
            <button class="clearAll" @click="deleteAll()">删除所有</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Todo } from '@/types/todo';
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
    name: "footers",
    props: {
        todos: {
            type: Array as () => Todo[],
            default: () => []
        },
        changeAll: {
            type: Function,
            required: true
        },
        clearDone: {
            type: Function,
            required: true
        },
        deleteAll: {
            type: Function,
            required: true
        },
        allChecked: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const cheched = ref(false);
        // 已完成的个数
        const checkedNum = computed(() => {
            const num = (props.todos as Todo[]).filter((todo) => todo.isDone).length;
            cheched.value = num > 0 && num === props.todos.length;
            return num
        });
        return {
            cheched,
            checkedNum
        }
    }
})
</script>

<style lang="scss">
.footer {
    padding: 0 10px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    label input {
        margin-right: 5px;
    }

    .buttons {
        button {
            margin-left: 10px;
            border: none;
            outline: none;
            color: #fff;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            background: rgba(194, 59, 59, 1);
            &:hover{
                background: rgba(194, 59, 59, .8);
            }
        }
    }
}
</style>
