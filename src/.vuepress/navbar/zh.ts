import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  
  //1.指南
  { 
    text: "指南", 
    icon: "update", 
    link: "/guide/" 
  },

  //2.Java
  {
    text: "Java",
    icon: "java",
    link: "/java/",
  },

  //3. Spring
  {
    text: "Spring",
    icon: "alias",
    link: "/spring/",
  },


  //4.中间件
  {
    text: "中间件",
    icon: "mesh",
    link: "/middle/",
  },

   //6.SQL
  {
    text: "SQL",
    icon: "mysql",
    prefix: "/sql/",
    children:[
      {
        text: "MongoDB",
        icon: "array",
        link:"mogondb/",
      }
    ]
  },

  //7.服务器
  {
    text: "服务器",
    icon: "module",
    link:"/service/",
  },

  //8. 工具
  {
    text: "工具",
    icon: "tool",
    link: "/tool/"
  },
   //9.dev
   {
    text: "dev",
    icon: "shell",
    link: "/dev/"
   },
   // 理论
   {
    text: "理论",
    icon: "anonymous",
    link: "/theory/"
   },
    //10.其他：一些外链
    {
      text: "others",
      icon: "community",
      link: "/other/"
    },
]);
