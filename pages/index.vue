<template>
  <div>
    <div class="container-fluid mt--6">
      <div class="row">
        <h1> Hello World ! </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'isAuthenticated'
}
</script>
