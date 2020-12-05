export default {
  namespaced: true,
  state: {
    logDataset: [],
    totalDataSize: 0,
    logDetaillDataset: [],
    keywords: [],
    is_only_fail_content_result: true,
    selectedColumnId: null,
  },
  mutations: {
    setSelectedColumnId(state, payload) {
      state.selectedColumnId = payload
    },
    changeIsOnlyFailContentResultStatus(state, payload) {
      state.is_only_fail_content_result = payload
    },
    resetTableInfo(state) {
      state.logDataset = []
      state.totalDataSize = 0
      state.logDetaillDataset = []
    },
    setLogDataset(state, payload) {
      state.totalDataSize = payload.totalDataSize
      state.logDataset = payload.dataset.map(data => {
        const output_attribute = {
          success: 0,
          fail: 0,
        }
        const output = {
          _id: data._id,
          channel: data.channel,
          keywords: data.total_keywords,
          exec_time: data.exec_time,
          end_time: data.end_time,
          init_result: data.init_result,
          ip: data.ip,
          child: data.result_list.map((val, idx) => {
            let valSuccess = val.result_detail.success_count
            let valFail = val.result_detail.fail_count
            output_attribute.success += valSuccess ? valSuccess : 0
            output_attribute.fail += valFail ? valFail : 0
            return {
              _id: data._id + idx,
              keywords: val.keyword,
              search_result:
                typeof val.result_detail === 'object'
                  ? val.search_result
                  : val.result_detail,
              //x의 경우 result_detail에 결과없음이 들어온 경우
              success: valSuccess ? valSuccess : 'x',
              fail: valFail ? valFail : 'x',
            }
          }),
        }
        return Object.assign(output, output_attribute)
      })
    },
    setLogDetaillDataset(state, payload) {
      state.logDetaillDataset = payload
    },
    setKeywords(state, payload) {
      state.keywords = payload.map(data => {
        return { text: data, value: data }
      })
    },
  },
  actions: {
    async getLogDataset({ commit }, params) {
      const data = await this.$axios('post', 'log', params)
      commit('setLogDetaillDataset', [])
      commit('setLogDataset', data)
    },
    async getLogDetailDataset({ commit }, params) {
      const data = await this.$axios('post', 'log/detail', params)
      commit('setLogDetaillDataset', data)
    },
    async getKeywords({ commit }) {
      const data = await this.$axios('get', 'log/keyword')
      commit('setKeywords', data)
    },
  },
  getters: {},
}
