import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AI工具使用报告',
  description: 'AI编程工具与模型在企业财务场景中的运用实践',
  base: '/ai-tools-report/',

  themeConfig: {
    nav: [
      { text: '报告首页', link: '/' },
    ],

    sidebar: [
      {
        text: '报告目录',
        items: [
          { text: '一、AI 工具概览', link: '#一-ai-工具概览' },
          { text: '二、AI 模型调用实践', link: '#二-ai-模型调用实践' },
          { text: '三、具体运用场景', link: '#三-具体运用场景' },
          { text: '四、使用感受与心得', link: '#四-使用感受与心得' },
          { text: '五、展望与建议', link: '#五-展望与建议' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],

    footer: {
      message: 'AI工具使用报告 · 2026年6月',
    },

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    search: {
      provider: 'local',
    },
  },

  markdown: {
    lineNumbers: false,
  },
})
