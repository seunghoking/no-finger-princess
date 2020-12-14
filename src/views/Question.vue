<template>
  <div>
    <Sidebar :isSidebarLarge.sync="isSidebarLarge"></Sidebar>
    <Table></Table>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
import Table from '@/components/Table.vue'
export default {
  components: {
    Sidebar,
    Table,
  },

  data() {
    return {
      isSidebarLarge: true,
    }
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
@media (max-width: 640px) {
  .container {
    display: none;
  }
  .q_list_ul {
    width: 100% !important;
  }
}
</style>
