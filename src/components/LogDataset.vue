<template>
  <div class="log-table">
    <div class="log-table--table-controller">
      <el-select v-model="pageSize">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-date-picker
        v-model="pickedDate"
        type="datetimerange"
        start-placeholder="Start date and time"
        end-placeholder="End date and time"
        :default-time="['00:00:00', '11:59:59']"
        :picker-options="pickerOptions"
      />

      <button class="log-table--filter-sort-reset-button" @click="resetFilter">
        <i class="material-icons margin-1-right">
          refresh
        </i>
        필터 초기화
      </button>
    </div>
    <el-table
      ref="filterTable"
      class="log-table--table"
      style="maxWidth: 200rem"
      :data="logDataset"
      row-key="_id"
      lazy
      :tree-props="{ children: 'child', hasChildren: 'hasChildren' }"
      height="calc(100vh - 30rem)"
      @row-click="changeCurrentRow"
      highlight-current-row
      @sort-change="setSort"
      @filter-change="setFilter"
      border
      :row-style="{ height: '6rem' }"
    >
      <el-table-column
        ref="keywordColumn"
        prop="keywords"
        label="키워드"
        header-align="center"
        min-width="100"
        :filters="keywords"
        column-key="keywords"
      />
      <el-table-column
        ref="channelColumn"
        prop="channel"
        label="채널"
        align="center"
        width="130"
        :filters="channelFilters"
        column-key="channel"
      />
      <el-table-column prop="ip" label="ip" align="center" width="150" />
      <el-table-column label="결과 값" header-align="center">
        <el-table-column
          ref="resultColumn"
          prop="init_result"
          label="init_result"
          header-align="center"
          min-width="90"
          column-key="init_result"
          :filters="resultFilters"
        />
        <el-table-column
          ref="resultColumn"
          prop="search_result"
          label="search_result"
          header-align="center"
          min-width="90"
          column-key="search_result"
          :filters="resultFilters"
        />
      </el-table-column>
      <el-table-column prop="success" label="성공" align="center" width="90" />
      <el-table-column prop="fail" label="실패" align="center" width="90" />
      <el-table-column
        prop="exec_time"
        label="실행시간"
        sortable="custom"
        header-align="center"
        min-width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.exec_time | dateFilter }}
        </template>
      </el-table-column>
      <el-table-column
        prop="end_time"
        label="종료시간"
        sortable="custom"
        header-align="center"
        min-width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.end_time | dateFilter }}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="log-table--pagination margin-1-top"
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      @current-change="changeCurrentPage"
      :current-page="currentPage"
      :total="totalDataSize"
    >
    </el-pagination>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('log', [
      'logDataset',
      'totalDataSize',
      'keywords',
      'is_only_fail_content_result',
    ]),
  },
  watch: {
    pickedDate() {
      this.fetchTableData()
    },
    pageSize() {
      //페이지 초기화
      this.changeCurrentPage(1)
    },
    selectedSrotRule() {
      //페이지 초기화
      this.changeCurrentPage(1)
    },
    selectedFilter() {
      //페이지 초기화
      this.changeCurrentPage(1)
    },
  },
  data() {
    return {
      options: [
        {
          value: 10,
          label: 10,
        },
        {
          value: 20,
          label: 20,
        },
        {
          value: 30,
          label: 30,
        },
        {
          value: 40,
          label: 40,
        },
        {
          value: 50,
          label: 50,
        },
      ],
      pageSize: 30,
      currentPage: 1,
      pickedDate: null,
      channelFilters: [
        { text: 'instagram', value: 'instagram' },
        { text: 'youtube', value: 'youtube' },
        { text: 'naver-blog', value: 'naver-blog' },
        { text: 'naver-cafe', value: 'naver-cafe' },
        { text: 'naver-news', value: 'naver-news' },
        { text: 'twitter', value: 'twitter' },
        { text: 'dcinside-gall', value: 'dcinside-gall' },
        { text: 'todayhumor', value: 'todayhumor' },
        { text: 'bobaedream', value: 'bobaedream' },
        { text: 'humoruniv', value: 'humoruniv' },
        { text: 'ppomppu', value: 'ppomppu' },
      ],
      resultFilters: [
        { text: 'SUCCESS', value: 'SUCCESS' },
        { text: 'FAIL', value: 'FAIL' },
      ],
      allSelectedFilter: {},
      selectedSrotRule: { end_time: 1 },
      selectedFilter: {},
      pickerOptions: {
        shortcuts: [
          {
            text: 'Yesterday',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: 'A week ago',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            },
          },
        ],
      },
    }
  },
  methods: {
    ...mapMutations('log', ['setSelectedColumnId']),
    ...mapActions('log', ['getLogDataset', 'getKeywords']),
    fetchTableData() {
      this.getLogDataset({
        currentPage: this.currentPage - 1,
        pageSize: this.pageSize,
        startAt: this.pickedDate[0].toISOString(),
        endAt: this.pickedDate[1].toISOString(),
        keywords: this.setSelectedFilterBeforeFetch('keywords'),
        channel: this.setSelectedFilterBeforeFetch('channel'),
        init_result: this.setSelectedFilterBeforeFetch('init_result'),
        search_result: this.setSelectedFilterBeforeFetch('search_result'),
        content_result: this.is_only_fail_content_result
          ? ['SUCCESS', 'FAIL']
          : ['FAIL'],
        sort: this.selectedSrotRule,
      })
    },
    setSelectedFilterBeforeFetch(data) {
      if (this.selectedFilter[data] && this.selectedFilter[data].length != 0)
        return this.selectedFilter[data]
      else return this.allSelectedFilter[data]
    },
    changeCurrentPage(newVal) {
      this.currentPage = newVal
      if (this.pickedDate != null) this.fetchTableData()
    },
    changeCurrentRow(row) {
      if (row.child) return
      this.setSelectedColumnId(row._id)
    },
    setFilter({ channel, init_result, search_result, keywords }) {
      this.selectedFilter = Object.assign(
        {},
        this.selectedFilter,
        channel ? { channel } : {},
        init_result ? { init_result } : {},
        search_result ? { search_result } : {},
        keywords ? { keywords } : {},
      )
    },
    setSort({ prop, order }) {
      if (!order) {
        this.selectedSrotRule = { end_time: 1 }
      } else {
        const direction = order === 'ascending' ? 1 : -1
        this.selectedSrotRule =
          prop === 'exec_time'
            ? { exec_time: direction }
            : { end_time: direction }
      }
    },
    resetFilter() {
      //filter와 sort 값을 초기화 시켜주는 함수입니다.
      this.$refs.filterTable.clearSort()
      this.$refs.filterTable.clearFilter()
      this.selectedFilter = {}
    },
  },
  async created() {
    await this.getKeywords()
    this.allSelectedFilter.keywords = this.keywords.map(data => data.value)
    this.allSelectedFilter.channel = this.channelFilters.map(data => data.value)
    this.allSelectedFilter.init_result = this.resultFilters.map(
      data => data.value,
    )
    this.allSelectedFilter.search_result = this.resultFilters.map(
      data => data.value,
    )
  },
}
</script>
<style lang="scss" scoped>
.log-table {
  &--table-controller {
    display: flex;
    justify-content: space-between;
    max-width: 200rem;
    margin: 2rem auto;
  }
  &--filter-sort-reset-button {
    background-color: #e1e1e1;
    border: none;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 0.7rem 1.6rem;
    &:hover {
      cursor: pointer;
      background-color: rgb(220, 220, 220);
    }
  }
  &--table {
    margin: 0 auto;
  }
  &--pagination {
    text-align: center;
  }
}
</style>
