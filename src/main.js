import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRetweet,
  faPlay,
  faAngleLeft,
  faAngleRight,
  faSun,
  faMoon,
  faList,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faRetweet,
  faPlay,
  faAngleLeft,
  faAngleRight,
  faSun,
  faMoon,
  faList
);

const app = createApp(App);

app.use(createPinia());

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
