<template>
  <div style="margin-bottom:20px;">
    <div class="card">
      <div class="card-header text-success">
        <h3 class="card-title">
          {{ stock.name }}
          <small>Price : {{ stock.price }} | Quantity : {{ stock.quantity }}</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" placeholder="Quantity" class="form-control" v-model="quantity" />
        </div>
        <div class="float-right">
          <button
            :class="{danger : sellCheck}"
            class="btn btn-success"
            @click="sellStockFunc"
            :disabled="quantity <= 0 || !Number.isInteger(+quantity) || sellCheck"
          >{{ sellCheck ? 'Not Enough Quanity' : 'SELL' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions(["sellStock"]),
    sellStockFunc() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity
      };
      this.sellStock(order);
      this.quantity = 0;
    }
  },
  computed: {
    sellCheck() {
      if (this.quantity <= this.stock.quantity) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.danger {
  background-color: red;
}
</style>