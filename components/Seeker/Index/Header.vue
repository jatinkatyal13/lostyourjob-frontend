<template>
  <!-- Header -->
  <div class="header pb-6 d-flex align-items-center" style="min-height: 500px; background-image: url(/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
    <!-- Mask -->
    <span class="mask bg-gradient-default opacity-8"></span>
    <!-- Header container -->
    <div class="container-fluid d-flex align-items-center">
      <div class="row">
        <div class="col-lg-7 col-md-10">
          <h1 class="display-2 text-white">Hello {{ fullName }}</h1>
          <p class="text-white mt-0">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullName: this.$store.getters['session/fullName']
    }
  }
}
</script>
