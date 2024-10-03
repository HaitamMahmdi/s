import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Create and mount the Vue app
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-icons/font/bootstrap-icons.css";
createApp(App).use(store).use(router).mount("#app");
