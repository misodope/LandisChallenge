<template>
  <div id="dashboard" class="dashboard">
    <loader v-if="isLoading"/>
    <div v-show="!isLoading" class="dasboard__container">
      Dashboard
    </div>
  </div>
</template>

<script>
import accountsApi from '../../api/accounts';
import Loader from "../../components/Loader/index.vue";

export default {
  name: 'accounts',
  components: {
    'loader': Loader,
  },
  data () {
    return {
      isLoading: true,
    }
  },
  mounted () {
    accountsApi.list(this.pageData)
      .then((data) => {
        const { totalItems, accounts, totalPages, currentPage } = data;

        setTimeout(() => {
          this.isLoading = false;
        }, 1500)
      })
  },
}
</script>

<style lang="scss">
.dashboard {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__container {
    display: flex;
    flex: 0 1 20%;
    flex-wrap: wrap;
  }
}
</style>
