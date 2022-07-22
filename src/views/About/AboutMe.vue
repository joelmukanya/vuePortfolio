<template>
  <section id="about-me" class="container">
    <div class="row">
        <div id="slider" class="col-md-6">
          <div id="carouselProfile" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner" >
              <div class="carousel-item" v-for="(profile, index) in getProfiles" :key="index" :class="{active: index === 0 }">
                <img :src="profile.url" class="d-block w-100 profile-imgs" :alt="profile.name+' Profile '+(index + 1)"/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselProfile" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselProfile" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
        <div class="col-md-6 about-me-wrapper">
            <p class="lead text-center">
                My name is Joel Tshimanga Mukanya, I was born in Durban, Kwazulu Natal but was raised in Pretoria.
            </p>
            <p class="lead text-center">
                I graduated at Tshwane University of Technology in 2014 as a
                Software Developer and I've gained knowledge in data science,
                database, programming, data analysis, project management and many
                more.
            </p>
            <p class="lead text-center">
                I am currently employed as a coding lecturer at Life Choices and also run my own business, JT Devs. As a part-time YouTuber, I teach people different programming languages.
            </p>
        </div>
    </div>
  </section>
</template>
<script>
export default {
    computed: {
        getProfiles() {
            return this.$store.state.profiles;
        }
    },
}
</script>

<style>

</style>