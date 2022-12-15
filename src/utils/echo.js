import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { api } from "@/utils/axios";

window.Pusher = Pusher;

export default new Echo({
  broadcaster: "pusher",
  key: "learning-game-key",
  wsHost: process.env.VUE_APP_HOSTNAME ?? window.location.hostname,
  wsPort: 6001,
  forceTLS: false,
  disableStatus: false,
  authorizer: (channel) => {
    return {
      authorize: (socketId, callback) => {
        api
          .post("/broadcasting/auth", {
            socket_id: socketId,
            channel_name: channel.name,
          })
          .then((response) => {
            callback(null, response.data);
          })
          .catch((error) => {
            callback(error);
          });
      },
    };
  },
});
