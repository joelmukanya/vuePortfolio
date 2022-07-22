<template>
    <div id="main" class="container-fluid min-vh-100 bg-secondary">  
        <transition 
            mode="out-in"
            enter-active-class="animate_animated animate_fadeInLeft"
            leave-active-class="animate_animated animate_fadeInRight">
            <router-view/>
        </transition>
    </div>
</template>

<script>

export default {
    components: {
        
    }
}
</script>