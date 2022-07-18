<template>
    <div id="footer" class="container-fluid bg-gradient">
        <div class="row">
            <aside class="col-md-6">
                <h4 class="display-4">Copyright</h4>
                <p class="lead">Joel's Portofio &copy; 
                    <span class="currYear">{{getCurrYear}}</span>
                </p>
            </aside>
            <aside class="col-md-6">
                <h4 class="display-4">Navigation</h4>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0"> 
                    <li class="nav-item">
                        <router-link to="/" class="routerLink">About</router-link> 
                    </li>
                </ul>
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
