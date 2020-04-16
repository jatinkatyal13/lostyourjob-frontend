<template>
  <div class="container-fluid mt-5">
    <h1>Profiles</h1>
    <div class="row">
      <div class="col-md-4 col-lg-3" v-for="(seeker, id) in seekers" :key="id">
        <SeekerCard :seeker="seeker" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import SeekerCard from '~/components/Referrer/Index/SeekerCard'

export default {
  components: {
    SeekerCard
  },
  async asyncData({ store }) {
    await store.dispatch('seekers/loadSeekers')
  },
  computed: {
    seekers() {
      return this.$store.state.seekers.seekers
    }
  }
}
</script>