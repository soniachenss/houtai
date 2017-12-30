var data = [
    {
        path: '/home',
        name: '学生信息'
    },
    {
        name: '综合素质',
        child: [
            {
                name: '综合测评',
                child: [
                    {
                        path: '/components/permission',
                        name: ''
                    },
                    {
                        path: '/components/pageTable',
                        name: '表格分页'
                    }
                ]
            },
            {
                name: '布局类',
                child: [
                    {
                        path: '/components/pageTitle',
                        name: '页面标题'
                    },
                    {
                        name: '测试类1',
                        child: [
                            {
                                path: '/components/pageSection',
                                name: '子区域'
                            }
                        ]
                    },
                    {
                        path: '/components/pageSearch',
                        name: '搜索条'
                    },
                    {
                        name: '测试类2',
                        child: [
                            {
                                path: '/components/pageToolbar',
                                name: '工具条'
                            }
                        ]
                    }
                ]
            },
            {
                name: '辅助类',
                child: [
                    {
                        path: '/components/pageNotes',
                        name: '引用说明'
                    }
                ]
            }
        ]
    },
    {
        name: '完整示例',
        child: [
            {
                path: '/example/table',
                name: '列表页面',
                permission: ['edit']
            },
            {
                path: '/example/charts',
                name: '图表页面'
            },
            {
                path: '/example/map',
                name: '地图页面'
            }
        ]
    },
    {
        path: '/i18n',
        name: '国际化'
    },
    {
        path: '/theme',
        name: '主题切换'
    }
]

export default [{
    path: '/user/navlist',
    data: data
}]