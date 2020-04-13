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

    <script src="/vendor/jquery/dist/jquery.min.js"></script>
    <script src="/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/vendor/js-cookie/js.cookie.js"></script>
    <script src="/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
    <script src="/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>
    <script src="/js/argon.min.js"></script>
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
