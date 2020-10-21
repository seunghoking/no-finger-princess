<template>
  <div id="app">
    <nav class="navigation">
      <Logo class="logo" />

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
      <router-link
        class="navigation--list"
        :class="{
          'navigation--list--selected': $route.path === '/',
        }"
        :to="{ name: 'Home' }"
      >
        이용방법
      </router-link>
    </nav>
    <router-view class="app-router" />
  </div>
</template>
<script>
import Logo from '@/assets/img/logo.svg'

export default {
  components: {
    Logo,
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
.logo {
  height: 2rem;
  fill: #ffffff;
  margin-left: 1rem;
  margin-right: 3rem;
}
.navigation {
  background-color: #2f67f6;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 6rem;
  font-size: 2rem;
  &--list {
    color: #ffffff;
    &:not(:last-child) {
      margin-right: 5rem;
    }
    &--selected {
      &::after {
        display: block;
        content: '';
        margin-top: 5px;
        border: 2px solid white;
      }
    }
  }
}
</style>
