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
            '/basic': sidebarBasic(),
        },
    }
});

function nav() {
    return [
        {text: '基础', link: '/basic/install-python', activeMatch: '/basic/'},
    ];
}

function sidebarBasic() {
    return [
        {
            text: "基础",
            items: [
                {text: "安装", link: "/basic/install-python"},
                {text: "print函数", link: "/basic/function-print"},
                {text: "转义字符", link: "/basic/escape-character"},
                {text: "系统保留字", link: "/basic/reserved-word"},
                {text: "变量的定义和使用", link: "/basic/variable"},
                {text: "数据类型", link: "/basic/type-of-data"},
                {text: "数据类型转换", link: "/basic/data-type-conversion"},
                {text: "代码注释", link: "/basic/comments"},
                {text: "input函数", link: "/basic/function-input"},
                {text: "运算符", link: "/basic/operator"},
                {text: "流程判断", link: "/basic/if-elif-else"},
                {text: "pass语句", link: "/basic/pass"},
                {text: "range函数", link: "/basic/function-range"},
                {text: "循环结构", link: "/basic/while-and-for-in"},
            ]
        },
    ];
}