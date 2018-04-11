const state = {
    open: true,
    modalType: 'problem',
    problem: {
        level: 0,
        id: 0
    }
}

const mutations = {

    setModalOpen (state) {
      state.open = true
    },
    setModalClose (state) {
      state.open = false
    },
    setModalType (state, payload) {
      state.type = payload.modalType
    },
    setProblem (state, payload) {
      state.problem.id = payload.id
      state.problem.level = payload.level
    }
}

const actions = {
    setModalOpen: ({ commit }) => commit('setModalOpen'),
    setModalClose: ({ commit }) => commit('setModalClose'),
    setModalType: ({ commit, payload }) => commit('setModalType', payload),
    setProblem: ({ commit, payload }) => commit('setProblem', payload)
}

const getters = {
    getModalOpen: state => state.open,
    getModalType: state => state.modalType,
    getProblem: state => state.problem
}

export default {
    state,
    mutations,
    actions,
    getters
}