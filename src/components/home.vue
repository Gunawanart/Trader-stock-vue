<template>
  <div>
    <h3>Trading App</h3>
    <h4>Your Funds : {{ funds | currency }}</h4>
  </div>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>