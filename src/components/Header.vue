<template>
  <nav class="navigation">
    <Logo class="logo" />

    <div>
      <el-input
        placeholder="Search"
        v-model="inputText"
        clearable
        @keyup.enter.native="searchQuestions"
      ></el-input>
      <div v-if="!isSignIn" class="navigation--list signIn">
        <img class="googleLogo" src="@/assets/img/google-logo.png" @click="googleSignIn" />
      </div>
      <div v-else class="navigation--list signIn">
        <el-dropdown trigger="click">
          <img class="googleLogo" v-bind:src="currentUser.picture" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="googleSignOut()">Sign out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </nav>
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
      // isApiLoaded: false,
      currentUser: null,
      inputText: '',
    }
  },

  watch: {
    inputText: function(val) {
      console.log(val)
    },
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

    searchQuestions(event) {
      console.log('search!!! : ', event)
      this.$router.push({ name: 'Search', query: { name: this.inputText } })
    },
  },
}
</script>

<style lang="scss">
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
  box-shadow: 10px 4px 2px #ececec;
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
        border: 2px solid #fff;
      }
    }
  }
}
.signIn {
  display: inline;
}
.el-input {
  display: inline !important;
  &__inner {
    width: 25rem !important;
    margin-right: 4rem !important;
  }
}
.googleLogo {
  width: 4rem;
  height: auto;
  border-radius: 4rem;
  vertical-align: middle;
  cursor: pointer;
}
</style>
