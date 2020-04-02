<template>
  <div class="page">
    <section
      ref="page_header"
      class="hero"
      :class="headerClasses"
    >
      <img v-if="thumbnail" :src="thumbnail" class="hero-background" />
      <div
        class="hero-body"
        :style="`opacity: ${1 - scrollY / header_height};`"
      >
        <slot name="header" />
      </div>
    </section>
    <section
      v-if="$slots.default"
      class="page-content section"
      :class="sectionClasses"
    >
      <div class="container">
        <slot />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header_height: 0,
      scrollY: 0
    };
  },

  props: {
    thumbnail: {
      type: String
    },

    headerClasses: {
      type: String
    },

    sectionClasses: {
      type: String
    }
  },

  methods: {
    parallax() {
      if (!this.$slots.default) return;
      this.header_height = this.$refs.page_header.offsetHeight;
      window.addEventListener("resize", () => {
        this.header_height = this.$refs.page_header.offsetHeight;
      });
      document.addEventListener(
        "scroll",
        e => {
          this.scrollY = window.scrollY;
        },
        { passive: true }
      );
    }
  },

  mounted() {
    this.parallax();
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_var";

.page {
  position: relative;
  overflow-x: hidden;
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
  }
  .page-content {
    z-index: 2;
    position: relative;
    background-color: #fafafa;
    overflow-x: hidden;
    max-width: 100vw;
  }
}
.hero {
  position: relative;
  padding-top: 3.5rem;
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.15;
    z-index: 1;
    filter: grayscale(100%);
  }
  .hero-body {
    z-index: 2;
  }
}
</style>
