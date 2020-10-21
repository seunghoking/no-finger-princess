<template>
  <div class="log-card">
    <div
      class="log-card--result"
      :class="{ fail: result != 'SUCCESS', success: result === 'SUCCESS' }"
    >
      {{ result }}
    </div>
    <div v-if="comment_count || comment_count === 0" class="log-card--info">
      댓글 개수: {{ comment_count }}
    </div>
    <div v-if="error_msg" class="log-card--info">{{ error_msg }}</div>
  </div>
</template>
<script>
//TODO: fail card의 경우 detail이 없어 서버 작업이 추가로 필요함

export default {
  props: {
    result: {
      type: String,
      required: true,
    },
    error_msg: {
      required: true,
    },
    comment_count: {
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.log-card {
  width: 100%;
  padding: 1rem 2rem;
  background-color: #f4f4f4;
  font-weight: bold;
  border-radius: 5px;
  &--result {
    margin-bottom: 1rem;
  }
}
.fail {
  color: #fc5a57;
}
.success {
  color: rgb(90, 252, 87);
}
</style>
