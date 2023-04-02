import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

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
});
