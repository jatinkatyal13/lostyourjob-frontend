<template>
  <div class="card">
    <div class="card-header">
      <div class="row align-items-center">
        <div class="col-8">
          <h3 class="mb-0">Edit profile </h3>
        </div>
        <div class="col-4 text-right">
          <a href="#!" class="btn btn-sm btn-primary">Save</a>
        </div>
      </div>
    </div>
    <div class="card-body">
      <form>
        <!-- Description -->
        <h6 class="heading-small text-muted mb-4">About me</h6>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label class="form-control-label">About Me</label>
                <textarea rows="4" class="form-control" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="form-control-label">Resume</label>
                <input type="file" class="form-control">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="form-control-label">Offer Letter</label>
                <input type="file" class="form-control">
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>  
</template>
<script>
export default {
  tasks(t) {
    return {
      fetchProfileTask: t(function *() {

      })
    }
  }
}
</script>
