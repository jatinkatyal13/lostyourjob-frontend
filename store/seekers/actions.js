export default {
  async loadSeekers({ commit }) {
    const seekers = await this.$axios('/api/seekers/')
    commit('setSeekers', seekers.data)
    return seekers.data
  }
}