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

.container {
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1230px;
  /* width: 100%; */
}

.title {
  margin: 10px 0 30px;
  /* font-family: sans-serif; */
  letter-spacing: 1px;
  font-size: 25px;
}
</style>