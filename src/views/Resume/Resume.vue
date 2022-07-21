<template>
  <div class="container">
    <h2 class="display-2">Resume</h2>
    <div class="row">
      <div class="col-md-4">
        <img class="img-thumbnail rounded-circle" :src="this.$store.state.profiles[1].url" alt="Joel's Profile"/>
      </div>
      <div class="col-md-7">
        <div class="row">
          <div class="col-md about-me-wrapper">
            <p class="lead text-center">
              <span class="software-developer">I am a software developer</span>, have been coding since 2012, and love mentoring others.
              I am a CEO, and founder at (JT Devs), it been operating since Jan 2012. JT Devs is focused on
              the following services software consulting and IT college in addition we do have our youtube
              channel to allow other learners to study for free online, our aim is to make sure everyone who is
              willing to learn our IT courses has a bright future.
            </p>
            <p class="lead text-center">
              I graduated from the Tshwane University of Technology in Software Engineering and gained a
              Junior Android Developer certificate through study jams and PC Engineering (Havatech) at
              Johannesburg 2006. Enjoy working with teams and doing well working alone.
            </p>
          </div>
          </div>
        </div>
    </div>
    <div class="row d-flex justify-content-center my-3">
      <div class="col-md-4">
        <button class="btn btn-primary my-3">Download CV</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>