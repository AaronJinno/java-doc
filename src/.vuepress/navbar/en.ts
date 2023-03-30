import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  //1.首页：一般不用导航
  // "/",

  //2.指南
  { 
    text: "Guide", 
    icon: "discover", 
    link: "/guide/" 
  },

  //3.python
  {
    text: "Python",
    icon: "creative",
    prefix: "/python/",
    children: [
      {
        text: "Python Base",
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
    text: "Math",
    icon: "note",
    link: "/math/",
  },

  //5.算法
  {
    text: "algorithm",
    icon: "note",
    link: "/algorithm/",
  },

]);
