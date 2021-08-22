<template>
  <div id="App">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navigation/index.vue';

export default {
  name: 'App',
  components: {
    navbar: Navbar,
  }
}

</script>

<style lang="scss">
#App {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  font-family: Arial;
}
</style>
