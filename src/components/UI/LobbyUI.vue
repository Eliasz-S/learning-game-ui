<template>
  <div class="lobby">
    <section class="information">
      <div class="lobby_header">
        <p>Join at maven with Game PIN: {{ pin }}</p>
      </div>
    </section>
    <section class="lobby_main">
      <div class="lobby_users">
        <div class="lobby_users__logo">
          <div class="hidden_bl"></div>
          <img src="../../../public/img/maven-logo.png" alt="Maven" />
          <div class="start_game">
            <button @click="handlecli">
              <font-awesome-icon icon="fa-solid fa-gamepad" />
              Start
            </button>
          </div>
        </div>
        <div class="lobby_users_array">
          <div class="connected_users">
            <div class="connected_user">
              <p>
                <span><font-awesome-icon icon="fa-solid fa-user" />: </span>
                Nickname
              </p>
            </div>
            <div class="connected_user">
              <p>
                <span><font-awesome-icon icon="fa-solid fa-user" />: </span>
                Nickname
              </p>
            </div>
            <div class="connected_user">
              <p>
                <span><font-awesome-icon icon="fa-solid fa-user" />: </span>
                Nickname
              </p>
            </div>
            <div class="connected_user">
              <p>
                <span><font-awesome-icon icon="fa-solid fa-user" />: </span>
                NicknameNicknameNickname
              </p>
            </div>
            <div class="connected_user">
              <p>
                <span><font-awesome-icon icon="fa-solid fa-user" />: </span>
                Nickname
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="lobby_bottom">
        <div class="lobby_bottom_flex">
          <div class="users_count">
            <font-awesome-icon icon="fa-solid fa-user" /> 7
          </div>
          <button class="fullscreen">
            <font-awesome-icon icon="fa-solid fa-expand" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "LobbyUI",
  data() {
    return {
      pin: "123456",
    };
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
  width: 98%;
  display: flex;
  justify-content: space-between;
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
.connected_users {
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  margin: 0 auto;
  padding-top: 20px;
}
.connected_user {
  min-width: 137px;
  background: #22222259;
  margin: 10px 15px;
  padding: 10px 10px;
  border-radius: 7px;
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
</style>
