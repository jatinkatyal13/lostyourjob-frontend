<template></template>
<script>
import axios from 'axios'
import config from '~/config'

export default {
  async beforeMount() {
    const code = this.$route.query.code
    if (code) {
      const user = await axios.post(config.API_ENDPOINT + '/auth/linkedin/', {
        code
      })
      console.log(user)
    }
    this.$router.replace('/')
  }
}
</script>