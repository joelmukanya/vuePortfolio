<template>
    <div class="container-fluid bg-dark">
        <nav class="navbar navbar-expand-lg bg-transparent ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
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

}
</script>

<style>

</style>