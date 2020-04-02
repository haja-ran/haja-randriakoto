<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      threshold: 0.3,
      throttle: 400,
      throttleOptions: { leading: 'visible' }
    }"
    ref="scene"
  >
    <slot />
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  data() {
    return {
      isVisible: false
    };
  },

  watch: {
    isVisible() {
      if (this.isVisible) {
        this.revealAnimation();
      } else {
        this.revealAnimation().reverse;
      }
    }
  },

  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible;
    },

    revealAnimation() {
      const scene = this.$refs.scene;
      let els = scene.querySelectorAll(".anime-reveal");
      return anime({
        display: "block",
        targets: els,
        translateY: [30, 0],
        opacity: [0, 1],
        easing: "easeOutQuad",
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.anime-reveal {
  opacity: 0;
}
</style>
