export default {
  // Array of seekers
  setSeekers(state, seekers) {
    state.seekers = seekers
      .reduce((acc, curr) => {
        acc[curr.id] = curr
        return acc
      }, {})
  }
}