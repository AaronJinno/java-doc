import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  //1.首页：一般不用导航
  // "/zh/",

  //2.指南
  { 
    text: "指南", 
    icon: "creative", 
    link: "/zh/guide/" 
  },

  //3.python
  {
    text: "Python",
    icon: "python",
    prefix: "/zh/python/",
    children: [
      {
        text: "Python 基础",
        icon: "python",
        link: "base/",
      },
    ],
  },

  //4.数学
  {
    text: "数学",
    icon: "calculate",
    link: "/zh/math/",
  },

  //5.算法
  {
    text: "算法",
    icon: "change",
    link: "/zh/algorithm/",
  },

  //6.机器学习
  {
    text: "机器学习",
    icon: "android",
    link: "/zh/mitchell/",
  },

  //7.深度学习
  {
    text: "深度学习",
    icon: "workingDirectory",
    link: "/zh/dl/"
  },

  //8.前沿
  {
    text: "前沿",
    icon: "navigate",
    link: "/zh/edge/"
  }
]);
