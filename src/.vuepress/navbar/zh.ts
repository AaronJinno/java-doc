import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  //1.首页：一般不用导航
  // "/zh/",

  //2.指南
  { 
    text: "指南", 
    icon: "discover", 
    link: "/zh/guide/" 
  },

  //3.python
  {
    text: "Python",
    icon: "creative",
    prefix: "/zh/python/",
    children: [
      {
        text: "Python 基础",
        icon: "creative",
        link: "base/",
      },
      {
        text: "Matplotlib",
        icon: "config",
        link: "Matplotlib/",
      },
    ],
  },

  //4.数学
  {
    text: "数学",
    icon: "note",
    link: "/zh/math/",
  },

  //5.算法
  {
    text: "算法",
    icon: "note",
    link: "/zh/algorithm/",
  },
]);
