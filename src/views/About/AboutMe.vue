<template>
  <section id="about-me" class="container">
    <div class="row">
        <div id="slider" class="col-md-6">
          <div id="carouselProfile" class="carousel slide carousel-fade"    data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100 profile-imgs" alt="Joel Profile 1">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 profile-imgs" alt="Joel Profile 2">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100 profile-imgs" alt="Joel Profile 3">
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
                My name is Joel Tshimanga Mukanya, I was born in Durban, Kwazulu
                Natal but was raised in pretoria gauteng.
            </p>
            <p class="lead text-center">
                I graduated at Tshwane university of technology in 2014 as a
                Software Developer and I've gain knowledge in data science,
                database, programming, data analysis, project management and many
                more.
            </p>
            <p class="lead text-center">
                I am currently employed as a coding professor at Life Choices and
                I've my own business, JT Devs. I am also part-time YouTuber where
                I am teaching people different programming languages.
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
    methods: {
        loadImages() {
            this.getProfiles.forEach( (item, index)=> {
                document.querySelectorAll('.profile-imgs')[index].src = 
                item.url;
            })
        }
    },
    mounted() {
        this.loadImages(); 
    }

}
</script>

<style>

</style>