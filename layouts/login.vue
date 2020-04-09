<template>
  <div>
    <NavBar />
    <div class="main-content">
      <nuxt  />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/Login/NavBar'

export default {
  components: {
    NavBar
  },
  head: {
    bodyAttrs: {
      class: 'bg-default'
    }
  }
}
</script>
