<template>
  <div class="log">
    <div class="log--left-content">
      <LogDataset />
    </div>
    <div class="log--right-content">
      <div class="log--content-result-toggle margin-1-bottom">
        <label>에러값만 보기:</label>
        <el-switch
          v-model="toggleData"
          @change="changeIsOnlyFailContentResultStatus"
        />
      </div>
      <div
        class="log--right-content__empty"
        v-show="logDetaillDataset.length === 0"
      >
        <span>
          데이터 없음
        </span>
      </div>
      <LogCard
        class="margin-3-bottom"
        v-for="item in logDetaillDataset"
        :key="item.id"
        :result="item.content_result"
        :error_msg="item.error_msg ? item.error_msg : false"
        :comment_count="
          item.comment_count || item.comment_count === 0
            ? item.comment_count
            : false
        "
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex'

import LogDataset from '@/components/LogDataset.vue'
import LogCard from '@/components/LogCard.vue'

export default {
  components: {
    LogDataset,
    LogCard,
  },
  data() {
    return {
      selectedDataId: null,
      toggleData: true,
    }
  },
  watch: {
    selectedColumnId() {
      this.changeDetailDataset()
    },
    is_only_fail_content_result() {
      this.toggleData = this.is_only_fail_content_result
      if (this.selectedColumnId) this.changeDetailDataset()
    },
  },
  computed: {
    ...mapState('log', [
      'logDetaillDataset',
      'is_only_fail_content_result',
      'selectedColumnId',
    ]),
  },
  methods: {
    ...mapActions('log', ['getLogDetailDataset']),
    ...mapMutations('log', [
      'resetTableInfo',
      'changeIsOnlyFailContentResultStatus',
    ]),
    changeDetailDataset() {
      this.getLogDetailDataset({
        id: this.selectedColumnId.substring(
          0,
          this.selectedColumnId.length - 1,
        ),
        index: this.selectedColumnId.substring(
          this.selectedColumnId.length - 1,
        ),
        content_result: this.is_only_fail_content_result
          ? ['SUCCESS', 'FAIL']
          : ['FAIL'],
      })
    },
  },
  beforeDestroy() {
    this.resetTableInfo()
  },
}
</script>
<style lang="scss" scoped>
.log {
  display: flex;
  padding: 4rem;
  &--left-content {
    width: 90%;
  }
  &--right-content {
    background-color: #ffffff;
    padding: 1rem;
    width: 10%;
    margin-top: 8rem;
    height: calc(100vh - 30rem);
    overflow: auto;
    &__empty {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #909399;
    }
  }
  &--content-result-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }
}
</style>
