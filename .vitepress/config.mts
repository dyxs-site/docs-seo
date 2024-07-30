import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/docs-seo/', // 设置站点根路径
  outDir: './docs', // 打包输出目录
  title: "GoogleSEO学习",
  description: "一个学习记录谷歌SEO的过程",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Semrush", link: "/semrush/logs" },
    ],

    sidebar: [
      {
        text: "Semrush",
        items: [
          { text: "1、要点", link: "/semrush/logs" },
          { text: "2、记录", link: "/semrush/movies" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/dyxs-site" }],
  }
});
