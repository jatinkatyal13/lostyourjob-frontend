export default {
  setProfile(state, profile) {
    state.profile = {
      ...state,
      ...profile
    }
  }
}
