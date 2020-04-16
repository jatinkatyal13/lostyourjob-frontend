<template>
  <div>
    {{seeker}}  
  </div>
</template>
<script>
export default {
  computed: {
    seeker() {
      return this.$store.state.seekers.seekers[this.$route.params.id]
    }
  }  
}
</script>
