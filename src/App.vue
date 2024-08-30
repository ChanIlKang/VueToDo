<template>
  <ToDoHeader></ToDoHeader>
  <ToDoInput @add="addTodoItem"></ToDoInput>
  <ToDoList :todoItems="todoItems" @remove="removeTodoItem"></ToDoList>
  <ToDoFooter></ToDoFooter>
</template>

<script>
import ToDoHeader from "@/components/ToDoHeader.vue";
import ToDoInput from "@/components/ToDoInput.vue";
import ToDoList from "@/components/ToDoList.vue";
import ToDoFooter from "@/components/ToDoFooter.vue";
import {ref} from "vue";

export default {
  components: {
    ToDoHeader,
    ToDoInput,
    ToDoList,
    ToDoFooter,
  },
  setup() {
    const todoItems = ref([]);

    function fetchTodos() {
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        result.push(todoItem);
      }
      return result;
    }
    todoItems.value = fetchTodos();

    function addTodoItem(todo) {
      todoItems.value.push(todo);
      localStorage.setItem(todo, JSON.stringify(todo));
    }

    function removeTodoItem(item, index) {
      todoItems.value.splice(index, 1);
      localStorage.removeItem(item, item);
    }

    return {
      todoItems,
      addTodoItem,
      removeTodoItem
    }
  }
}
</script>

<style>
body {
  background: #f6f6f6;
  text-align: center;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1);
}
</style>
