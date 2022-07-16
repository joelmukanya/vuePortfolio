<template>
  <HeaderComponent/>
  <MainComponent/>
  <FooterComponent/>
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './views/MainComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 40px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  padding: 20px;
  background-color: darkgray;
  border-radius: 20px;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #00b061;
}
</style>
