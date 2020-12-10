<template>
  <div>
    <Sidebar :isSidebarLarge.sync="isSidebarLarge"></Sidebar>
    <ul class="q_list_ul">
      <p class="q_list_header">All Questions</p>
      <li class="q_list_li" v-for="list in listData" :key="list.id">
        <div class="q_list_li__inner">
          <div class="q_list_li__inner__answer" :class="{border_green : (list.answer_count > 0)}">
            <span class="innerNum">{{list.answer_count}}</span>
            <br />
            <span class="innerText">answer</span>
          </div>
          <div class="q_list_li__inner__view">
            <span class="innerNum">{{list.view_count}}</span>
            <br />
            <span class="innerText">views</span>
          </div>
          <div class="q_list_li__inner__title">{{list.title}}</div>
          <div class="q_list_li__inner__tag">
            <el-tag>{{list.tag}}</el-tag>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: {
    Sidebar,
  },

  data() {
    return {
      listData: null,
      isSidebarLarge: true,
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
      },
      {
        id: 2,
        title:
          'VueJS How to trigger a method by selecting different radio buttons?',
        tag: 'python',
        answer_count: 0,
        view_count: 12,
      },
      {
        id: 3,
        title:
          'How can I create a hierarchy structure for a array/object data in nodejs?',
        tag: 'javascript',
        answer_count: 14,
        view_count: 12,
      },
      {
        id: 4,
        title:
          'How to resolve ANR problem occured in SensorEventListener operating separete thread?',
        tag: 'python',
        answer_count: 100,
        view_count: 10002,
      },
      {
        id: 5,
        title:
          'Swiper - Slides status not updating correctly with mousewheel/freeMode/slidesperview:auto',
        tag: 'javascript',
        answer_count: 0,
        view_count: 1212110,
      },
      {
        id: 6,
        title: 'Python 잘 모르겠다',
        tag: 'python',
        answer_count: 20000,
        view_count: 0,
      },
    ]
  },

  watch: {
    isSidebarLarge: function(val) {
      const listEle = document.getElementsByClassName('q_list_ul')[0]
      if (val) {
        listEle.style.width = 'calc(100% - 180px)'
      } else {
        listEle.style.width = 'calc(100% - 50px)'
      }
    },
  },

  mounted() {
    this.$nextTick(function() {
      const listEle = document.getElementsByClassName('q_list_ul')[0]
      if (this.isSidebarLarge) {
        listEle.style.width = 'calc(100% - 180px)'
      } else {
        listEle.style.width = 'calc(100% - 50px)'
      }
    })
  },
}
</script>
<style lang="scss" scoped>
.q_list {
  &_header {
    font-size: 3rem;
    margin-left: 3rem;
    font-weight: bold;
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
        width: 80%;
        padding: 1rem;
        font-size: 1.8rem;
        color: #0064bd;
      }
      &__tag {
        width: 20%;
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
</style>
