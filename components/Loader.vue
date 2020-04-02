<template>
  <transition name="fade" >
    <div v-if="!isLoaded" class="hero is-fullheight is-black has-background-black-bis">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="logo-loader">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5">
              <path fill="none" d="M0 0h40v40H0z"/>
              <path class="logo-stroke" d="M159.1 13l-4.8 13.5s3-11.3 6.5-9.7c3 1.4-3.1 8.6 0 9.7 2 .7 3.4-2.7 4.6-5.4 1.1-2.6 2.9-5.8.7-6.6-1.7-.6-3.3 2.3.5 3.7 1.4.5 3.6.9 3.6.9s-3.2 7-.9 7.4c2.1.3 4-4.5 4-4.5" fill="none" stroke="#ef3a64" stroke-width="2" transform="translate(-143.8 -.4)"/>
            </svg>
          </div>
          <p class="heading m-t-1_5rem">Hang on...</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
      len: 0,
      counter: 0
    };
  },

  watch: {
    $route(to, from) {
      this.checkForLoadingState();
    }
  },

  methods: {
    incrementCounter() {
      this.counter++;
      if (this.counter === this.len) {
        this.isLoaded = true;
      }
    },

    checkForLoadingState() {
      let imgs = document.images;
      this.len = imgs.length;
      this.counter = 0;
      if (!imgs.length) {
        this.isLoaded = true;
      }
      [].forEach.call(imgs, img => {
        if (img.complete) this.incrementCounter();
        else img.addEventListener("load", this.incrementCounter, false);
      });
    }
  },

  mounted() {
    this.checkForLoadingState();
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_var";

.hero {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
}

.logo-loader {
  height: 40px;
  width: 40px;
  margin: 0 auto;
  position: relative;
  .logo-stroke {
    stroke: currentColor;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10000px;
    border: solid 2px $primary;
    border-left: solid 2px transparent;
    border-top: solid 2px transparent;
    border-bottom: solid 2px transparent;
    animation: logo-loader-rotation infinite linear 0.5s;
  }
}

@keyframes logo-loader-rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>