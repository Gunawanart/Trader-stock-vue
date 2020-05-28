<template>
  <div>
    <h1>Portfolio</h1>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import stocks from "./stock.vue";
export default {
  computed: {
    ...mapGetters({ stocks: "stockPortfolio" })
  },
  components: {
    appStock: stocks
  }
};
</script>
