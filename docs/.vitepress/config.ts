import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AI工具使用报告',
  description: 'AI编程工具与模型在企业财务场景中的运用实践',
  base: '/-/',

  themeConfig: {
    nav: [
      { text: '报告首页', link: '/' },
    ],

    sidebar: [
      {
        text: '报告目录',
        items: [
          { text: '一、AI 工具矩阵', link: '/#tools' },
          { text: '二、AI 模型雷达', link: '/#models' },
          { text: '三、运用场景实战', link: '/#scenarios' },
          { text: '四、工具及模型使用感受', link: '/#recommendations' },
          { text: '五、使用心得与注意事项', link: '/#insights' },
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
