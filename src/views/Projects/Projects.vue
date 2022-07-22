<template>
  <div class="container">
    <h2 class="display-2">Projects</h2>
    <div class="row d-flex justify-content-evenly"> 
      <div class="card rounded" style="width: 18rem;" v-for="(proj, index) in getProjects" :key="index">
        <img :src="proj.imageUrl" class="card-img-top img-fluid" :alt="index">
        <div class="card-body">
          <h5 class="card-title bg-black text-white">{{proj.name}}</h5>
          <p class="card-text bg-gradient">{{proj.description}}</p>
          <div class="d-flex justify-content-between">
            <a :href="proj.gihubLink" target="_blank" class="btn btn-primary">GitHub</a>
            <a :href="proj.hostedLink" target="_blank" class="btn btn-primary">Hosted Link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getProjects() {
      return this.$store.state.projects
    }
  }
}
</script>
