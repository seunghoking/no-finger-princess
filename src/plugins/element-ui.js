import Vue from 'vue'

import {
  Input,
  Select,
  Switch,
  Option,
  Pagination,
  Table,
  TableColumn,
  Row,
  Col,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  DatePicker,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Divider,
  Link,
  Tooltip,
  Menu,
  Button,
  Tag,
  Popover,
  Form,
  FormItem,
} from 'element-ui'

import '@/scss/element-variables.scss'
import lang from 'element-ui/lib/locale/lang/ko'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)

// import components
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Option)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(DatePicker)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Divider)
Vue.use(Link)
Vue.use(Tooltip)
Vue.use(Menu)
Vue.use(Button)
Vue.use(Tag)
Vue.use(Popover)
Vue.use(Form)
Vue.use(FormItem)
