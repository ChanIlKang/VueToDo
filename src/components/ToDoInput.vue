<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newToDoItem" @keyup.enter="addToDo">
    <span class="addContainer" v-on:click="addToDo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>입력 없음</h3>
        <i class="closeModalBtn fa-solid fa-xmark fa-sm" @click="showModal = false"></i>
      </template>

      <template v-slot:body>
        <p>할 일을 입력하세요.</p>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data: function () {
    return {
      newToDoItem: '',
      showModal: false
    }
  },
  methods: {
    addToDo() {
      if (this.newToDoItem !== '') {
        this.$emit('addTodoItem', this.newToDoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newToDoItem = '';
    }
  },
  components: {
    'Modal': Modal,
  }
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
