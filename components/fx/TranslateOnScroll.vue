<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      throttle: 250,
      throttleOptions: { leading: 'visible' }
    }"
  >
    <div class="scene" :style="style">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      translate: [0, 0, 0],
      rotate: [0, 0, 0],
      scale: 1,
      opacity: 1,
      ratio: 1,
      isVisible: false
    };
  },

  props: {
    parallax: {
      type: Boolean,
      default: false
    },

    start: {
      type: Object,
      default: () => {
        return {
          translate: [0, -100, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
      }
    }
  },

  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible;
    }
  },

  computed: {
    translateX() {
      if (!this.start.translate) return 0;
      const translateX =
        this.start.translate[0] - this.start.translate[0] * this.ratio;
      // if (translateX < 0) return 0;
      return translateX;
    },

    translateY() {
      if (!this.start.translate) return 0;
      const translateY =
        this.start.translate[1] - this.start.translate[1] * this.ratio;
      // if (translateY < 0) return 0;
      return -translateY;
    },

    translateZ() {
      if (!this.start.translate) return 0;
      const translateZ =
        this.start.translate[2] - this.start.translate[2] * this.ratio;
      // if (translateZ < 0) return 0;
      return -translateZ;
    },

    rotateX() {
      if (!this.start.rotate) return 0;
      const rotateX = this.start.rotate[0] - this.start.rotate[0] * this.ratio;
      // if (rotateX < 0) return 0;
      return rotateX;
    },

    rotateY() {
      if (!this.start.rotate) return 0;
      const rotateY = this.start.rotate[1] - this.start.rotate[1] * this.ratio;
      // if (rotateY < 0) return 0;
      return rotateY;
    },

    rotateZ() {
      if (!this.start.rotate) return 0;
      const rotateZ = this.start.rotate[2] - this.start.rotate[2] * this.ratio;
      // if (rotateZ < 0) return 0;
      return rotateZ;
    },

    scale_computed() {
      if (typeof this.start.scale == "undefined") {
        return 1;
      }
      const scale = this.start.scale + (this.ratio - this.start.scale);
      if (scale > 1) return 1;
      return scale;
    },

    opacity_computed() {
      if (typeof this.start.opacity == "undefined") {
        return 1;
      }
      const opacity = this.start.opacity + (this.ratio - this.start.opacity);
      if (opacity > 1) return 1;
      return opacity;
    },

    style() {
      return `
        transform: rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg) translateX(${this.translateX}px) translateY(${this.translateY}px) translateZ(${this.translateZ}px) scale(${this.scale_computed});
        opacity: ${this.opacity_computed};
      `;
    }
  },

  mounted() {
    document.addEventListener(
      "scroll",
      () => {
        if (!this.isVisible) return;
        const trigger = 400;
        const el = this.$el;
        const vp_height = window.outerHeight;
        const el_position = el.getBoundingClientRect().top - vp_height / 3;

        let ratio = 1 - el_position / vp_height - 0.15;

        if (ratio >= 1 && !this.parallax) {
          ratio = 1;
        }

        this.ratio = ratio;
      },
      { passive: true }
    );
  }
};
</script>

<style lang="scss" scoped>
.scene {
  z-index: 10;
  perspective: 1px;
}
</style>
