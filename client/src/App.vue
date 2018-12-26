<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Admin msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Admin from './components/Admin.vue'

export default {
  name: 'app',
  components: {
    Admin
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
