<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </div>
</template>

<script>

export default {
  name: 'navbar',
}

</script>

<style lang="scss">
.navbar {
  color: #2c3e50;
  display: flex;
  align-items: center;
  padding: 20px;

  a {
    text-decoration: none;
    margin: 0 10px;

    &:hover {
    }

    &:visited {
      color: black;
    }
  }

  .router-link-exact-active {
    color: #445fdc !important;
  }
}
</style>
