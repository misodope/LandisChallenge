<template>
  <div class="dashboard">
    <loader v-if="isLoading"/>
    <div v-show="!isLoading" class="dashboard__container">
      <section>
        <div class="dashboard__status-cards">
          <dashboard-card
            v-for="(count, status, index) in counts"
            :key="index"
            :count="count"
            :status="status"
          />
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import accountsApi from '../../api/accounts';
import Loader from "../../components/Loader/index.vue";
import DashboardCard from "../../components/DashboardCard/index.vue";

export default {
  name: 'accounts',
  components: {
    'loader': Loader,
    'dashboard-card': DashboardCard,
  },
  data () {
    return {
      isLoading: true,
      counts: {
        low: 0,
        medium: 0,
        high: 0,
      },
    }
  },
  async mounted () {
    try {
      const statistics = await accountsApi.getStatistics();
      console.log("STATISTICS", statistics);
      this.counts = statistics.counts;
      this.isLoading = false;
    } catch (error) {
      throw error;
    }
  },
}
</script>

<style lang="scss">
.dashboard {
  color: #2c3e50;
  display: flex;

  &__container {
    width: 100%;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__status-cards {
    display: flex;
    width: 100%;
  }
}
</style>
