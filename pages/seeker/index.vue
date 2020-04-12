<template>
  <div>
    <Header />
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-8 order-xl-1">
          <ProfileForm />
        </div>
        <div class="col-xl-4 order-xl-2">
          <ProfileCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '~/components/Seeker/Index/Header'
import ProfileForm from '~/components/Seeker/Index/ProfileForm'
import ProfileCard from '~/components/Seeker/Index/ProfileCard'

export default {
  components: {
    Header,
    ProfileForm,
    ProfileCard
  }
}
</script>
