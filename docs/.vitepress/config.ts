import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ah-utils-tools',
  description: '轻量级前端工具库',
  lang: 'zh-CN',
  base: '/ah-utils-toolss/',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#4fc3f7' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'ah-utils-tools',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/type' },
      { text: '更新日志', link: '/changelog' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装使用', link: '/guide/installation' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '类型判断', link: '/api/type' },
            { text: '字符串', link: '/api/string' },
            { text: '数组', link: '/api/array' },
            { text: '对象', link: '/api/object' },
            { text: '浏览器', link: '/api/browser' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/ah-utils-tools' },
    ],
    footer: {
      message: '基于 MIT 许可证发布。',
      copyright: 'Copyright © 2024-present',
    },
    editLink: {
      pattern: 'https://github.com/your-username/ah-utils-tools/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    search: {
      provider: 'local',
    },
  },
})
