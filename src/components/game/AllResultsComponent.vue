<template>
  <div class="all_results">
    <div class="pyro">
      <div class="before"></div>
      <div class="after"></div>
    </div>
    <div class="title">Congratulations to our winners!</div>
    <div class="results">
      <div class="tops">
        <div class="top left">
          2
          <div class="winner_name">Second place</div>
        </div>
        <div class="top center">
          1
          <div class="winner_name">Winner</div>
          <div class="winner_cup">
            <img src="../../../public/img/cup.png" alt="cup" />
          </div>
        </div>
        <div class="top bottom">
          3
          <div class="winner_name">Three place</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllResultsComponent",
};
</script>

<style lang="css" scoped>
.all_results {
  background: #673ab7;
  height: 100vh;
  color: #fff;
}
.winner_cup {
  left: 41px;
  position: absolute;
  top: -164px;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  transform: rotate(0);
  animation: cup_anim 2s infinite;
}
.top.left > .winner_name {
  width: 114px;
  left: 10px;
  top: -50px;
}
.winner_cup > img {
  height: 120px;
}
.winner_name {
  left: 30px;
  position: absolute;
  top: -40px;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  animation: name_anim 1s infinite;
}
.results {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.tops {
  position: relative;
}
.top.center {
  position: relative;
  z-index: 600;
  width: 150px;
  height: 200px;
  background: #42dd1c;
  border-radius: 7px 7px 0 0;
  animation: center_anim 1s ease;
  line-height: 200px;
  font-size: 60px;
  color: #fff;
  font-weight: 800;
}
.top.left {
  position: absolute;
  left: -128px;
  bottom: 0;
  z-index: 500;
  width: 150px;
  height: 160px;
  background: #49ad30;
  border-radius: 7px 7px 0 0;
  animation: left_anim 2s ease;
  line-height: 160px;
  font-size: 60px;
  color: #fff;
  font-weight: 800;
}
.top.bottom {
  position: absolute;
  right: -128px;
  bottom: 0;
  z-index: 500;
  width: 150px;
  height: 140px;
  background: #337623;
  border-radius: 7px 7px 0 0;
  animation: bottom_anim 3s ease;
  line-height: 140px;
  font-size: 60px;
  color: #fff;
  font-weight: 800;
}
@keyframes center_anim {
  from {
    height: 0px;
  }
  to {
    height: 200px;
  }
}
@keyframes left_anim {
  from {
    height: 0px;
  }
  to {
    height: 160px;
  }
}
@keyframes bottom_anim {
  from {
    height: 0px;
  }
  to {
    height: 140px;
  }
}
@keyframes name_anim {
  0% {
    top: -40px;
  }
  50% {
    top: -50px;
  }
  100% {
    top: -40px;
  }
}
@keyframes cup_anim {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0);
  }
}
.title {
  padding: 20px;
  font-size: 48px;
  font-family: cursive;
  letter-spacing: 1.1px;
  font-weight: 700;
}

.pyro > .before,
.pyro > .after {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-shadow: -120px -218.66667px blue, 248px -16.66667px #00ff84,
    190px 16.33333px #002bff, -113px -308.66667px #ff009d,
    -109px -287.66667px #ffb300, -50px -313.66667px #ff006e,
    226px -31.66667px #ff4000, 180px -351.66667px #ff00d0,
    -12px -338.66667px #00f6ff, 220px -388.66667px #99ff00,
    -69px -27.66667px #ff0400, -111px -339.66667px #6200ff,
    155px -237.66667px #00ddff, -152px -380.66667px #00ffd0,
    -50px -37.66667px #00ffdd, -95px -175.66667px #a6ff00,
    -88px 10.33333px #0d00ff, 112px -309.66667px #005eff,
    69px -415.66667px #ff00a6, 168px -100.66667px #ff004c,
    -244px 24.33333px #ff6600, 97px -325.66667px #ff0066,
    -211px -182.66667px #00ffa2, 236px -126.66667px #b700ff,
    140px -196.66667px #9000ff, 125px -175.66667px #00bbff,
    118px -381.66667px #ff002f, 144px -111.66667px #ffae00,
    36px -78.66667px #f600ff, -63px -196.66667px #c800ff,
    -218px -227.66667px #d4ff00, -134px -377.66667px #ea00ff,
    -36px -412.66667px #ff00d4, 209px -106.66667px #00fff2,
    91px -278.66667px #000dff, -22px -191.66667px #9dff00,
    139px -392.66667px #a6ff00, 56px -2.66667px #0099ff,
    -156px -276.66667px #ea00ff, -163px -233.66667px #00fffb,
    -238px -346.66667px #00ff73, 62px -363.66667px #0088ff,
    244px -170.66667px #0062ff, 224px -142.66667px #b300ff,
    141px -208.66667px #9000ff, 211px -285.66667px #ff6600,
    181px -128.66667px #1e00ff, 90px -123.66667px #c800ff,
    189px 70.33333px #00ffc8, -18px -383.66667px #00ff33,
    100px -6.66667px #ff008c;
  animation: 1s bang ease-out infinite backwards,
    1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
}

.pyro > .after {
  animation-delay: 1.25s, 1.25s, 1.25s;
  animation-duration: 1.25s, 1.25s, 6.25s;
}

@keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white;
  }
}

@keyframes gravity {
  to {
    transform: translateY(200px);
    opacity: 0;
  }
}

@keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }

  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }

  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }

  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }

  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
</style>
