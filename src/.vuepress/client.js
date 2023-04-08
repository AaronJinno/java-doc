import { defineClientConfig } from "@vuepress/client"
import LinkCard from "./components/LinkCard.vue"

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("LinkCard", LinkCard);
    },
});
