<template>
    <div id="footer" class="container-fluid bg-gradient">
        <div class="row">
            <aside class="col-md-4">
                <h4 class="display-4">Copyright</h4>
                <p class="lead">Joel's Portofio &copy; 
                    <span class="currYear">{{getCurrYear}}</span>
                </p>
            </aside>
            <aside class="col-md-8">
                <h4 class="display-4">Social Media</h4>
                <div class="ms-auto "> 
                    <div class="col">
                        <span class="social-media">
                            <a href="https://www.linkedin.com/in/joel-tshimanga-mukanya-b4b27834/" target="_blank"><i class="bi bi-linkedin" hi></i></a>
                        </span>
                        <span class="social-media">
                            <a href="https://www.youtube.com/channel/UCNoBN4_Ho5kXoyJHc4MtD0Q" target="_blank"><i class="bi bi-youtube"></i></a>
                        </span>
                        <span class="social-media">
                            <a href="https://www.facebook.com/jtdevmayer" target="_blank"><i class="bi bi-facebook"></i></a>
                        </span>
                    </div>
                </div>
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
