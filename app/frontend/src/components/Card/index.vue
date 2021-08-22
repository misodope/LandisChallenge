<template>
  <div id="card">
    <status-indicator :status="status"/>
    <img :src="picture" data-src="../../assets/default_picture.png" />
    <div class="card-info">
      <p>Name: {{name}}</p>
      <p>Email: {{email}}</p>
      <p>Phone: {{phone}}</p>
      <p>Address: {{address}}</p>
      <p>Credit: {{credit}}</p>
      <p>Balance: {{balance}}</p>
    </div>
  </div>
  </div>
</template>

<script>
import StatusIndicator from '../StatusIndicator/index.vue';

export default {
  name: 'Card',
  props: ['name', 'email', 'phone', 'picture', 'address', 'credit', 'status', 'balance'],
  components: {
    'status-indicator': StatusIndicator,
  },
}
</script>

<style lang="scss">
#card {
  width: 150px;
  height: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;

  .status-indicator {
    position: relative;
    bottom: 10px;
    left: 15px;
  }
}

.card-info {
  margin-top: 10px;
}

p {
  font-size: 10px;
  margin: 5px;
}

img {
  border-radius: 5px;
}
</style>
