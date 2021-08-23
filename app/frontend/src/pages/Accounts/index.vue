<template>
  <div id="accounts" class="accounts">
    <loader v-if="isLoading"/>
    <div v-show="!isLoading" class="accounts__container">
      <card
        v-for="(item, index) in this.accounts"
        :key="index"
        :address="item.address"
        :credit="item.credit"
        :email="item.email"
        :name="item.name"
        :picture="item.picture"
        :phone="item.phone"
        :status="item.status"
        :balance="parseFloat(item.balance).toFixed(2)"
      />
    </div>
    <pagination v-if="!isLoading" :totalPages="this.pageData.totalPages" :currentPage="this.pageData.page" :handlePageUpdate="handlePageUpdate"/>
  </div>
</template>

<script>
import accountsApi from '../../api/accounts';
import Card from "../../components/Card/index.vue";
import Pagination from "../../components/Pagination/index.vue";
import Loader from "../../components/Loader/index.vue";

export default {
  name: 'accounts',
  components: {
    'card': Card,
    'pagination': Pagination,
    'loader': Loader,
  },
  data () {
    return {
      pageData: {
        page: 0,
        size: 10,
      },
      accounts: [],
      isLoading: true,
    }
  },
  mounted () {
    accountsApi.list(this.pageData)
      .then((data) => {
        const { totalItems, accounts, totalPages, currentPage } = data;

        this.pageData = {
          ...this.pageData,
          page: currentPage,
          totalPages,
          totalItems
        };
        this.accounts = accounts;

        setTimeout(() => {
          this.isLoading = false;
        }, 1500);
      })
  },
  methods: {
    async handlePageUpdate(page) {
      this.isLoading = true;

      try {
        const list = await accountsApi.list({ page, size: this.pageData.size });
        const { totalItems, accounts, totalPages, currentPage } = list;

        this.pageData = {
          ...this.pageData,
          page: currentPage,
          totalPages,
          totalItems
        };
        this.accounts = accounts;
        this.isLoading = false;
      } catch (error) {
        throw {
          message: `Error fetching accounts for page ${page + 1}`,
          error,
        }
      }
    }
  }
}
</script>

<style lang="scss">
.accounts {
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
