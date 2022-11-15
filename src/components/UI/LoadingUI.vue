<template>
  <div class="loading">
    <div class="loading_components">
      <div class="yellow loading_component col">
        <span class="circle">
          <font-awesome-icon icon="fa-solid fa-circle" />
        </span>
      </div>
      <div class="green loading_component col">
        <span class="square">
          <font-awesome-icon icon="fa-solid fa-square" />
        </span>
      </div>
      <div class="red loading_component col">
        <span class="triangle">
          <font-awesome-icon icon="fa-solid fa-play" />
        </span>
      </div>
      <div class="blue loading_component col">
        <span class="rhombus">
          <font-awesome-icon icon="fa-solid fa-diamond" />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.loading {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.loading_components {
  width: 93px;
  height: 93px;
  position: relative;
  top: 50%;
  transform: rotate(17deg);
}
.loading_component {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 43px;
  border-radius: 7px;
  font-size: 23px;
  margin: 0 auto;
  align-self: center;
  position: absolute;
}
.yellow {
  background-color: #ffc107;
  top: 0;
  left: 0;
  animation: loading-animate-first 4s infinite;
}
.blue {
  background-color: #3f51b5;
  top: 0;
  left: 0;
  animation: loading-animate-second 4s infinite;
}
.red {
  background-color: #b92020;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
  animation: loading-animate-three 4s infinite;
}
.green {
  background-color: #5eb53f;
  top: 0;
  left: 0;
  animation: loading-animate-fourth 4s infinite;
}
@keyframes loading-animate-first {
  0% {
    top: 0;
    left: 0;
  }
  25% {
    top: 0;
    left: 57%;
  }
  50% {
    top: 57%;
    left: 57%;
  }
  75% {
    top: 57%;
    left: 0;
  }
  100% {
    top: 0;
    left: 0;
  }
}
@keyframes loading-animate-second {
  0% {
    top: 0;
    left: 57%;
  }
  25% {
    top: 57%;
    left: 57%;
  }
  50% {
    top: 57%;
    left: 0;
  }
  75% {
    top: 0;
    left: 0;
  }
  100% {
    top: 0;
    left: 57%;
  }
}
@keyframes loading-animate-three {
  0% {
    top: 57%;
    left: 57%;
  }
  25% {
    top: 57%;
    left: 0;
  }
  50% {
    top: 0;
    left: 0;
  }
  75% {
    top: 0;
    left: 57%;
  }
  100% {
    top: 57%;
    left: 57%;
  }
}
@keyframes loading-animate-fourth {
  0% {
    top: 57%;
    left: 0;
  }
  25% {
    top: 0;
    left: 0;
  }
  50% {
    top: 0;
    left: 57%;
  }
  75% {
    top: 57%;
    left: 57%;
  }
  100% {
    top: 57%;
    left: 0;
  }
}
</style>
