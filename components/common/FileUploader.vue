<template>
  <div>
    <label class="form-control-label" for="customFileLang">{{ label }}</label>
    <div class="row align-items-center">
      <div class="col-md-10">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFileLang" ref="file" v-on:change="fileSelected()">
          <label class="custom-file-label" for="customFileLang"></label>
        </div>
      </div>
      <div class="col-md-2">
        <button 
          type="button" 
          class="btn btn-primary"
          v-on:click="uploadFile()"
          :disabled="uploadFileTask.isActive">
          {{ uploadFileTask.isActive ? 'Uploading' : 'Upload' }}
        </button>
      </div>
    </div>
    <div class="progress-wrapper pt-4" v-if="uploadFileTask.isActive">
      <div class="progress-info">
        <div class="progress-percentage">
          <span>{{ uploadPercent }}%</span>
        </div>
      </div>
      <div class="progress">
        <div 
          class="progress-bar bg-success" 
          role="progressbar" 
          :aria-valuenow="uploadPercent" 
          aria-valuemin="0" 
          aria-valuemax="100" 
          :style="`width: ${uploadPercent}%;`"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    onAfterUpload: Function
  },
  data: () => ({
    file: null,
    uploadPercent: null
  }),
  tasks(t) {
    return {
      uploadFileTask: t(function *() {
        const formData = new FormData()
        formData.append('file', this.file)
        const result = yield this.$axios.post('/minio/upload/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: e => {
            this.uploadPercent = parseInt(Math.round(( e.loaded / e.total ) * 100 ))
          }
        })
        if (this.onAfterUpload) {
          yield this.onAfterUpload(result.data)
        }
      }).flow('drop')
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
