export default {
  state: {
    count: 1,

    todoListCount: 0,
    todoListContents: [],
  },
  getters: {
    getIncreaseCount: (state) => {
      return state.count + 2; // 3
    },
    formattedCount: (state, getters) => {
      return getters.getIncreaseCount + 100; // 103
    },

    getTodoListCount: (state) => {
      return state.todoListCount
    },
    getTodoListContents: (state) => {
      return state.todoListContents
    }
  },
  mutations: {
    addCounter(state, payload) {
      return state.count += payload;
    },

    addTodoListContents(state, payload) {
      return state.todoListContents.push(payload);
    },
    deleteTodoListContents(state, payload) {
      let targetItemIndex = state.todoListContents.findIndex((el) => el.id === payload)
      return state.todoListContents.splice(targetItemIndex, 1);
    },
    modifyTodoListContents(state, payload) {
      let targetItemIndex = state.todoListContents.findIndex((el) => el.id === payload.id)
      let modifiedItem = payload;
      modifiedItem.complete = !modifiedItem.complete
      return state.todoListContents.splice(targetItemIndex, 1, modifiedItem)
    },
    sortTodoListContents(state, payload) {
      if(payload === '-created_at') {
        return state.todoListContents.sort((a, b) => a.realDate - b.realDate)
      } else if(payload === 'created_at') {
        return state.todoListContents.sort((a, b) => b.realDate - a.realDate)
      }
    },
    clearTodoListContents(state) {
      return state.todoListContents = [];
    },
  },
  actions: {
    async getCounter(context) {
      try {
        await setTimeout(() => {
          context.commit("addCounter", 2)
        }, 3000)
      }
      catch (e) {
        console.error(e)
      }
    },
  },
}