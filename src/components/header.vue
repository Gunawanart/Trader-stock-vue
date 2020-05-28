<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      <a>Stock Trader</a>
    </router-link>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <router-link to="/portofolio" tag="li" active-class="active" class="nav-item">
          <a class="nav-link">Portofolio</a>
        </router-link>
        <router-link to="/stocks" tag="li" active-class="active" class="nav-item">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <ul class="navbar-nav mr-auto ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a href="#" class="dropdown-item" @click="saveData">Save Data</a>
            </li>
            <li>
              <a href="#" class="dropdown-item" @click="loadData">Load data</a>
            </li>
          </div>
        </li>
        <li
          @click="endDay"
          class="nav-item"
          style="margin : 0 20px 0 20px; cursor : pointer"
        >End Day</li>
        <li class="nav-item">Funds : {{ funds | currency}}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({ randomStock: "randomStock", fetchData: "getData" }),
    endDay() {
      this.randomStock();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>



