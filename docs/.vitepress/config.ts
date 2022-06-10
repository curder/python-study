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
        {text: 'Guide', link: '/guide/install-python', activeMatch: '/guide/'},
    ];
}

function sidebarGuide() {
    return [
        {
            text: "基础",
            collapsible: true,
            collapsed: false,
            items: [
                {text: "安装", link: "/guide/install-python"},
                {text: "print函数", link: "/guide/function-print"},
                {text: "转义字符", link: "/guide/escape-character"},
                {text: "系统保留字", link: "/guide/reserved-word"},
                {text: "变量的定义和使用", link: "/guide/variable"},
                {text: "数据类型", link: "/guide/type-of-data"},
                {text: "数据类型转换", link: "/guide/data-type-conversion"},
                {text: "代码注释", link: "/guide/comments"},
                {text: "input函数", link: "/guide/function-input"},
                {text: "运算符", link: "/guide/operator"},
                {text: "流程判断", link: "/guide/if-elif-else"},
                {text: "pass语句", link: "/guide/pass"},
                {text: "range函数", link: "/guide/function-range"},
                {text: "循环结构", link: "/guide/while-and-for-in"},
                {text: "else语句", link: "/guide/else"}
            ]
        },
        {
            text: "列表",
            collapsible: true,
            collapsed: false,
            items: [
                {text: "创建列表", link: "/guide/list/create"}
            ]
        }
    ];
}
