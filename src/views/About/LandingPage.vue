<template>
    <section id="landing" class="container">
        <div class="row min-vh-100 bg-gradient">
            <img class="img-fluid profile-img" :src="this.$store.state.profiles[0].url" alt="joel"/>
        </div>
        <div class="row">
            <div class="wrapper col-md bg-transparent">
              <div class="row d-flex justify-content-center align-content-center">
                <div class="col">
                  <h2 id="developer" class="display-2 my-4">I'm a developer</h2>
                </div>
              </div>
            </div>        
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
        
    }
  },
  methods: {
    mouseHover() {
      
    }
  }
}
</script>

<style>
    #developer {
        display: block;
        z-index: 10;
        position: relative;
    }
    #developer::before {
        content: 'I\'m a developer';
        opacity: .4;
        color: darkgray;
        box-shadow: 1vw 1vw 1vw rgba(125, 125, 122, 0.8);
        z-index: -2;
        position: absolute;
        background-color: antiquewhite;
        border-radius: 20px;
        padding-left: 8px;
    }
</style>