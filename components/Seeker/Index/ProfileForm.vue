<template>
  <div class="card">
    <div class="card-header">
      <div class="row align-items-center">
        <div class="col-8">
          <h3 class="mb-0">Edit profile </h3>
        </div>
        <div class="col-4 text-right">
          <button 
            type="button" 
            class="btn btn-primary"
            v-on:click="saveProfileTask.run()"
            :disabled="saveProfileTask.isActive">
            {{ saveProfileTask.isActive ? 'Saving' : 'Save' }}
          </button>
        </div>
      </div>
    </div>
    <VAsync :task="fetchProfileTask">
      <div class="card-body">
        <!-- Description -->
        <h6 class="heading-small text-muted mb-4">About me</h6>
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label class="form-control-label">About Me</label>
                <textarea 
                  rows="4" 
                  class="form-control" 
                  placeholder="A few words about you ..."
                  v-model="summary">
                </textarea>
              </div>
            </div>
            <div class="col-12">
              <FileUploader 
                label="Resume" 
                :url="profile && profile.resume"
                :onAfterUpload="onAfterResumeUpload" />
            </div>
            <div class="col-12">
              <FileUploader 
                label="Offer Letter"
                :url="profile && profile.offer_letter"
                :onAfterUpload="onAfterOfferLetterUpload"
                class="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </VAsync>
  </div>  
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import FileUploader from '~/components/common/FileUploader'
import VAsync from '~/components/common/VAsync'

export default {
  components: {
    FileUploader,
    VAsync
  },
  computed: {
    profile() {
      return this.$store.state.profile.profile
    },
    summary: {
      get() {
        return this.profile?.summary
      },
      set(val) {
        this.$store.commit('setProfile', { summary: val })
      }
    }
  },
  tasks(t) {
    return {
      fetchProfileTask: t(function *() {
        const profile = yield this.$store.dispatch('profile/loadCurrentUserProfile')
      }),
      saveProfileTask: t(function *() {
        const profile = yield this.$store.dispatch('profile/updateCurrentUserProfile', this.profile)
      })
    }
  },
  methods: {
    onAfterResumeUpload(data) {
      this.setProfile({
        ...this.profile,
        resume: data.url
      })
    },
    onAfterOfferLetterUpload(data) {
      this.setProfile({
        ...this.profile,
        offer_letter: data.url
      })
    },
    ...mapMutations({
      setProfile: 'profile/setProfile'
    })
  }
}
</script>
