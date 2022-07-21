<template>
  <section id="skills" class="container">
    <h2 class="display-2">Skills</h2>
    <div class="d-flex flex-wrap justify-content-evenly">
        <div class="row d-flex flex-column my-2 mx-1" v-for="(skill, index) in skills" :key="index">
            <div class="col">
                <p class="h4 lead text-white">{{skill.title}}</p>
            </div>
            <div class="col">
                <span class="start-wrapper">
                    <i class="bi bi-star-fill stars" v-for="c in 5" :key="c"></i>
                </span>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    computed: {
        skills() {
            return this.$store.state.skills
        }
    },
}
</script>

<style>
.stars{
    animation: stars-animation 2s infinite linear;
}
@keyframes stars-animation {
    from {
        font-size: .7em;
        color: darkgreen;
    }
    to{
        width: 2em;
        text-shadow: var(--darkBoxShadow);
    }
}

</style>