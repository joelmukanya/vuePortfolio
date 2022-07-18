<template>
  <div class="container">
    <h2 class="display-2">About</h2>
    <LandingPage/>
    <AboutMe />
    <SkillsComponent/>
  </div>
</template>

<script>
import LandingPage from './LandingPage.vue'
import AboutMe from './AboutMe.vue'
import SkillsComponent from './SkillsComponent.vue'

export default {
  components: {
    LandingPage,
    AboutMe,
    SkillsComponent
  }
}
</script>
