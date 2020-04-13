export default {
  async loadCurrentUserProfile({ commit }) {
    const profile = await this.$axios.get('/api/')
  }
}