<template>
  <div class="home">
    <div class="container">
      <div class="frameWorkItem" v-for="item in frameworkData" :key="item.id">{{item.frameworkName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      frameworkData: null,
    }
  },

  created() {
    this.frameworkData = [
      { id: 1, frameworkName: 'js' },
      { id: 2, frameworkName: 'python' },
      { id: 3, frameworkName: 'java' },
      { id: 4, frameworkName: 'c' },
      { id: 5, frameworkName: 'c' },
      { id: 6, frameworkName: 'c' },
      { id: 7, frameworkName: 'c' },
      { id: 8, frameworkName: 'c' },
      { id: 9, frameworkName: 'c' },
      { id: 10, frameworkName: 'c' },
      { id: 11, frameworkName: 'c' },
    ]
  },
}
</script>

<style lang="scss" scoped>
.home {
  margin: 5rem;
}
.container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 15rem;
  margin-right: 5px;
}
.frameWorkItem {
  width: 30rem;
  height: 35rem;
  background-color: red;
  margin-bottom: 7rem;
  margin-left: 1rem;
  margin-right: 5rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  border-radius: 4px;
}
</style>
