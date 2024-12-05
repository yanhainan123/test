import { createApp } from "vue";
import App from "./App.vue";
import NaiveUi from "./naiveui/index";

const app = createApp(App)

app.use(NaiveUi)
app.mount("#app");
