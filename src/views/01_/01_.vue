<template>
    <div>
        <h2 class="tc">{{ count }}</h2>
        <button @click="add">+=1</button>
        <div class="fl col">
            <p class="fs32">ceshi1</p>
            <p class="bg696">ceshi2</p>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue"
export default defineComponent({
    setup () {
        let count = ref(0)
        function add() {
            count.value++
        }
        return {
            count,
            add
        }
    }
})
</script>

<style lang="scss" scoped>
.tc{
    text-align: center;
}
.col{
    color: $color;
    .bg696{
        line-height: 70px;
    }
}
</style>