import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  //0.首页：一般不用导航
  // "/zh/",

  //1.指南
  { 
    text: "指南", 
    icon: "arrow", 
    link: "/zh/guide/" 
  },

  //2.python
  {
    text: "Python",
    icon: "python",
    prefix: "/zh/python/",
    children: [
      {
        text: "Python 核心",
        icon: "python",
        link: "base/",
      },
      {
        text: "Python 扩展",
        icon: "python",
        link: "advance/"
      }
    ],
  },

  //3.数学
  {
    text: "数学",
    icon: "boolean",
    link: "/zh/math/",
  },

  //4.算法
  {
    text: "算法",
    icon: "variable",
    link: "/zh/algorithm/",
  },

  //5.机器学习
  {
    text: "机器学习",
    icon: "android",
    link: "/zh/mitchell/",
  },

   //6.深度学习
  {
    text: "深度学习",
    icon: "workingDirectory",
    link: "/zh/dl/"
  },

  //7.其他零散知识点
  {
    text: "其他",
    icon: "expansion",
    link:"/zh/other",
  },

  //8. 项目
  {
    text: "项目",
    icon: "storage",
    link: "/zh/item/"
  },
   //9.dev
   {
    text: "dev",
    icon: "shell",
    link: "/zh/edge/"
   },
    //10.前沿
    {
      text: "前沿",
      icon: "community",
      link: "/zh/edge/"
    },
]);
