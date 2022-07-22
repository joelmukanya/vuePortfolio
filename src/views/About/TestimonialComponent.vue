<template>
  <section id="testimonial" class="container">
    <h2 class="display-2 text-center">Testimonials</h2>
    <div class="row d-flex flex-wrap justify-content-evenly bg-black my-3">
        <div id="card-slider" class="col align-self-center" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="card my-2" style="height: 30rem;">
                <div class="d-block">
                    <img :src="testimonial.profile" class="card-img-top testimonial-img" :alt="testimonial.fullname">
                </div>
                <div class="card-body">
                    <h5 class="card-title bg-dark text-white">{{testimonial.fullname}}</h5>
                    <p class="card-text lead">{{testimonial.description}}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    }
}
</script>

<style>

</style>