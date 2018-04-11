const state = {
    open: false,
    modalType: '',
    problem: {
        level: 0,
        id: 0
    }
}

const mutations = {

    setModalToggle (state) {
      state.open = !state.open
    },
    setModalType (state, payload) {
      state.modalType = payload.type
    },
    setProblem (state, payload) {
      state.problem.id = payload.id
      state.problem.level = payload.level
    }
}

const actions = {
    setModalToggle: ({ commit }) => commit('setModalToggle'),
    setModalType: ({ commit }, payload) => commit('setModalType', payload),
    setProblem: ({ commit }, payload) => commit('setProblem', payload),

    setModalProblem: ({ dispatch, commit }, payload) => {
        dispatch('setModalToggle')
        dispatch('setModalType', payload.type)
        commit('setProblem', payload.problem)
    }
}

const getters = {
    getModalStatus: state => state.open,
    getModalType: state => state.modalType,
    getProblem: state => state.problem
}

export default {
    state,
    mutations,
    actions,
    getters
}