<template>
  <div class="home">
    <div class="home_header">개발자, 물어보기 전에 검색해!</div>
    <div class="container">
      <div
        class="frameWorkItem"
        v-for="item in frameworkData"
        :key="item.id"
        @click="routerDetail(item.id)"
      >
        <div class="thecard">
          <div class="thefront">{{item.id}}</div>
          <div class="theback">{{item.frameworkName}}</div>
        </div>
      </div>
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

  methods: {
    routerDetail(id) {
      this.$router.push({ name: 'Question', params: { id: id } })
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  margin: 5rem;
}
.home_header {
  margin-bottom: 5rem;
  font-size: 3rem;
  font-weight: bold;
}
.container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.5rem;
  margin-right: 5px;
}
.frameWorkItem {
  width: 26rem;
  height: 33rem;
  margin-bottom: 7rem;
  margin-left: 2rem;
  margin-right: 5rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  border-radius: 2rem;
  background-color: transparent;
}
.thecard {
  position: absolute;
  width: 26rem;
  height: 33rem;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  cursor: pointer;
  &:hover {
    transform: rotateY(180deg);
  }
}
.thefront {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #ffc728;
  color: #333;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 2rem;
}
.theback {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #5fcf80;
  color: #fff;
  transform: rotateY(180deg);
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 2rem;
}
</style>
