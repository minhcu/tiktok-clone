import { createApp } from "vue";
import { createPinia } from "pinia";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleXmark,
  faSpinner,
  faSearch,
  faPlus,
  faEllipsisV,
  faGlobe,
  faCaretUp,
  faAngleLeft,
  faPaperPlane,
  faMessage as faMessageFilled,
  faGear,
  faCoins,
  faArrowRightFromBracket,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleQuestion,
  faKeyboard,
  faMessage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

library.add(
  faCircleXmark,
  faSpinner,
  faSearch,
  faPlus,
  faEllipsisV,
  faGlobe,
  faCaretUp,
  faCircleQuestion,
  faKeyboard,
  faAngleLeft,
  faPaperPlane,
  faMessage,
  faMessageFilled,
  faGear,
  faUser,
  faCoins,
  faArrowRightFromBracket,
  faCircleCheck
);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
