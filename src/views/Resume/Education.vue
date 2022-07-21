<template>
    <section class="container" id="education">
      <h3 class="display-3 text-center">Education</h3>
      <div class="row d-flex flex-column flex-wrap g-3 text-white">
        <div class="edu-col col col-md-6" v-for="(educ, index) in educations" :key="index">
          <h4 class="display-4 text-center">{{educ.year}}</h4>
          <p class="lead">
            {{educ.description}}
            <span class="badge rounded-pill bg-primary">
              {{educ.schoolName}}
            </span>
            <i class="bi bi-chevron-right"></i> <a class="btn btn-outline-primary fw-bold" 
            :href="educ.certificateUrl" target="_blank">View my certificate</a>
          </p>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  computed: {
    educations() {
      return this.$store.state.educations
    }
  }
}
</script>

<style>

</style>