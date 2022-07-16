<template>
    <div id="header" :class="{headerBgColor: applyStyle}" class="container-fluid  position-sticky top-0">
        <nav class="navbar navbar-expand-lg bg-transparent">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <nav>
                        <router-link to="/">Home</router-link> |
                        <router-link to="/about">About</router-link>
                    </nav>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isScrolled: false,
            applyStyle: false,
        }
    },
    methods: {
        handleScroll() {
            this.isScrolled = (window.scrollY > 10);
            if(this.isScrolled) {
                this.applyStyle = true;
            }else {
                this.applyStyle = false;
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<style>

</style>