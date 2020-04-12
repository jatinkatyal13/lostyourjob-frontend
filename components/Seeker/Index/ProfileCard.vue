<template>
  <div class="card card-profile">
    <img src="/img/theme/img-1-1000x600.jpg" alt="Image placeholder" class="card-img-top">
    <div class="row justify-content-center pb-0 pb-md-4">
      <div class="col-lg-3 order-lg-2">
        <div class="card-profile-image">
          <a href="#">
            <img :src="photo" class="rounded-circle">
          </a>
        </div>
      </div>
    </div>
    <div class="card-body mt-4">
      <div class="text-center">
        <h5 class="h3">
          {{ fullName }}
        </h5>
        <div class="h5 font-weight-300">
          <i class="ni location_pin mr-2"></i>{{ email }}
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      fullName: this.$store.getters['session/fullName'],
      photo: this.$store.state.session.user.photo,
      email: this.$store.state.session.user.email
    }
  }
}
</script>
