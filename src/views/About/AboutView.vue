<template>
  <div class="container">
    <h2 class="display-2">About</h2>
    <LandingPage/>
    <AboutMe />
  </div>
</template>

<script>
import LandingPage from './LandingPage.vue'
import AboutMe from './AboutMe.vue'

export default {
  components: {
    LandingPage,
    AboutMe
  }
}
</script>
