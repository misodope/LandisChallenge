<template>
  <div class="loader"/>
</template>

<script>

export default {
  name: 'Loader',
}

</script>

<style lang="scss">
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #445fdc; /* purple */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin-top: 20px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}
</style>
