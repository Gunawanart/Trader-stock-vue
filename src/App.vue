<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import header from "./components/header.vue";
export default {
  components: {
    appHeader: header
  }
};
</script>

<style>
</style>
