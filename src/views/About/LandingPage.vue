<template>
    <section id="landing" class="container">
        <div class="row vh-50 bg-gradient">
            <p class="lead h3 landing-p d-flex justify-content-center align-items-center">Joel Mukanya</p>
            <div class="row d-flex justify-content-center align-content-center">
            <div class="col">
                <h2 id="developer" class="display-2 my-4 animate__animated backInDown" >I'm a developer</h2>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
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