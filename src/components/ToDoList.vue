<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(toDoItem, index) in propsdata" :key="index" class="shadow">
        <i class="fa-solid fa-check checkBtn" :class="{textCompleted : toDoItem.completed}" @click="toggleComplete(toDoItem, index)"></i>
        <span :class="{textCompleted : toDoItem.completed}">{{ toDoItem.item }}</span>
        <span class="removeBtn" @click="removeToDo(toDoItem, index)">
          <i class="fa-solid fa-trash"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeToDo(toDoItem, index) {
      this.$emit('removeItem', toDoItem, index)
    },
    toggleComplete(toDoItem, index) {
      this.$emit('toggleItem', toDoItem, index)
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
