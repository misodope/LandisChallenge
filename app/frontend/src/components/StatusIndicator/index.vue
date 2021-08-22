<template>
  <div class="status-indicator" >
    <div class="status-indicator__tag" :class="status" />
  </div>
</template>

<script>

export default {
  name: 'StatusIndicator',
  props: {
    status: {
      type: String,
      required: true,
    }
  }
}

</script>

<style lang="scss">
.status-indicator {
  color: #2c3e50;
  border-radius: 10px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &__tag{
    width: 15px;
    height: 15px;
    border-radius: 50%;

    &.low {
      background-color: #e74c3c;
    }
    &.medium {
      background-color: #f39c12;
    }
    &.high {
      background-color: #27ae60;
    }
  }
}
</style>
