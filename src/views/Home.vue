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
          <div
            class="thefront"
            :style="{'background-image': 'url(' + require(`../assets/img/${item.photo}`) + ')'}"
          ></div>
          <div
            class="theback"
            :style="{'background-image': 'url(' + require(`../assets/img/${item.photo}`) + ')'}"
          >
            질문 갯수
            <br />
            {{item.questionListCount}}
          </div>
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
      {
        id: 1,
        frameworkName: 'Javascript',
        photo: 'JavaScript-logo.png',
        questionListCount: 20,
      },
      {
        id: 2,
        frameworkName: 'python',
        photo: 'Python-logo.png',
        questionListCount: 150,
      },
      // {
      //   id: 3,
      //   frameworkName: 'spring',
      //   photo: 'Spring-logo.png',
      //   questionListCount: 2,
      // },
      {
        id: 4,
        frameworkName: 'swift',
        photo: 'Swift-logo.png',
        questionListCount: 2000,
      },
      {
        id: 5,
        frameworkName: 'vue',
        photo: 'Vue-logo.png',
        questionListCount: 32210,
      },
      {
        id: 6,
        frameworkName: 'android',
        photo: 'Android-logo.png',
        questionListCount: 2130,
      },
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
  font-size: 3.5rem;
  font-weight: bold;
  color: rgb(68, 68, 68);
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
  color: #333;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 2rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.theback {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: #fff;
  transform: rotateY(180deg);
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 2rem;
  line-height: 20rem;
  background-color: rgb(68, 68, 68);
}
</style>
