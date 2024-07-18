<template>
  <div id="app">
    <ToDoHeader></ToDoHeader>
    <ToDoInput v-on:addTodoItem="addOneItem"></ToDoInput>
    <ToDoList v-bind:propsdata="toDoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></ToDoList>
    <ToDoFooter v-on:clearToDo="clearAllItems"></ToDoFooter>
  </div>
</template>

<script>
import ToDoHeader from "@/components/ToDoHeader.vue";
import ToDoInput from "@/components/ToDoInput.vue";
import ToDoList from "@/components/ToDoList.vue";
import ToDoFooter from "@/components/ToDoFooter.vue";

export default {
  data() {
    return {
      toDoItems: [],
    }
  },
  methods: {
    addOneItem(todoItem) {
      const obj = {completed: false, item: todoItem}
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.toDoItems.push(obj);
    },
    removeOneItem(toDoItem, index) {
      localStorage.removeItem(toDoItem.item);
      this.toDoItems.splice(index, 1);
    },
    toggleOneItem(toDoItem, index) {
      this.toDoItems[index].completed = !this.toDoItems[index].completed;

      localStorage.removeItem(toDoItem.item);
      localStorage.setItem(toDoItem.item, JSON.stringify(toDoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.toDoItems = [];
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.toDoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  components: {
    'ToDoHeader': ToDoHeader,
    'ToDoInput': ToDoInput,
    'ToDoList': ToDoList,
    'ToDoFooter': ToDoFooter,
  },
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
