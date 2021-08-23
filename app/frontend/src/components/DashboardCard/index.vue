<template>
  <div class="dashboard-card" :class="status">
    <div class="dashboard-card__header">Mortgage Status: {{status}}</div>
    <div class="dashboard-card__info">
      {{count}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'dashboard-card',
  props: {
    status: {
      type: String,
    },
    count: {
      type: Number,
      default: 0,
    }
  }
}
</script>

<style lang="scss">
.dashboard-card {
  width: 33%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;

  &.low {
    background-color: #e74c3c;
  }
  &.medium {
    background-color: #f39c12;
  }
  &.high {
    background-color: #27ae60;
  }

  &__header {
    font-size: 12px;
    align-self: flex-start;
    margin-bottom: 15px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
