<template>
  <div>
    <label class="form-control-label">{{ label }}</label>
    <span v-if="url">
      <a 
        :href="url" 
        target="_blank" 
        class="btn btn-sm btn-success">
        View File
      </a>
      <button 
        type="button"
        class="btn btn-sm btn-info"
        v-on:click="toggleEditingMode()">
        Edit File
      </button>
    </span>
    <div class="row align-items-center pt-4" v-if="editing || !url">
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
    onAfterUpload: Function,
    url: String
  },
  data: () => ({
    file: null,
    uploadPercent: null,
    editing: false
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
    },
    toggleEditingMode() {
      this.editing = !this.editing
    }
  }
}
</script>
