<template>
  <div class="footer">
    <span class="text1">나 홀로 만들어본 스택오버플로우</span>
    <br />
    <span class="text2">By Seunghoking</span>
    <p class="text3">No, Finger Princess</p>
    <img class="velog-logo" @click="velogClick()" src="@/assets/img/Velog-logo.png" />
    <img class="github-logo" @click="githubClick()" src="@/assets/img/Github-logo.png" />
  </div>
</template>

<script>
export default {
  methods: {
    velogClick() {
      window.location.href = 'https://velog.io/@seunghoking'
    },
    githubClick() {
      window.location.href = 'https://github.com/seunghoking'
    },
  },
}
</script>

<style lang="scss">
.footer {
  height: 27rem;
  background-color: #242729;
  color: #fff;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  padding: 5rem;
}
.text1 {
  color: #bbc0c4;
  font-weight: bold;
  font-size : 2.5rem;
  font-family: 'Yeon Sung', cursive;
}
.text2 {
  color: #6a737c;
  font-weight: bold;
  font-family: 'Yeon Sung', cursive;
}
.text3 {
  font-weight: bold;
  font-family: 'Yeon Sung', cursive;
}
.velog-logo,
.github-logo {
  width: 4rem;
  height: auto;
  border-radius: 4rem;
  background-image: transparent;
  margin-right: 2rem;
  cursor: pointer;
}
</style>