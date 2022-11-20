import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: "pusher",
  key: "learning-game-key",
  wsHost: process.env.VUE_APP_HOSTNAME ?? window.location.hostname,
  wsPort: 6001,
  forceTLS: false,
  disableStatus: false,
});
