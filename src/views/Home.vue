<template>
  <div class="home">
    <div class="home_header">코딩 첨삭</div>
    <div class="home_header2">개발자, 물어보기 전에 검색해!</div>
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
        frameworkName: 'JS',
        photo: 'JavaScript-logo.png',
        questionListCount: 20,
      },
      {
        id: 2,
        frameworkName: 'Python',
        photo: 'Python-logo.png',
        questionListCount: 150,
      },
      {
        id: 4,
        frameworkName: 'Swift',
        photo: 'Swift-logo.png',
        questionListCount: 2000,
      },
      {
        id: 5,
        frameworkName: 'Vue',
        photo: 'Vue-logo.png',
        questionListCount: 32210,
      },
      {
        id: 6,
        frameworkName: 'Android',
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
  margin-bottom: 1rem;
  font-size: 4.5rem;
  color: rgb(68, 68, 68);
  font-family: 'Black Han Sans', sans-serif;
  text-shadow: 3px 2px 2px #9d9d9d;
}
.home_header2 {
  margin-bottom: 5rem;
  font-size: 2rem;
  font-family: 'Black Han Sans', sans-serif;
  color: rgb(68, 68, 68);
  text-shadow: 3px 2px 2px #9d9d9d;
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
  border-radius: 2rem;
  line-height: 20rem;
  background-color: rgb(68, 68, 68);
  text-shadow: 1px 1px 1px black;
  font-family: 'Black Han Sans', sans-serif;
}
</style>
