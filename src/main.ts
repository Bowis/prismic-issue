import "./style.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
  endpoint: "https://prospire-cms.cdn.prismic.io/api/v2",
});

export default prismic;

createApp(App).use(prismic).mount("#app");
