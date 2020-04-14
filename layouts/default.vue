<template>
  <div>
    <SideBar />
    <div class="main-content" id="panel">
      <NavBar />
      <nuxt />
      <div class="container-fluid">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import SideBar from '~/components/SideBar'
import Footer from '~/components/Footer'

export default {
  middleware: 'isAuthenticated',
  components: {
    NavBar,
    SideBar,
    Footer
  }
}
</script>

<style></style>
