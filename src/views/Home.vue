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
    this.frameworkData = this.$store.state.frameworkData
  },

  methods: {
    routerDetail(id) {
      this.$router.push({ name: 'Question', params: { id: id } })
    },
  },
}
</script>

<style lang="scss" scoped>
.home_header {
  margin: 4rem 0 0 3rem;
  font-size: 4.5rem;
  color: rgb(68, 68, 68);
  font-family: 'Black Han Sans', sans-serif;
  text-shadow: 3px 2px 2px #9d9d9d;
}
.home_header2 {
  margin: 1rem 0 3rem 3rem;
  font-size: 2rem;
  font-family: 'Black Han Sans', sans-serif;
  color: rgb(68, 68, 68);
  text-shadow: 3px 2px 2px #9d9d9d;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
.frameWorkItem {
  width: calc(25% - 2rem);
  height: 33rem;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  border-radius: 2rem;
  background-color: transparent;
}
.thecard {
  position: relative;
  width: 100%;
  height: 100%;
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
  background-size: 100rem;
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

@media (max-width: 1056px) {
  .frameWorkItem {
    width: calc(33% - 2rem);
  }
}
@media (max-width: 767px) {
  .frameWorkItem {
    width: calc(50% - 2rem);
  }
}
@media (max-width: 475px) {
  .frameWorkItem {
    width: 70%;
  }
  .container {
    justify-content: center;
  }
}
</style>
