<template>
  <div class="container">
    <h2 class="display-2">About Me</h2>
    <LandingPage/>
    <AboutMe />
    <SkillsComponent/>
    <TestimonialComponent/>
    <Education />
  </div>
</template>

<script>
import LandingPage from './LandingPage.vue'
import AboutMe from './AboutMe.vue'
import SkillsComponent from './SkillsComponent.vue'
import TestimonialComponent from './TestimonialComponent.vue'
import Education from './Education.vue'
export default {
  components: {
    LandingPage,
    AboutMe,
    SkillsComponent,
    TestimonialComponent,
    Education
  }
}
</script>
