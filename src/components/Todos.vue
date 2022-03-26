<template>
  <ul id="todos">
    <li v-for="todo in todos" v-bind:key="todo.id">{{ todo.content }}</li>
  </ul>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      todos: []
    }
  },

  created() {
    fetch("/api/v1/todos")
      .then(res => res.json())
      .then(json => {
        this.todos = json.todos
      })
  }
}
</script>
