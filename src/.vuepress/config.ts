import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro"

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title:"Java全栈",
  description: "Java全栈技术中心",

  theme,
  shouldPrefetch: false,
  plugins:[
    searchProPlugin({ //配置搜索
      indexContent:true, //是否索引正文，默认只索引title、tag和简要
      customFields: [ //自定义项目的获取器
        // 为分类和标签添加索引
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
          
        }
      ]
    })
  ]
});
