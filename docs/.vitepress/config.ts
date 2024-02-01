import { defineConfig } from 'vitepress';
import AutoImport from 'unplugin-auto-import/vite';
import globalStyle from '@plugins/global-style';
// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: 'WINK-UI',
    description: 'A vue3 components libary',
    head: [['link', { rel: 'icon', href: '/wink-ui/favicon.ico' }]],
    base: '/wink-ui/',
    srcDir: 'src',
    rewrites: {
        'examples/:pkg/index.md': 'examples/:pkg.md',
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: {
            dark: '/logo.png',
            light: '/logo.png',
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '组件', link: '/examples/icon' },
            { text: '通用', link: '/common/base' },
            { text: '入门', link: '/guide/install' },
        ],
        sidebar: {
            '/common/': [
                {
                    text: '通用内容',
                    link: '/common/base',
                },
                {
                    text: '通用工具',
                    items: [{ text: '数据处理', link: '/common/data' }],
                },
            ],
            '/examples/': [
                {
                    text: '基础组件',
                    items: [
                        { text: '图标', link: '/examples/icon' },
                        { text: '文本', link: '/examples/text' },
                        { text: '按钮', link: '/examples/button' },
                    ],
                },
                {
                    text: '布局组件',
                    items: [
                        { text: '滚动条', link: '/examples/scrollbar' },
                        { text: '分割线', link: '/examples/divider' },
                    ],
                },
                {
                    text: '表单组件',
                    items: [
                        { text: '输入框', link: '/examples/input' },
                        { text: '数字输入框', link: '/examples/input-number' },
                        { text: '颜色选择器', link: '/examples/color-picker' },
                        { text: '下拉选择框', link: '/examples/select' },
                    ],
                },
                {
                    text: '进阶组件',
                    items: [
                        { text: '弹出层', link: '/examples/popup' },
                        { text: '气泡框', link: '/examples/popover' },
                        { text: '模态框', link: '/examples/modal' },
                        { text: '消息框', link: '/examples/message' },
                        { text: '虚拟列表', link: '/examples/virtual-list' },
                        { text: '菜单', link: '/examples/menu' },
                    ],
                },
                {
                    text: '花里胡哨',
                    items: [
                        { text: '盒子', link: '/examples/box' },
                        { text: '代码雨', link: '/examples/rain' },
                        { text: '照片墙', link: '/examples/photo-wall' },
                        { text: '富文本', link: '/examples/markdown' },
                    ],
                },
            ],
            '/guide/': [
                {
                    text: '快速入门',
                    items: [
                        { text: '安装依赖', link: '/guide/install' },
                        { text: '引入依赖', link: '/guide/import' },
                        { text: 'TypeScript', link: '/guide/typescript' },
                    ],
                },
            ],
        },
        aside: true,
        socialLinks: [
            { icon: { svg: 'Site' }, link: 'https://xiangwenke.love/' },
            { icon: 'github', link: 'https://github.com/x-wink' },
        ],
        outline: 'deep',
        outlineTitle: '本页大纲',
        footer: {
            message: '欢迎大家交流学习，拥抱开源',
            copyright:
                '<a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2024041408号-1</a>',
        },
        editLink: {
            pattern: 'https://github.com/x-wink/wink-ui/tree/main/docs/src/:path',
            text: '编辑此页',
        },
        lastUpdated: {
            text: '最后更新时间',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium',
            },
        },
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索',
                    },
                    modal: {
                        displayDetails: '显示详情',
                        resetButtonTitle: '重置搜索',
                        backButtonTitle: '返回',
                        noResultsText: '没有相关内容',
                        footer: {
                            selectText: '跳转',
                            navigateText: '选择',
                            closeText: '关闭',
                        },
                    },
                },
            },
        },
        docFooter: {
            prev: '上一章节',
            next: '下一章节',
        },
        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '选择语言',
        externalLinkIcon: true,
    },
    vite: {
        server: {
            port: 9527,
            host: '0.0.0.0',
        },
        plugins: [
            AutoImport({
                dirs: ['../packages/components/src/**'],
                include: [/\.tsx?$/, /\.vue\??/],
                imports: ['vue'],
                eslintrc: {
                    enabled: true,
                    filepath: '../packages/components/src/.eslintrc',
                    globalsPropValue: true,
                },
                dts: '../../packages/components/src/auto-imports.d.ts',
            }),
            globalStyle({
                sourcePath: '../packages/theme/src/global',
            }),
        ],
    },
    vue: {
        script: {
            defineModel: true,
        },
    },
});
