import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFacebookF);
library.add(faTwitter);
library.add(faInstagram);

// Global CSS
import "./index.css";

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount("#app");
