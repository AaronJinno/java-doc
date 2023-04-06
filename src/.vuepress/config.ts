import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro"

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "AiCell",
      description: "AI Full stack technique center",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "AiCell",
      description: "AI全栈技术中心",
    },
  },

  theme,
  shouldPrefetch: false,
  plugins:[
    searchProPlugin({ //配置搜索
      indexContent:true, //是否索引正文，默认只索引title、tag和简要
      customFields: [ //自定义项目的获取器
        // 为分类和标签添加索引
        {
          getter: (page) => page.frontmatter.category,
          formatter:{
            "/": "Category: $content",
            "/zh/": "分类：$content",
          }
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter:{
            "/": "Tag: $content",
            "/zh/": "标签：$content",
          },
        }
      ]
    })
  ]
});
