<template>
  <div class="container">
    <div class="input_container">
      <br />
      <br />
      <el-form :label-position="labelPosition" :model="formLabelAlign">
        <el-form-item label="temp">
          <span slot="label" class="form_label">Title</span>
          <input class="form_title" type="text" id="Title" v-model="formLabelAlign.title" />
        </el-form-item>
        <el-form-item label="temp">
          <span slot="label" class="form_label">Body</span>
          <template>
            <vue-simplemde v-model="formLabelAlign.body" ref="markdownEditor" />
          </template>
        </el-form-item>
        <el-form-item class="form_tag" label="temp">
          <span slot="label" class="form_label">Tag</span>
          <select class="form_select" name="pets" id="pet-select">
            <option value>Select</option>
            <option
              v-for="item in frameworkData"
              :key="item.id"
              :label="item.frameworkName"
              :value="item.frameworkName"
            ></option>
          </select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button @click="onCancel">Cancel</el-button>
        </el-form-item>
      </el-form>
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
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    onCancel() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  width: 100%;
}
.input_container {
  display: flex;
  height: 100rem;
  margin: 1.5rem;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.06),
    0 3px 8px rgba(0, 0, 0, 0.09);
}
.input_title {
  width: 100%;
}
.el-input__inner {
  width: calc(100% - 2rem) !important;
}
.form_tag {
  margin-bottom: 10rem;
}
.form_title {
  width: calc(100% - 2rem);
  padding: 0.6em 0.7em;
  border: 1px solid #bbc0c4;
  border-radius: 0.3rem;
  font-size: 1.3rem;
  height: 4rem;
}
.form_select {
  width: calc(100% - 2rem);
  border: 1px solid #bbc0c4;
  border-radius: 0.3rem;
  font-size: 1.3rem;
  height: 4rem;
  padding: 0.6em 0.7em;
  color: #9d9d9d;
}
.vue-simplemde {
  position: relative;
}
.form_label {
  font-size: 3rem;
  font-weight: 500;
}

@media (max-width: 1440px) {
  .form_title,
  .form_select {
    width: calc(50% - 2rem);
  }
  .vue-simplemde {
    width: 50%;
    left: 25% !important;
  }
}
@media (max-width: 1056px) {
  .form_title,
  .form_select {
    width: calc(70% - 2rem);
  }
  .vue-simplemde {
    width: 70%;
    left: 15% !important;
  }
}
@media (max-width: 767px) {
  .form_title,
  .form_select {
    width: calc(90% - 2rem);
  }
  .vue-simplemde {
    width: 90%;
    left: 5% !important;
  }
}
@media (max-width: 475px) {
  .form_title,
  .form_select {
    width: calc(100% - 2rem);
  }
  .vue-simplemde {
    width: calc(100% - 2rem);
    left: 0 !important;
    margin: 1rem;
  }
}
</style>