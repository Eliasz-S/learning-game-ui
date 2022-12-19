<template>
  <div class="lobby">
    <section class="lobby_main">
      <div class="lobby_users__logo">
        <img src="../../public/img/maven-logo.png" alt="Maven" />
      </div>
      <div class="connected_user__container">
        <div class="connected_user">
          <span>
            <font-awesome-icon icon="fa-solid fa-user" />
          </span>
          &nbsp; {{ nickname }}
        </div>
        <div class="no-users">Waiting for start game...</div>
      </div>
    </section>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "ConnectedUsersComponent",

  props: {
    nickname: {
      type: String,
      required: true,
    },
    pin: String,
  },

  methods: {
    handlecli() {
      router.push({ path: "question" });
    },
  },
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@400;700&family=Nunito:ital,wght@1,900&display=swap");
.information {
  display: flex;
  flex-direction: column;
}
.lobby_header {
  padding: 10px 20px;
  width: 100%;
  background: #fff;
  color: #000;
  position: relative;
  overflow: hidden;
}
.lobby_header > p {
  position: sticky;
  top: 28%;
  margin: 0 auto;
  font-size: 27px;
  font-family: Mukta;
  font-weight: 900;
  letter-spacing: 1.5px;
}
.lobby_users__logo > img {
  max-height: 50px;
}
.lobby_users {
  margin: 20px auto;
}
.lobby_bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: end;
}
.lobby_bottom_flex {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 100px;
  justify-content: space-around;
  background: #00000057;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 23px;
}
.lobby_users__logo {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.hidden_bl,
.start_game {
  width: 150px;
}
.start_game > button {
  vertical-align: middle;
  padding: 5px 10px;
  border-radius: 7px;
  background: #2222229c;
  color: #fff;
  border: none;
  font-size: 21px;
  text-transform: uppercase;
  cursor: pointer;
}
button.fullscreen {
  cursor: pointer;
  background: none;
  color: #fff;
  border: none;
  font-size: 23px;
}
.connected_user__container {
  margin: 30px auto;
}
.connected_user {
  width: 150px;
  margin: 0 auto;
  padding: 10px 10px;
  border-radius: 7px;
  background: #22222259;
  animation: connected-user 2.5s infinite;
}
@keyframes connected-user {
  0% {
    margin-top: 10px;
  }
  50% {
    margin-top: 13px;
  }
  100% {
    margin-top: 10px;
  }
}
.no-users {
  background: #2222229c;
  width: fit-content;
  padding: 10px 20px;
  border-radius: 7px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 27px;
  font-family: "Mukta", "sans-serif";
}
</style>
