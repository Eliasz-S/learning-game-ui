<template>
  <div class="screen">
    <img
      class="bg_objects bg_objects__square"
      src="svg/square.svg"
      width="500"
      height="500"
    />
    <img
      class="bg_objects bg_objects__circle"
      src="svg/circle.svg"
      width="500"
      height="500"
    />
    <div class="screen_main">
      <div class="logo">
        <img src="img/maven-logo.png" />
      </div>
      <form v-if="!lobbyId" class="input_pin" action="#" @submit.prevent>
        <input
          @keydown.enter="handlePin"
          v-model="pin"
          class="input_pin_child"
          type="text"
          id="pin"
          name="pin"
          placeholder="Game PIN"
        />
        <button @click="handlePin" class="input_pin_child" type="submit">
          Enter
        </button>
      </form>
      <form v-else class="input_pin" action="#" @submit.prevent>
        <input
          @keydown.enter="joinGame"
          v-model="nickname"
          class="input_pin_child"
          type="text"
          id="nickname"
          name="nickname"
          placeholder="Your Nickname"
        />
        <button @click="joinGame" class="input_pin_child" type="submit">
          Join game
        </button>
      </form>
    </div>
    <div class="screen_footer">
      <p class="screen_footer__info">
        Create your own
        <router-link to="/home">maven for FREE</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/axios";

export default {
  name: "GameView",
  data() {
    return {
      lobbyId: null,
      nickname: "",
      pin: "",
    };
  },
  methods: {
    handlePin() {
      if (!this.pin) return;
      api
        .post("lobby/check-pincode", { pincode: this.pin })
        .then((response) => {
          if (response.status === 200) {
            this.lobbyId = response.data.lobbyId;
          }
        });
    },
    joinGame() {
      if (!this.nickname) return;
      api
        .post("lobby/join", {
          lobbyId: this.lobbyId,
          nickname: this.nickname,
        })
        .then((response) => {
          if (response.status === 200) {
            sessionStorage.setItem(
              "userLobby",
              JSON.stringify({ lobbyId: this.lobbyId, nickname: this.nickname })
            );
            this.$router.push({
              name: "lobbyUser",
            });
          }
        })
        .catch((e) => {
          if (e.response.status === 409) {
            alert(e.response.data.message);
          }
        });
    },
  },
};
</script>

<style>
.screen {
  background-color: #5626a3;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 0%;
  height: 100vh;
}
.screen_main {
  z-index: 999;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.screen_footer {
  z-index: 999;
  justify-self: flex-end;
  flex: 0 0 auto;
}
.input_pin {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
}
.input_pin_child {
  text-align: center;
  margin: 5px 0;
  padding: 5px 3px;
  font-size: 1.2em;
}
button.input_pin_child {
  background-color: #222;
  color: #fff;
  cursor: pointer;
}
input.input_pin_child {
  border: 2px solid #c3c3c3;
  border-radius: 5px;
}
.screen_footer__info {
  margin: 20px 0 40px 0;
}
.screen_footer__info > a {
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  color: #6cd36c;
  font-family: cursive;
  font-size: 13px;
}
.bg_objects {
  z-index: 0;
  position: fixed;
  transform: rotate(45deg);
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}
.bg_objects__square {
  animation-name: moveSquare;
}
.bg_objects__circle {
  animation-name: moveCircle;
}
@keyframes moveSquare {
  0% {
    left: 0px;
    top: -120px;
  }
  100% {
    left: -180px;
    top: -50px;
  }
}
@keyframes moveCircle {
  0% {
    right: -180px;
    bottom: -180px;
  }
  100% {
    right: -80px;
    bottom: -140px;
  }
}
</style>
