<template>
  <div id="app">
    <router-link class="how-to-use" :to="{ name: 'Home' }">
      이용방법
    </router-link>
    <nav class="navigation">
      <router-link
        class="navigation--list"
        :class="{
          'navigation--list--selected': $route.path.startsWith('/admin'),
        }"
        :to="{ name: 'Admin' }"
      >
        관리
      </router-link>
      <router-link
        class="navigation--list"
        :class="{
          'navigation--list--selected': $route.path.startsWith('/log'),
        }"
        :to="{ name: 'Log' }"
      >
        로그
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.path)
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.how-to-use {
  position: fixed;
  top: 3rem;
  left: 3rem;
  font-weight: bold;
  font-size: 2rem;
}
.navigation {
  font-weight: bold;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  &--list {
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 5rem;
    }
    &--selected {
      color: $color-primary;
    }
  }
}
</style>
