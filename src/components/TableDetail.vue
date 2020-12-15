<template>
  <div class="question_container">
    <div class="question_header">
      <div class="question_header__title">{{question.title}}</div>
      <div class="question_header__info">{{question.createdAt}}</div>
      <el-divider></el-divider>
    </div>
    <div class="question_body">
      <div class="question_body__main" v-html="question.body"></div>
      <div class="info_icon">
        {{question.up}}
        <i class="far fa-thumbs-up"></i>
        {{question.down}}
        <i class="far fa-thumbs-down"></i>
      </div>
      <el-divider></el-divider>
    </div>
    <div class="answer__num">{{answerList.length}} Answer</div>
    <div class="answer" v-for="answer in answerList" :key="answer.id">
      <div class="answer__md" v-html="answer.answer"></div>
      <div class="info_icon">
        {{answer.up}}
        <i class="far fa-thumbs-up"></i>
        {{answer.down}}
        <i class="far fa-thumbs-down"></i>
      </div>
      <el-divider></el-divider>
    </div>
    <div class="question_comment">
      <div class="question_comment_main">
        <template>
          <div class="question_comment_title">Your Answer</div>
          <vue-simplemde v-model="comment_md" ref="markdownEditor" />
        </template>
        <el-button type="primary" @click="onSubmit">Post Your Answer</el-button>
        <el-button @click="onBack">Back</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
export default {
  components: {
    VueSimplemde,
  },
  data() {
    return {
      comment_md: '',
      answerList: [],
      question: {},
    }
  },
  created() {
    this.question = {
      title: 'Delete keychain items when an app is uninstalled',
      up: 123,
      down: 12,
      updatedAt: new Date(),
      createdAt: new Date(),
      body: '<h1>Question body</h1>',
    }
    this.answerList = [
      { answer: '<h1>Hello1</h1>', up: 1, down: 12, createdAt: new Date() },
      { answer: '<p>Hello2</p>', up: 0, down: 12300, createdAt: new Date() },
    ]
  },
  methods: {
    onSubmit() {
      console.log(123)
    },
    onBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
.question_container {
  margin: 2rem;
}
.question_header {
  /* height: 10rem; */
  &__title {
    margin-bottom: 1rem;
    font-size: 3rem;
  }
  &__info {
    font-size: 1.5rem;
  }
}
.question_body {
  &__main {
    margin-bottom: 1rem;
  }
}
.answer__num,
.question_comment_title {
  font-size: 3rem;
}
</style>