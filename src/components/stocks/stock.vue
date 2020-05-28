<template>
  <div style="margin-bottom:20px;">
    <div class="card">
      <div class="card-header text-success">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(Price : {{ stock.price }})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" placeholder="Quantity" class="form-control" v-model="quantity" />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
          >BUY</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockQuantity: this.quantity,
        stockPrice: this.stock.price
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>