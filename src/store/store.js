import {createStore} from "vuex";

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    }
}

export default createStore({
    state: {
        headerText: 'TO DO LIST!',
        toDoItems: storage.fetch(),
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {completed: false, item: todoItem}
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.toDoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.toDoItem.item);
            state.toDoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            state.toDoItems[payload.index].completed = !state.toDoItems[payload.index].completed;

            localStorage.removeItem(payload.toDoItem.item);
            localStorage.setItem(payload.toDoItem.item, JSON.stringify(payload.toDoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.toDoItems = [];
        }
    }
});
