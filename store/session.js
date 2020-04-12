export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  async loadUser ({ commit }) {
    try {
      const user = await this.$axios.get('/auth/me')
      commit('setUser', user.data)
    } catch (err) {
      commit('setUser', null)
    }
  }
}

export const getters = {
  fullName: state => `${state.user.first_name} ${state.user.last_name}`
}
