import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/python-study/",
    title: "Python 学习",
    description: "Python 学习记录",
    lastUpdated: true,

    themeConfig: {
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        lastUpdatedText: "最后更新时间",
        editLink: {
            repo: 'curder/python-study',
            branch: 'master',
            dir: 'docs',
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/python-study'}
        ],
        nav: nav(),
        sidebar: {
            "/guide": sidebarGuide(),
        },
    }
});

function nav() {
    return [
        {text: 'Guide', link: '/guide/basic/install-python', activeMatch: '/guide/'},
    ];
}

function sidebarGuide() {
    return [
        {
            text: "基础",
            collapsible: true,
            collapsed: false,
            items: [
                {text: "安装", link: "/guide/basic/install-python"},
                {text: "print函数", link: "/guide/basic/function-print"},
                {text: "转义字符", link: "/guide/basic/escape-character"},
                {text: "系统保留字", link: "/guide/basic/reserved-word"},
                {text: "变量的定义和使用", link: "/guide/basic/variable"},
                {text: "数据类型", link: "/guide/basic/type-of-data"},
                {text: "数据类型转换", link: "/guide/basic/data-type-conversion"},
                {text: "代码注释", link: "/guide/basic/comments"},
                {text: "input函数", link: "/guide/basic/function-input"},
                {text: "运算符", link: "/guide/basic/operator"},
                {text: "流程判断", link: "/guide/basic/if-elif-else"},
                {text: "pass语句", link: "/guide/basic/pass"},
                {text: "range函数", link: "/guide/basic/function-range"},
                {text: "循环结构", link: "/guide/basic/while-and-for-in"},
                {text: "else语句", link: "/guide/basic/else"}
            ]
        },
        {
            text: "列表",
            collapsible: true,
            collapsed: true,
            items: [
                {text: "创建列表", link: "/guide/list/create"},
                {text: "查询列表", link: "/guide/list/find"},
                {text: "编辑列表", link: "/guide/list/update"},
                {text: "删除列表", link: "/guide/list/delete"},
                {text: "列表排序", link: "/guide/list/sort"},
            ]
        }
    ];
}
