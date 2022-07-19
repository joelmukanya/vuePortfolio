<template>
  <section id="skills" class="container">
    <h2 class="display-2">Skills</h2>
    <div class="d-flex flex-wrap justify-content-evenly">
        <div class="row d-flex flex-column my-2 mx-1" v-for="(skill, index) in skills" :key="index">
        <div class="col">
            <p class="h4 lead text-white">{{skill.title}}</p>
        </div>
        <div class="col">
            <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" 
            role="progressbar" :aria-valuenow="currPerc"
                aria-valuemin="0" :aria-valuemax="skill.percentage">
                <span class="progress-contents bg-black text-white fw-bolder fs-6 start-100 badge rounded-pill bg-transparent">{{currPerc}}%
                </span>
            </div>
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
            currPerc: 0,
            cnt: null
        }
    },
    computed: {
        skills() {
            return this.$store.state.skills
        }
    },
    methods: {
        progressBarTimer() {
            const navBar = document.querySelector('.progress-bar');
            const observer = new IntersectionObserver(entries => {
                entries.forEach( entry => {
                    entry.target.classList.toggle('prgAnimation', entry.isIntersecting);
                })
            });
            observer.observe(navBar);
        }
    },
    updated() {
        this.progressBarTimer();
    }
}
</script>

<style>
.prgAnimation{
    animation: progress-animation 10s alternate forwards;
}
@keyframes progress-animation {
    from {
        width: 0;
    }
    to{
        width: 100%;
    }
}
</style>