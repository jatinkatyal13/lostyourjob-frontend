<template></template>
<script>
import config from '~/config'

export default {
  layout: 'login',
  async beforeMount() {
    const { code, role = null } = this.$route.query
    if (code) {
      const user = await this.$axios.post('/auth/linkedin/', {
        code,
        role
      })
    }
    this.$router.replace('/')
  }
}
</script>
