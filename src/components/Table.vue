<template>
  <ul class="q_list_ul">
    <div class="q_list_header">
      <span class="q_list_header__span">Questions</span>
      <router-link :to="{name:'Ask'}">
        <el-button type="primary" class="q_list_header__btn">Ask Question</el-button>
      </router-link>
    </div>
    <li class="q_list_li" v-for="list in listData" :key="list.id">
      <div class="q_list_li__inner">
        <div class="flex_class">
          <div
            class="q_list_li__inner__answer"
            :class="[{border_green : (list.answer_count > 0 && !list.selection)}, {bg_green : (list.answer_count > 0 && list.selection)}]"
          >
            <span class="innerNum">{{list.answer_count}}</span>
            <br />
            <span class="innerText">answer</span>
          </div>
          <div class="q_list_li__inner__view">
            <span class="innerNum">{{list.view_count}}</span>
            <br />
            <span class="innerText">views</span>
          </div>
        </div>
        <div class="q_list_li__inner__title">{{list.title}}</div>
        <div class="q_list_li__inner__tag">
          <el-tag>{{list.tag}}</el-tag>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['isSeachAll'],
  data() {
    return {
      listData: null,
    }
  },
  created() {
    this.listData = [
      {
        id: 1,
        title: 'How to print a map without the trailing comma?',
        tag: 'javascript',
        answer_count: 2,
        view_count: 12,
        selection: false,
      },
      {
        id: 2,
        title:
          'VueJS How to trigger a method by selecting different radio buttons?',
        tag: 'python',
        answer_count: 0,
        view_count: 12,
        selection: false,
      },
      {
        id: 3,
        title:
          'How can I create a hierarchy structure for a array/object data in nodejs?',
        tag: 'javascript',
        answer_count: 14,
        view_count: 12,
        selection: true,
      },
      {
        id: 4,
        title:
          'How to resolve ANR problem occured in SensorEventListener operating separete thread?',
        tag: 'python',
        answer_count: 100,
        view_count: 10002,
        selection: false,
      },
      {
        id: 5,
        title:
          'Swiper - Slides status not updating correctly with mousewheel/freeMode/slidesperview:auto',
        tag: 'javascript',
        answer_count: 0,
        view_count: 1212110,
        selection: false,
      },
      {
        id: 6,
        title: 'Python 잘 모르겠다',
        tag: 'python',
        answer_count: 20000,
        view_count: 0,
        selection: false,
      },
    ]
  },
}
</script>
<style lang="scss" scoped>
.q_list {
  &_header {
    margin-top: 3rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    &__span {
      font-size: 3rem;
      margin-left: 3rem;
      font-weight: bold;
    }
    &__btn {
      margin-right: 2rem;
    }
  }
  &_ul {
    float: right;
    height: 100rem;
    overflow: auto;
  }
  &_li {
    height: 10.5rem;
    border-bottom: 2px solid #eff0ef;
    padding: 2rem;
    &__inner {
      display: flex;
      &__answer {
        width: 9rem;
        height: 7rem;
        margin-right: 1rem;
        color: #848d95;
        text-align: center;
        padding: 1rem;
      }
      &__view {
        width: 9rem;
        height: 8rem;
        margin-right: 2rem;
        color: #848d95;
        text-align: center;
        padding: 1rem;
      }
      &__title {
        width: 90%;
        padding: 1rem;
        font-size: 1.8rem;
        color: #0064bd;
      }
      &__tag {
        width: 10%;
        padding: 1rem;
      }
    }
  }
}
.innerNum {
  font-size: 1.8rem;
  font-weight: bold;
  position: relative;
  top: 0.5rem;
}
.innerText {
  font-size: 1.4rem;
  position: relative;
  top: 1.4rem;
}
.border_green {
  border: 1px solid #48a868;
  border-radius: 0.3rem;
  color: #48a868;
}
.bg_green {
  color: #fff;
  background-color: #48a868;
  border-radius: 0.3rem;
}
.flex_class {
  display: flex;
  align-items: baseline;
}
@media (max-width: 640px) {
  .q_list_li__inner {
    display: block;
    &__answer {
      border: none;
      padding: 0;
      margin: 0;
      width: 6rem;
      height: 5rem;
    }
    &__view {
      padding: 0;
      width: 5rem;
      margin: 0;
    }
    &__tag {
      position: sticky;
      position: -webkit-sticky;
      bottom: -2.4rem;
    }
  }
  .q_list_li {
    height: 18rem;
    overflow: hidden;
  }
  .flex_class {
    height: 4.5rem;
  }
  .innerText {
    top: 0.7rem;
  }
}
</style>