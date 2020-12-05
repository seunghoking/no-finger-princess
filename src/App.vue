<template>
  <div id="app">
    <nav class="navigation">
      <router-link :to="{ name: 'Home' }">
        <Logo class="logo" />
      </router-link>

      <div>
        <router-link class="navigation--list" :to="{ name: 'Admin' }">관리</router-link>
        <router-link class="navigation--list" :to="{ name: 'Log' }">Ask Question</router-link>
        <router-link class="navigation--list" :to="{ name: 'Home' }">Sign in</router-link>
      </div>
    </nav>
    <router-view class="app-router" />
  </div>
</template>
<script>
import Logo from '@/assets/img/logo3.svg'

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
  width: 20rem;
  height: 20rem;
  margin-left: 1rem;
  margin-right: 3rem;
  margin-top: 1.5rem;
}
.navigation {
  border-bottom: 1px solid #e2e2e2;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 7rem;
  font-size: 1.6rem;
  justify-content: space-between;
  &--list {
    margin-right: 5rem;
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
