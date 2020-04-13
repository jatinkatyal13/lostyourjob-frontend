export default {
  async loadUser ({ commit }) {
    try {
      const user = await this.$axios.get('/auth/me')
      commit('setUser', user.data)
    } catch (err) {
      commit('setUser', null)
    }
  },
  async logoutUser({ commit }) {
    await this.$axios.post('/auth/logout/').catch(console.log)
    commit('setUser', null)
  }
}
