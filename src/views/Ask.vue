<template>
  <div class="container">
    <div class="input_container">
      <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
        <el-form-item label="Title">
          <el-input v-model="formLabelAlign.title"></el-input>
        </el-form-item>
        <el-form-item label="Body">
          <template>
            <vue-simplemde v-model="formLabelAlign.body" ref="markdownEditor" />
          </template>
        </el-form-item>
        <el-form-item label="Tag">
          <el-select v-model="formLabelAlign.tag" placeholder="Select">
            <el-option
              v-for="item in frameworkData"
              :key="item.id"
              :label="item.frameworkName"
              :value="item.frameworkName"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
import _ from 'lodash'
export default {
  components: {
    VueSimplemde,
  },
  data() {
    return {
      frameworkData: null,
      formLabelAlign: {
        title: '',
        body: '',
        tag: '',
      },
      labelPosition: 'top',
    }
  },
  created() {
    this.frameworkData = this.$store.state.frameworkData
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.formLabelAlign.body, { sanitize: true })
    },
  },
  methods: {
    update: _.debounce(function(e) {
      this.formLabelAlign.body = e.target.value
    }, 300),
    onSubmit() {
      console.log('submit!')
    },
  },
}
</script>

<style lang="scss" scoped>
.input_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin: 1.5rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.06),
    0 3px 8px rgba(0, 0, 0, 0.09);
}
.input_title {
  margin-bottom: 3rem;
  width: 100%;
}
.el-input__inner {
  width: calc(100% - 2rem) !important;
}
</style>