<template>
  <div class="container">
    <h2 class="display-2">About Me</h2>
    <LandingPage/>
    <AboutMe />
    <SkillsComponent/>
    <TestimonialComponent/>
  </div>
</template>

<script>
import LandingPage from './LandingPage.vue'
import AboutMe from './AboutMe.vue'
import SkillsComponent from './SkillsComponent.vue'
import TestimonialComponent from './TestimonialComponent.vue'
export default {
  components: {
    LandingPage,
    AboutMe,
    SkillsComponent,
    TestimonialComponent,
  }
}
</script>
