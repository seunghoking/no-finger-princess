<template>
  <nav class="navigation">
    <div class="logo_div">
      <el-dropdown class="dropdown" trigger="click">
        <span class="el-dropdown-link">
          <i class="fas fa-bars"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link :to="{name : 'Home'}">Home</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link :to="`/question/all`">All</router-link>
          </el-dropdown-item>
          <el-dropdown-item v-for="item in frameworkData" :key="item.id">
            <router-link :to="`/question/${item.id}`">{{item.frameworkName}}</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="far fa-hand-point-up logo"></i>
      <span class="logo_name">No, Finger Princess</span>
    </div>

    <div class="menu_div">
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
import axios from 'axios'

export default {
  data() {
    return {
      isSignIn: false,
      currentUser: null,
      inputText: '',
      frameworkData: null,
    }
  },

  watch: {
    inputText: function(val) {
      console.log(val)
    },
  },

  created() {
    this.frameworkData = this.$store.state.frameworkData
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
      const path = '/search'
      if (this.$route.path !== path) this.$router.push(path)
    },
  },
}
</script>

<style lang="scss">
.dropdown {
  display: none !important;
}
.menu_div {
  display: flex;
}
.logo_div {
  margin-left: 1rem;
  color: rgb(68, 68, 68);
}
.logo {
  font-size: 4rem;
  &_name {
    font-family: 'Black Han Sans', sans-serif;
    position: relative;
    top: -0.5rem;
    left: 1rem;
  }
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
.el-input {
  &__inner {
    width: 20rem !important;
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

@media screen and (max-width: 602px) {
  .navigation {
    height: 11rem;
    display: block;
  }
  .menu_div {
    position: relative;
    top: 2rem;
  }
  .el-input {
    margin-left: 2rem;
  }
  .logo_div {
    margin-top: 1rem;
  }
}
@media (max-width: 640px) {
  .dropdown {
    display: inline !important;
  }
  .el-dropdown-link {
    font-size: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .logo {
    font-size: 3rem;
  }
}
</style>
