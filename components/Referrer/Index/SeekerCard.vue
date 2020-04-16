<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="seeker.user.photo || '/img/sample_user.jpg'" :alt="seeker.user.first_name">
    <div class="card-body">
      <h5 class="card-title">{{seeker.user.first_name}} {{seeker.user.last_name}}</h5>
      <p class="card-text">{{ seeker.user.email }}</p>
      <nuxt-link :to="`/referrer/seeker/${seeker.id}`" class="btn btn-primary">Profile</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    seeker: Object
  }
}
</script>