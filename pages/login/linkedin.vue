<template></template>
<script>
import config from '~/config'

export default {
  layout: 'login',
  async beforeMount() {
    const code = this.$route.query.code
    if (code) {
      const user = await this.$axios.post('/auth/linkedin/', {
        code
      })
    }
    this.$router.replace('/')
  }
}
</script>
