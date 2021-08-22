<template>
  <div id="pagination" class="pagination">
    <div class="pagination__previous" :class="[!currentPage && 'disabled']" @click="handlePeviousClick"></div>
    <div
      class="pagination__page"
      :class="{active: index === currentPage}"
      v-for="(page, index) in totalPages"
      :key="page"
      @click="handlePageUpdate(index)"
    >
      {{ page }}
    </div>
    <div class="pagination__next" :class="[currentPage + 1 === totalPages && 'disabled']" @click="handleNextClick"></div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    totalPages: {
      type: Number,
      default: 1,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    handlePageUpdate: {
      type: Function,
      default: () => {},
    }
  },
  methods: {
    handlePeviousClick() {
      this.currentPage !== 0 && this.handlePageUpdate(this.currentPage - 1)
    },
    handleNextClick() {
      this.currentPage + 1 !== this.totalPages && this.handlePageUpdate(this.currentPage + 1)
    }
  }
}
</script>

<style lang="scss">
.pagination {
  height: auto;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 20px;
  margin: 10px;
  align-items: center;
  justify-content: center;

  &__page {
    margin: 0 10px;
    padding: 10px;
    cursor: pointer;

    &.active {
      background-color: #445fdc;
      color: white;
    }
  }

  &__previous {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right:10px solid #445fdc;
    cursor: pointer;

    &.disabled {
      border-right-color: gray;
      cursor: default;
    }
  }

  &__next {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left:10px solid #445fdc;
    cursor: pointer;

    &.disabled {
      border-left-color: gray;
      cursor: default;
    }
  }
}
</style>
