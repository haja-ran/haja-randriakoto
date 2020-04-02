<template>
  <transition name="fade">
    <div
      :style="styles"
      class="custom-cursor"
      :class="{ 'is-active': isHovering }"
    ></div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isHovering: true,
      clientX: -100,
      clientY: -100
    };
  },

  computed: {
    styles() {
      return `top: ${this.clientY}px; left: ${this.clientX}px;`;
    }
  },

  mounted() {
    document.addEventListener(
      "mouseover",
      event => {
        this.isHovering = true;
        this.clientX = event.clientX;
        this.clientY = event.clientY;
      },
      { passive: true }
    );

    document.addEventListener(
      "mousemove",
      event => {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
      },
      { passive: true }
    );

    // item.addEventListener(
    //   "mouseout",
    //   event => {
    //     this.isHovering = false;
    //   },
    //   { passive: true }
    // );
  }
};
</script>

<style lang="scss">
@import "~/assets/styles/_var";

.custom-cursor {
  position: fixed;
  z-index: 999999999;
  height: 96px;
  width: 96px;
  border-radius: 100%;
  margin-left: -48px;
  margin-top: -48px;
  transform: scale(0);
  pointer-events: none;
  backdrop-filter: invert(1) grayscale(100%);
  display: flex;
  align-items: center;
  justify-content: center;
  &.is-active {
    transform: scale(1);
    transition: all cubic-bezier(0, 0.63, 0.15, 1) 0.3s;
  }
}
</style>
