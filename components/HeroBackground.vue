<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      throttle: 250,
      throttleOptions: { leading: 'visible' }
    }"
    id="scene"
  >
    <div id="cube" :class="{ 'is-paused': !isVisible }">
      <div class="wrapper">
        <div class="face front"></div>
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
        <div class="face back"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
// $front: "/img/skybox/front.svg";
// $left: "/img/skybox/left.svg";
// $right: "/img/skybox/right.svg";
// $top: "/img/skybox/top.svg";
// $bottom: "/img/skybox/bottom.svg";
// $back: "/img/skybox/back.svg";

// #scene {
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   perspective: 25vw !important;
//   background: white;
//   overflow: hidden;
//   position: absolute;
//   top: 0;
//   left: 0;
// }

// #cube {
//   position: relative;
//   width: 50vw;
//   height: 50vw;
//   transform-style: preserve-3d;
//   transform-origin: 50% 50% 25vw;
//   animation: rotation 200s infinite linear;
//   .wrapper {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 100%;
//     transform-style: preserve-3d;
//     animation-fill-mode: forwards;
//   }
//   .front {
//     position: absolute;
//     width: calc(100% + 1px);
//     height: calc(100% + 1px);
//     margin-top: -0.5px;
//     margin-left: -0.5px;
//     left: 0;
//     top: 0;
//     background-image: url("#{$front}");
//     background-size: 100% 100%;
//   }
//   .left {
//     position: absolute;
//     width: calc(100% + 1px);
//     height: calc(100% + 1px);
//     margin-top: -0.5px;
//     margin-left: -0.5px;
//     left: -100%;
//     transform-origin: 100%;
//     transform: rotateY(90deg);
//     background-image: url("#{$left}");
//     background-size: 100% 100%;
//   }
//   .right {
//     position: absolute;
//     width: calc(100% + 1px);
//     height: calc(100% + 1px);
//     margin-top: -0.5px;
//     margin-left: -0.5px;
//     right: -100%;
//     transform-origin: 0;
//     transform: rotateY(-90deg);
//     background-image: url("#{$right}");
//     background-size: 100% 100%;
//   }
//   .top {
//     position: absolute;
//     width: calc(100% + 1px);
//     height: calc(100% + 1px);
//     margin-top: -0.5px;
//     margin-left: -0.5px;
//     top: -100%;
//     transform-origin: 100% 100%;
//     transform: rotateX(-90deg);
//     background-image: url("#{$top}");
//     background-size: 100% 100%;
//   }
//   .bottom {
//     position: absolute;
//     width: calc(100% + 1px);
//     height: calc(100% + 1px);
//     margin-top: -0.5px;
//     margin-left: -0.5px;
//     top: 100%;
//     transform-origin: 0 0;
//     transform: rotateX(90deg);
//     background-image: url("#{$bottom}");
//     background-size: 100% 100%;
//   }
//   .back {
//     position: absolute;
//     width: calc(100% + 1px);
//     height: calc(100% + 1px);
//     margin-top: -0.5px;
//     margin-left: -0.5px;
//     top: 0;
//     transform-origin: 0 0;

//     transform: rotateY(-180deg) translateX(-100%) translateZ(-50vw);
//     background-image: url("#{$back}");
//     background-size: 100% 100%;
//   }
//   &.is-paused {
//     animation-play-state: paused;
//   }
// }

// @keyframes rotation {
//   from {
//     transform: rotateX(0) rotateY(0) rotateZ(0);
//   }

//   to {
//     transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
//   }
// }
</style>

<style scoped>
#scene {
  height: 100vh;
  width: 100vw;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-perspective: 25vw !important;
  perspective: 25vw !important;
  background: white;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

#cube {
  position: relative;
  width: 50vw;
  height: 50vw;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 50% 50% 25vw;
  transform-origin: 50% 50% 25vw;
  -webkit-animation: rotation 200s infinite linear;
  animation: rotation 200s infinite linear;
}
#cube .wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
#cube .front {
  position: absolute;
  width: calc(100% + 1px);
  height: calc(100% + 1px);
  margin-top: -0.5px;
  margin-left: -0.5px;
  left: 0;
  top: 0;
  background-image: url("/img/skybox/front.svg");
  background-size: 100% 100%;
}
#cube .left {
  position: absolute;
  width: calc(100% + 1px);
  height: calc(100% + 1px);
  margin-top: -0.5px;
  margin-left: -0.5px;
  left: -100%;
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
  -webkit-transform: rotateY(90deg);
  transform: rotateY(90deg);
  background-image: url("/img/skybox/left.svg");
  background-size: 100% 100%;
}
#cube .right {
  position: absolute;
  width: calc(100% + 1px);
  height: calc(100% + 1px);
  margin-top: -0.5px;
  margin-left: -0.5px;
  right: -100%;
  -webkit-transform-origin: 0;
  transform-origin: 0;
  -webkit-transform: rotateY(-90deg);
  transform: rotateY(-90deg);
  background-image: url("/img/skybox/right.svg");
  background-size: 100% 100%;
}
#cube .top {
  position: absolute;
  width: calc(100% + 1px);
  height: calc(100% + 1px);
  margin-top: -0.5px;
  margin-left: -0.5px;
  top: -100%;
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
  -webkit-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
  background-image: url("/img/skybox/top.svg");
  background-size: 100% 100%;
}
#cube .bottom {
  position: absolute;
  width: calc(100% + 1px);
  height: calc(100% + 1px);
  margin-top: -0.5px;
  margin-left: -0.5px;
  top: 100%;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: rotateX(90deg);
  transform: rotateX(90deg);
  background-image: url("/img/skybox/bottom.svg");
  background-size: 100% 100%;
}
#cube .back {
  position: absolute;
  width: calc(100% + 1px);
  height: calc(100% + 1px);
  margin-top: -0.5px;
  margin-left: -0.5px;
  top: 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: rotateY(-180deg) translateX(-100%) translateZ(-50vw);
  transform: rotateY(-180deg) translateX(-100%) translateZ(-50vw);
  background-image: url("/img/skybox/back.svg");
  background-size: 100% 100%;
}
#cube.is-paused {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  to {
    -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}

@keyframes rotation {
  from {
    -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  to {
    -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}
</style>
