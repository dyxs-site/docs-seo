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
          { text: "1、关于Semrush", link: "/semrush/readme" },
          { text: "2、分析记录研究过程", link: "/semrush/logs" },
          { text: "3、研究目标-Movies", link: "/semrush/movies" },
          { text: "4、研究目标-Life", link: "/semrush/life" },
          { text: "5、研究目标-Tools", link: "/semrush/tools" },
          { text: "6、研究目标-Independent", link: "/semrush/independent" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/dyxs-site" }],
  }
});
