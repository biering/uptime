import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      itv1: 0,
      itv2: 0
    },
    mutations: {
      setDuration (state, { itv1, itv2 }) {
        if (!!itv1) {
          state.itv1 = itv1
        }
        if (!!itv2) {
          state.itv2 = itv2
        }
      }
    }
  })
}

export default createStore
