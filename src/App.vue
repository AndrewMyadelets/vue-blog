<template>
  <div class="page">
    <the-header></the-header>
    <main class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style>
.page {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
}

.main {
  padding: 50px 0;
}
</style>