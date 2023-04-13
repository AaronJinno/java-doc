import { git, navbar } from "vuepress-theme-hope";
import { m } from "vuepress-theme-hope/lib/node/index-eccaf9af";

export const zhNavbar = navbar([
  
  //0.指南
  { 
    text: "指南", 
    icon: "zhinan", 
    link: "/guide/" 
  },

  //1.Java
  {
    text: "Java",
    icon: "java",
    prefix: "/java/",
    children:[
      {
        text:"JavaSE",
        icon:"java",
        link:"javase/"
      },
      {
        text: "JavaWeb",
        icon: "java1",
        link: "javaweb/"
      },
      {
        text: "JVM",
        icon: "JVM",
        link: "jvm/"
      },
      {
        text: "内置函数",
        icon: "java3",
        link: "func/"
      },
      {
        text: "IDEA",
        icon: "Idea",
        link: "idea/"
      }
    ]
  },

  // 2. 框架
  {
    text: "框架",
    icon: "SPRINGMVC",
    prefix:"/frame/",
    children:[
      {
        text: "打包",
        children:[
          {
            text: "Maven",
            icon: "maven",
            link: "maven/"
          },
        ]
      },
      {
        text: "SSM",
        children:[
          {
            text: "Sping",
            icon: "SPRINGMVC",
            link: "spring/"
          },
          {
            text: "SpringMVC",
            icon: "spring",
            link:"springmvc/",
          },
          {
            text:"MyBatis",
            icon: "MYBATIS",
            link: "mybatis/",
          },
          {
            text: "MyBatisPlus",
            icon: "gobatis",
            link: "mybatisplus/"
          },
          {
            text: "SpringBoot",
            icon: "SPRINGBOOT",
            link: "springboot/"
          },
        ]
      },
      {
        text:"微服务",
        children:[
          {
            text: "SpringCloud & Alibaba",
            icon: "spring-cloud",
            link: "sc/",
          },
          {
            text: "Nacos",
            icon: "Nacos",
            link: "nacos/",
          },
          {
            text: "Gateway",
            icon: "gateway",
            link: "gateway/",
          },
          {
            text: "OpenFeign",
            icon: "http",
            link: "openfeign/",
          },
          {
            text: "Seata",
            icon: "seat-a-select",
            link: "Seata/",
          },
          {
            text: "Sentinel",
            icon: "sentinel",
            link: "sentinel/",
          },{
            text: "过时组件",
            icon: "jinggao",
            link: "old/",
          },
        ]
      }
    ]
  },
  
   //3.SQL
  {
    text: "SQL",
    icon: "sql",
    prefix: "/sql/",
    children:[
      {
        text: "MySQL",
        icon: "xingzhuang",
        link:"mysql/",
      },
      {
        text: "Redis",
        icon: "redis",
        link:"redis/",
      },
      {
        text: "MongoDB",
        icon: "connection-MongoDB",
        link:"mongodb/",
      },
      {
        text: "Memcache",
        icon: "memcacheyunshujukuMemcac",
        link:"memcache/",
      },
      {
        text: "ES",
        icon: "elasticsearch-Elasticsearch",
        link:"es/",
      },
    ]
  },


  //4.服务器
  {
    text: "服务器",
    icon: "yunpan",
    prefix:"/service/",
    children:[
      {
        text: "Linux",
        icon: "linux__easyiconnet",
        link: "linux/"
      },
      {
        text: "shell",
        icon: "powershell",
        link: "shell/"
      },
      {
        text: "Nginx",
        icon: "nginx_",
        link: "nginx/"
      },
      {
        text: "Docker",
        icon: "Docker",
        link: "docker/"
      },
      
    ]
  },

  //5. 插件
  {
    text: "插件",
    icon: "zujianhua",
    prefix:"/plugin/",
    children:[
      {
        text: "swagger",
        icon:"swagger",
        link:"swagger/",
      },
    ]
  },

  //6. 轮子
  {
    text: "轮子",
    icon: "zujiancaozuozujianfuxuankuangxuanzhong",
    prefix: "/blocks/",
    children:[
      {
        text: "后台管理",
        icon: "houtai",
        link: "admin/"
      }
    ]
  },



  //7.项目
  {
    text: "项目",
    icon: "shixushujuku",
    link: "/item/"
  },

  //8.其他
  {
    text: "其他",
    icon:"qita",
    prefix:"/other/",
    children:[
      {
        text: "工具",
        children:[
          {
            text: "Git",
            icon: "git",
            link: "git/"
          },
        ]
      },
      {
        text:"理论",
        children:[
          {
            text: "设计模式",
            icon: "shejimoshi",
            link: "mode"
          }
        ]
      },
      {
        text:"专业与通用技术",
        children:[
          {
            text: "正则",
            icon: "zhengze",
            link: "regex"
          }
        ]
      }

    ]
  },

]);
