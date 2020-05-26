<template>
  <div>
    <h1>Stocks</h1>
    <div class="card-deck">
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
  </div>
</template>
<script>
import stock from "./stock.vue";
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 100 },
        { id: 2, name: "Google", price: 200 },
        { id: 3, name: "Apple", price: 250 },
        { id: 3, name: "Apple", price: 250 },
        { id: 3, name: "Apple", price: 250 },
        { id: 3, name: "Apple", price: 250 },
        { id: 3, name: "Apple", price: 250 }
      ]
    };
  },
  components: {
    appStock: stock
  }
};
</script>