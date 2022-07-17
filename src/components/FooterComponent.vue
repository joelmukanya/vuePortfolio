<template>
    <div id="footer" class="container-fluid d-flex flex-wrap bg-gradient">
        <div class="row">
            <aside class="col-md-4">
                <h4 class="display-4">Copyright</h4>
                <p class="lead">Joel's Portofio &copy; 
                    <span class="currYear"></span>
                </p>
            </aside>
            <aside class="col-md-5 float-end">
                <h4 class="display-4">Navigation</h4>
                <ul class="navbar-nav"> 
                    <li class="nav-item">
                        <router-link to="/">About</router-link> 
                    </li>
                </ul>
            </aside>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
