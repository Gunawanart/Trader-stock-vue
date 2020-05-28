<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import header from "./components/header.vue";
export default {
  components: {
    appHeader: header
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>
<style scoped>
body {
  padding: 30px;
}
.fade-enter-active {
  animation: fadeIn 200ms ease-out forwards;
}
.fade-leave-active {
  animation: fadeOut 200ms ease-out forwards;
}

@keyframes fadeIn {
  from {
    /* transform: translateY(-30px); */
    opacity: 0;
  }
  to {
    /* transform: translateY(0); */
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    /* transform: translateY(0); */
    opacity: 1;
  }
  to {
    /* transform: translateY(-30px); */
    opacity: 0;
  }
}
</style>
