<template>
  <ul>
    <li>
      <router-link to="/">首页</router-link>
    </li>
    <li>
      <router-link to="/chuancan">传参: 父组件直接传参给孙子组件</router-link>
    </li>
    <li>
      <router-link to="/todolist">案例: todoList</router-link>
    </li>
  </ul>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
</style>
