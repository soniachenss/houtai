// 组件全局注册
import Vue from 'vue'

import HasPermission from './hasPermission'
import PageNotes from './pageNotes'
import PageTitle from './pageTitle'
import PageToolbar from './PageToolbar'
import PageSection from './PageSection'
import PageTable from './PageTable'
import PageSearch from './PageSearch'

// 形成组件库
const components = [
    HasPermission,
    PageNotes,
    PageTitle,
    PageSection,
    PageTable,
    PageToolbar,
    PageSearch
]

// 注册全局组件
components.map((com) =>{
    Vue.use(com)
    // Vue.component(com.name, com)
})

export default components