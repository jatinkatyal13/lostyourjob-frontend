export default {
  async loadCurrentUserProfile({ commit }) {
    const profile = await this.$axios.get('/api/seekers/myProfile/')
    commit('setProfile', profile.data)
    return profile
  },
  async updateCurrentUserProfile({ commit }, newProfile) {
    const profile = await this.$axios.post('/api/seekers/myProfile/', newProfile)
    commit('setProfile', profile.data)
    return profile
  }
}