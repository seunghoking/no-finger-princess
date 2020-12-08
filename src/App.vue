<template>
  <div id="app">
    <Header></Header>
    <router-view class="app-router" />
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-router {
  min-height: 1000px;
}
</style>
