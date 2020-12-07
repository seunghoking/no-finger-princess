<template>
  <div id="app">
    <nav class="navigation">
      <router-link :to="{ name: 'Home' }">
        <Logo class="logo" />
      </router-link>

      <div>
        <router-link class="navigation--list" :to="{ name: 'Search' }">Ask Question</router-link>
        <div v-if="isSignIn" class="navigation--list signIn">
          <button @click="googleSignOut">logout</button>
        </div>
        <div v-else class="navigation--list signIn">
          <button :disabled="isApiLoaded" @click="googleSignIn">login</button>
        </div>
      </div>
    </nav>
    <router-view class="app-router" />
  </div>
</template>
<script>
import Logo from '@/assets/img/logo3.svg'
import axios from 'axios'

export default {
  components: {
    Logo,
  },

  data() {
    return {
      isSignIn: false,
      isApiLoaded: false,
      currentUser: null,
    }
  },

  mounted() {
    this.isApiLoaded = this.$gAuth.isInit
  },

  methods: {
    async googleSignIn() {
      try {
        const authCode = await this.$gAuth.getAuthCode()
        const response = await axios.post(
          'http://localhost:3355/auth/sign/login',
          { code: authCode, redirect_uri: 'postmessage' },
          { withCredentials: true },
        )
        this.isSignIn = true
        this.currentUser = response.data.data
        console.log(this.currentUser)
      } catch (error) {
        console.error(error)
      }
    },

    async googleSignOut() {
      const response = await this.$gAuth.signOut()
      this.isSignIn = false
      console.log(response)
    },
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
.signIn {
  display: inline;
}
</style>
