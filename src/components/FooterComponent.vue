<template>
    <div id="footer" class="container-fluid bg-gradient">
        <div class="row">
            <aside class="col-md-10 m-auto">
                <h4 class="display-4">Social Media</h4>
                <p class="lead">Joel's Portofio &copy; 
                    <span class="currYear">{{getCurrYear}}</span>
                </p>
                <span class="social-media">
                    <a href="https://www.linkedin.com/in/joel-tshimanga-mukanya-b4b27834/" target="_blank"><i class="bi bi-linkedin" hi></i></a>
                </span>
                <span class="social-media">
                    <a href="https://www.youtube.com/channel/UCNoBN4_Ho5kXoyJHc4MtD0Q" target="_blank"><i class="bi bi-youtube"></i></a>
                </span>
                <span class="social-media">
                    <a href="https://www.facebook.com/jtdevmayer" target="_blank"><i class="bi bi-facebook"></i></a>
                </span>
            </aside>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        getCurrYear() {
            return new Date().getFullYear();
        }
    }
}
</script>
