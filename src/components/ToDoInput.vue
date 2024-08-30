<template>
  <div>
    <input type="text" v-model="todoInput"/>
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
// import Modal from "./common/Modal.vue";
import {ref} from "vue";

export default {
  setup(props, context) {
    const todoInput = ref('');

    function addTodo() {
      const todo = todoInput.value;
      context.emit('add', todo);
      clearTodo();
    }

    const clearTodo = () => todoInput.value = '';

    return {
      todoInput,
      addTodo
    }
  },
  // data: function () {
  //   return {
  //     newToDoItem: '',
  //     showModal: false
  //   }
  // },
  // methods: {
  //   addToDo() {
  //     if (this.newToDoItem !== '') {
  //       // this.$emit('addTodoItem', this.newToDoItem);
  //       const trimedText = this.newToDoItem.trim();
  //
  //       this.$store.commit("addOneItem", trimedText);
  //       this.clearInput();
  //     } else {
  //       this.showModal = !this.showModal;
  //     }
  //   },
  //   clearInput() {
  //     this.newToDoItem = '';
  //   }
  // },
  // components: {
  //   Modal,
  // }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: #42b983;
  cursor: pointer;
}
</style>
