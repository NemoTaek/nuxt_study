export default {
  state: {
    count: 1,
  },
  getters: {
    getIncreaseCount: (state) => {
      return state.count + 2; // 3
    },
    formattedCount: (state, getters) => {
      return getters.getIncreaseCount + 100; // 103
    }
  },
  mutations: {
    addCounter(state, payload) {
      return state.count += payload;
    }
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