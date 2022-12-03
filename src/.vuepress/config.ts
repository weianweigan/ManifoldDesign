import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "TouchMDesign",
      description: "Design manifold block in SolidWorks",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "TouchMDesign",
      description: "在SolidWorks中设计您的液压集成块",            
    },
  },

  theme: hopeTheme({
    sidebar: "structure",
    locales: {
      "/": {
        logo: "/logo.svg",
        navbar: [
          {
            text: "Document",
            link: "/docs", 
            icon: "/document.png",                     
          }
        ],
      },
      "/zh/": {
        logo: "/logo.svg",      
        navbar: [
          {
            text: "操作文档",
            link: "/zh/docs",
            icon: "/document.png",
          }
        ],        
      },
    },
  }),
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      
      locales: {
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
  shouldPrefetch: false,
});
