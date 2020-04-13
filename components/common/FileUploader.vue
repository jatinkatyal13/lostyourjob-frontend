<template>
  <div>
    <label class="form-control-label" for="customFileLang">{{ label }}</label>
    <div class="custom-file">
      <input type="file" class="custom-file-input" id="customFileLang" ref="file" v-on:change="fileSelected()">
      <label class="custom-file-label" for="customFileLang"></label>
    </div>
    <div class="row mt-2 align-items-center">
      <div class="col">
        <button 
          type="button" 
          class="btn btn-primary btn-sm"
          v-on:click="uploadFile()">          
          Upload
        </button>
      </div>
      <div class="col-10">
        <div class="progress-wrapper pt-0">
          <div class="progress-info">
            <div class="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: String
  },
  data: () => ({
    file: null
  }),
  tasks(t) {
    return {
      uploadFileTask: t(function *() {
        const formData = new FormData()
        formData.append('file', this.file)
        const result = yield this.$axios.post('/minio/upload/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log(result)
      })
    }
  },
  methods: {
    uploadFile() {
      this.uploadFileTask.run()
    },
    fileSelected() {
      this.file = this.$refs.file.files[0];
    }
  }
}
</script>
