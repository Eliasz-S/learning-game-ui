import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/utils/echo";
import VueSweetalert2 from "vue-sweetalert2";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faUser,
  faPlus,
  faRightFromBracket,
  faChevronDown,
  faCircleUser,
  faHouseChimney,
  faList,
  faChartColumn,
  faUsersLine,
  faCircle,
  faSquare,
  faPlay,
  faDiamond,
  faExpand,
  faGamepad,
  faTrashCan,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "sweetalert2/dist/sweetalert2.min.css";

library.add([
  faUserSecret,
  faPlus,
  faRightFromBracket,
  faUser,
  faChevronDown,
  faCircleUser,
  faHouseChimney,
  faList,
  faChartColumn,
  faUsersLine,
  faCircle,
  faSquare,
  faPlay,
  faDiamond,
  faExpand,
  faGamepad,
  faTrashCan,
  faCheck,
]);

createApp(App)
  .use(store)
  .use(router)
  .use(VueSweetalert2)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
