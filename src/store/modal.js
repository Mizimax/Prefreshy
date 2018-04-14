const state = {
  modal : {
    open: false,
    modalType: '',
    problem: {
        level: 0,
        id: 0
    }
  },
  modal2 : {
    open: false,
    modalType: ''
  }
}

const mutations = {

    setModalToggle (state, payload) {
      state[payload.modal].open = !state[payload.modal].open
    },
    setModalType (state, payload) {
      state[payload.modal].modalType = payload.type
    },
    setProblem (state, payload) {
      state.modal.problem.id = payload.id
      state.modal.problem.level = payload.level
    }
}

const actions = {
    setModalToggle: ({ commit }, payload) => commit('setModalToggle', payload),
    setModalType: ({ commit }, payload) => commit('setModalType', payload),
    setProblem: ({ commit }, payload) => commit('setProblem', payload),

    setModalProblem: ({ dispatch, commit }, payload) => {
        dispatch('setModalToggle', payload.modal)
        dispatch('setModalType', { ...payload.type, ...payload.modal })
        if(payload.modal.modal === 'modal')
          commit('setProblem', payload.problem)
    }
}

const getters = {
    getModalStatus: (state, payload) => state.modal.open,
    getModalType: (state, payload) => state.modal.modalType,
    getModal2Status: (state, payload) => state.modal2.open,
    getModal2Type: (state, payload) => state.modal2.modalType,
    getProblem: (state, payload) => state.modal.problem
}

export default {
    state,
    mutations,
    actions,
    getters
}