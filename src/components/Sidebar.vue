<template>
  <div class="container" :class="{'show': showSidebar}">
    <div class="control">
      <i class="fas fa-angle-double-right" @click="showNav"></i>
    </div>
    <div class="navigation-icons">
      <router-link :to="{name : 'Home'}">
        <i class="fas fa-home"></i>
      </router-link>
      <router-link :to="`/question/all`">
        <i class="fas fa-archive"></i>
      </router-link>
      <div v-for="item in frameworkData" :key="item.id">
        <router-link :to="`/question/${item.id}`">
          <i :class="item.icon"></i>
        </router-link>
      </div>
    </div>
    <div class="navigation-links">
      <transition-group name="fade">
        <div v-show="showLink" key="0">
          <router-link :to="{name : 'Home'}">Home</router-link>
        </div>
        <div v-show="showLink" key="100">
          <router-link :to="`/question/all`">All</router-link>
        </div>
        <div v-for="item in frameworkData" v-show="showLink" :key="item.id">
          <router-link :to="`/question/${item.id}`" active-class="active">{{item.frameworkName}}</router-link>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isSidebarLarge'],
  data: () => {
    return {
      showSidebar: true,
      showLink: true,
      frameworkData: null,
    }
  },
  created() {
    this.frameworkData = this.$store.state.frameworkData
  },
  methods: {
    showNav() {
      if (this.showSidebar) {
        this.showLink = false
        setTimeout(() => {
          this.$emit('update:isSidebarLarge', false)
          this.showSidebar = false
        }, 500)
      } else {
        this.showSidebar = true
        setTimeout(() => {
          this.$emit('update:isSidebarLarge', true)
          this.showLink = true
        }, 500)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  margin-top: 7rem;
  top: 0;
  left: 0;
  width: 5rem;
  padding: 1rem;
  height: 100rem;
  background-color: rgba($color: #808080, $alpha: 0.3);
  border: solid #fff;
  border-width: 0 1px 0 0;
  z-index: 999;
  transition: all 0.5s ease-in-out;
  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin-bottom: 1rem;
    i {
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
    }
  }
  &.show {
    width: 180px;
    .control > i {
      color: #fff;
      transform: rotateZ(-180deg);
    }
    .navigation-icons {
      color: #fff;
    }
  }
  .navigation-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(68, 68, 68);
    flex-direction: column;
    width: 5rem;
    float: left;
    i {
      font-size: 2rem;
      padding: 1rem 0;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      &:hover {
        color: #0064bd;
      }
    }
  }
  .navigation-links {
    padding-top: 14px;
    float: left;
    div {
      font-size: 1.35rem;
      font-family: 'Black Han Sans', sans-serif;
      color: rgb(68, 68, 68);
      padding-left: 1rem;
      margin-bottom: 2.35rem;
      cursor: pointer;
      &:hover {
        color: #0064bd;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.router-link-exact-active {
  color: #0064bd;
}
</style>