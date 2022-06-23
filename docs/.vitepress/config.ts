import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/python-study/",
    title: "Python 学习",
    description: "Python 学习记录",
    lastUpdated: true,
    themeConfig: {

        logo: "/python-study/assets/images/logo.svg",
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
                {text: "变量作用域", link: "/guide/basic/variable-scope"},
                {text: "数据类型", link: "/guide/basic/type-of-data"},
                {text: "数据类型转换", link: "/guide/basic/data-type-conversion"},
                {text: "代码注释", link: "/guide/basic/comments"},
                {text: "input函数", link: "/guide/basic/function-input"},
                {text: "运算符", link: "/guide/basic/operator"},
                {text: "流程判断", link: "/guide/basic/if-elif-else"},
                {text: "pass语句", link: "/guide/basic/pass"},
                {text: "range函数", link: "/guide/basic/function-range"},
                {text: "循环结构", link: "/guide/basic/while-and-for-in"},
                {text: "else语句", link: "/guide/basic/else"},
                {text: "zip函数", link: "/guide/basic/function-zip"},
                {text: "错误异常", link: "/guide/basic/exception"},
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
        },
        {
            text: "字典",
            collapsible: true,
            collapsed: true,
            items: [
                {text: "创建字典", link: "/guide/dict/create"},
                {text: "查询字典", link: "/guide/dict/find"},
                {text: "编辑字典", link: "/guide/dict/update"},
                {text: "删除字典", link: "/guide/dict/delete"},
            ]
        },
        {
            text: "元组",
            collapsible: true,
            collapsed: true,
            items: [
                {text: "创建元组", link: "/guide/tuple/create"},
                {text: "查询元组", link: "/guide/tuple/find"},
                {text: "删除元组", link: "/guide/tuple/delete"},
            ]
        },
        {
            text: "集合",
            collapsible: true,
            collapsed: true,
            items: [
                {text: "创建集合", link: "/guide/set/create"},
                {text: "查询集合", link: "/guide/set/find"},
                {text: "编辑集合", link: "/guide/set/update"},
                {text: "删除集合", link: "/guide/set/delete"},
                {text: "集合操作", link: "/guide/set/operation"},
            ],
        },
        {
            text: "字符串",
            collapsible: true,
            collapsed: true,
            items: [
                {text: "字符串操作", link: "/guide/str/operation"},
                {text: "字符串比较", link: "/guide/str/compare"},
                {text: "字符串切片", link: "/guide/str/slice"},
                {text: "字符串格式化", link: "/guide/str/format"},
                {text: "字符串编码转换", link: "/guide/str/conversion"},
            ],
        },
        {
            text: "函数",
            collapsible: true,
            collapsed: false,
            items: [
                {text: "函数的创建", link: "/guide/function/create"},
                {text: "函数参数传递", link: "/guide/function/parameter-passing"},
                {text: "函数返回值", link: "/guide/function/return-value"},
                {text: "函数参数定义", link: "/guide/function/parameter-definition"},
                {text: "递归函数", link: "/guide/function/recursive-function"},
            ],
        },
    ];
}
