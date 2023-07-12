import { navbar } from "vuepress-theme-hope";

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
        text: "内置资源",
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
        text: "依赖管理",
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
            icon: "mybatis-plus",
            link: "mybatisplus/"
          },
        ]
      },
      {
        text: "开发框架",
        children:[
          {
            text: "SpringBoot",
            icon: "SPRINGBOOT",
            link: "springboot/"
          },
          {
            text: "SpringSecurity",
            icon: "security",
            link: "springsecurity/"
          },
        ]
      }
    ]
  },

  // 3.微服务
  {
    text:"微服务",
    prefix:"/cloud/",
    icon:"weifuwu",
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
  },

  // 4. su
  {
    text:"Su",
    prefix:"/su/",
    icon:"jimu",
    children:[
      {
        text: "Oauth",
        icon: "quanxian",
        link: "oauth/",
      },
      {
        text: "第三方API对接",
        icon: "API",
        link: "kits/",
      },
      {
        text: "swagger",
        icon: "swagger",
        link: "swagger/",
      },
    ]
  },

   //5.Data
  {
    text: "Data",
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


  //6.服务器
  {
    text: "服务器",
    icon: "database",
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
        icon: "nginx",
        link: "nginx/"
      },
      {
        text: "Docker",
        icon: "Docker",
        link: "docker/"
      },
      
    ]
  },


  //7. 轮子
  {
    text: "轮子",
    icon: "zujiancaozuozujianfuxuankuangxuanzhong",
    prefix: "/blocks/",
    children:[
      {
        text: "若依rouyi",
        icon: "guihuaheshi",
        link: "rouyi/"
      }
    ]
  },

  //8. dev
  {
    text: "dev",
    icon: "kaifa1",
    prefix: "/dev/",
    children:[
      {
        text: "开发指南",
        icon: "xinshouzhinan",
        link: "项目开发指南/"
      },
      {
        text: "架构",
        icon: "qiquanjiagou",
        link: "schema/"
      },
      {
        text: "Java类库",
        icon: "a-gongjuxiang1",
        link: "library/"
      },
      {
        text: "功能封装",
        icon: "zujianhua",
        link: "component/"
      },
      {
        text: "模块封装",
        icon: "mokuai",
        link: "module/"
      },
      {
        text: "debug",
        icon: "debug",
        link: "debug/"
      },

    ]
  },


  //9.项目
  {
    text: "项目",
    icon: "shixushujuku",
    prefix: "/item/",
    children:[
      {
        text: "苍穹外卖",
        icon: "meituanwaimai",
        link: "苍穹外卖/",
      }
    ]
  },

  //10.其他
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
            text: "算法",
            icon: "suanfa1",
            link: "mode/"
          },
          {
            text: "设计模式",
            icon: "shejimoshi",
            link: "mode"
          },
          {
            text: "网络协议",
            icon: "TCP",
            link: "mode"
          },
        ]
      },
      {
        text:"通用技术",
        children:[
          {
            text: "正则",
            icon: "zhengzebiaodashi",
            link: "regex"
          }
        ]
      },
    ]
  },
]);
