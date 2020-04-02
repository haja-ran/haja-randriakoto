<template>
  <nav ref="navbar" class="navbar" :class="classes">
    <div class="scroll-indicator" :style="`width: ${indicator_width}`"></div>
    
    <div class="container">
      <nuxt-link
      to="/"
      :class="{ 'is-active': $route.path == '/' }"
      class="navbar-logo"
    >
      <Logo :hideText="this.scroll_y > 56 ? true : false" />
    </nuxt-link>

    <div class="navbar-menu">
      <nuxt-link
        to="/"
        class="navbar-item"
      >
        <strong class="letter-icon title">A</strong>
        <span class="navbar-item-label is-size-4">About</span>
      </nuxt-link>
      <nuxt-link
        to="/work"
        class="navbar-item"
      >
        <strong class="letter-icon title">W</strong>
        <span class="navbar-item-label is-size-4">Work</span>
      </nuxt-link>
      <nuxt-link
        to="/skills"
        class="navbar-item"
      >
        <strong class="letter-icon title">S</strong>
        <span class="navbar-item-label is-size-4">Skills</span>
      </nuxt-link>
      <nuxt-link
        to="/contact"
        class="navbar-item"
      >
        <strong class="letter-icon title">C</strong>
        <span class="navbar-item-label is-size-4">Contact</span>
      </nuxt-link>
      <div class="navbar-footer">
        © 2020 Haja Randriakoto. All rights reserved. |
        <nuxt-link to="/terms">Terms</nuxt-link>
      </div>
    </div>

    <div ref="trigger" class="navbar-trigger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>

    <div ref="planes" class="planes">
      <div class="plane plane-1"></div>
      <div class="plane plane-2"></div>
      <div class="plane plane-3"></div>
    </div>
    <custom-cursor v-if="isActive" />
  </nav>
</template>

<script>
import Logo from "~/components/Logo";
import CustomCursor from "~/components/Cursor";
import anime from "animejs/lib/anime.es.js";

export default {
  data() {
    return {
      isActive: false,
      scroll_y: 0,
      indicator_width: "0%"
    };
  },

  components: {
    CustomCursor,
    Logo
  },

  watch: {
    $route(to, from) {
      if (this.isActive) {
        this.hideItems();
        this.isActive = false;
      }
    }
  },

  computed: {
    classes() {
      let classes = "";
      if (this.isActive) {
        classes += "is-active ";
      }
      if (this.scroll_y > 56) {
        classes += "is-scrolled ";
      }

      return classes;
    }
  },

  methods: {
    planesTransitionIn(link) {
      const planes = this.$refs.planes.querySelectorAll(".plane");
      anime({
        targets: planes,
        translateY: ["-100%", 0],
        duration: anime.stagger(200, { start: 600 }),
        easing: "easeInOutExpo",
        complete: () => {
          this.$router.push({ path: link });
        }
      });
    },

    planesTransitionOut() {
      const planes = this.$refs.planes.querySelectorAll(".plane");
      this.$refs.navbar.querySelectorAll(".navbar-item").forEach(item => {
        item.removeAttribute("style");
      });
      this.isActive = false;
      anime({
        targets: planes,
        translateY: [0, "100%"],
        duration: anime.stagger(100, { start: 600 }),
        easing: "easeInOutExpo"
      });
    },

    trackScroll() {
      document.addEventListener(
        "scroll",
        e => {
          this.scroll_y = window.scrollY;
          const percentage =
            this.scroll_y / (document.body.offsetHeight - window.innerHeight);
          this.indicator_width = percentage * 100 + "%";
        },
        { passive: true }
      );
    },

    showItems() {
      const navbar = this.$refs.navbar;
      const items = navbar.querySelectorAll(".navbar-item");
      anime({
        targets: items,
        translateY: ["-100vh", 0],
        duration: anime.stagger(100, { start: 600 }),
        easing: "easeInOutExpo"
      });
    },

    hideItems() {
      const navbar = this.$refs.navbar;
      const items = navbar.querySelectorAll(".navbar-item");
      anime({
        targets: items,
        delay: 300,
        translateY: [0, "100vh"],
        duration: anime.stagger(100, { start: 700 }),
        easing: "easeInOutExpo"
      });
    },

    initNavbar() {
      const navbar = this.$refs.navbar;
      const trigger = this.$refs.trigger;
      this.isActive = false;

      this.trackScroll();

      trigger.addEventListener("click", () => {
        if (!this.isActive) {
          this.showItems();
          this.isActive = true;
        } else {
          this.hideItems();
          this.isActive = false;
        }
      });
    }
  },

  mounted() {
    this.initNavbar();
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/styles/_var";
.scroll-indicator {
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  width: 0;
  background: $primary;
  z-index: 3;
}

.planes {
  z-index: 999999;
  .plane {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    transform: translateY(-100%);
  }

  .plane-1 {
    background: $white;
    z-index: 1;
  }

  .plane-2 {
    background: $primary;
    z-index: 2;
  }

  .plane-3 {
    background: $black-bis;
    z-index: 3;
  }
}

.navbar .container {
  display: flex;
  align-items: center;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  z-index: 1000;
  transition: all 0.3s;
  color: $dark;
  &.is-scrolled {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background: $light;
  }
}

.navbar-logo {
  color: currentColor;
}

.navbar-logo.is-active {
  pointer-events: none;
}

.navbar-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  pointer-events: none;
  .navbar-item {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    transform: translateY(-100vh);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    transition: none;
    cursor: pointer;
    position: relative;
    .navbar-item-label {
      transition: all 0.3s;
      color: rgba($white, 0.6);
      display: inline-block;
      position: relative;
      &:after,
      &:before {
        content: "";
        display: block;
        height: 2px;
        width: 16px;
        background: currentColor;
        position: absolute;
        top: calc(50% - 1px);
        left: -1.5em;
        border-radius: 100px;
        transform-origin: 100% 100%;
        transform: scaleX(0);
        transition: transform 0.3s;
        opacity: 0.5;
      }
      &:after {
        left: unset;
        right: -1.5em;
        transform-origin: 0 0;
      }
    }
    &:nth-child(1) {
      background: rgba($primary, 1);
    }
    &:nth-child(2) {
      background: rgba(darken($primary, 2%), 1);
    }
    &:nth-child(3) {
      background: rgba(darken($primary, 4%), 1);
    }
    &:nth-child(4) {
      background: rgba(darken($primary, 6%), 1);
    }

    &.is-active,
    &:hover {
      span {
        color: $white;
        &:after,
        &:before {
          transform: scaleX(1);
        }
      }
    }

    &:hover {
      .letter-icon {
        color: rgba($white, 0.15);
      }
      span {
        color: $white;
      }
    }
  }
}

.is-active .navbar-menu {
  pointer-events: initial;
}

.navbar-item.nuxt-link-exact-active {
  pointer-events: none;
  background: $white;
  background-image: color;
  &:after,
  &:before {
    opacity: 0.1;
    background: $white;
  }
  .navbar-item-label {
    transform: translateY(1rem);
    &:after,
    &:before {
      transform: none;
      background: $white;
    }
    color: $white;
    opacity: 0;
  }
  .letter-icon {
    color: rgba($white, 1);
    transform: translate(-50%, -50%) scale(1);
  }
}

.navbar-trigger {
  margin-left: auto;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border: solid 2px transparent;
  cursor: pointer;
  border-radius: 1000px;
  z-index: 1000;
  background: $primary;
  span {
    display: block;
    width: 18px;
    height: 2px;
    background: $light;
    margin-left: 9px;
    transition: all 0.3s;
    border-radius: 3px;
    &:nth-child(1) {
      margin-top: 10px;
      width: 9px;
    }
    &:nth-child(2) {
      margin-top: 5px;
    }
    &:nth-child(3) {
      margin-top: 5px;
      width: 9px;
      transform: translateX(9px);
    }
  }
}

.is-active .navbar-trigger {
  span {
    &:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
      width: 18px;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
      width: 18px;
    }
    &:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
      width: 18px;
    }
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    left: 0;
  }
}

.navbar-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  color: black;
  font-size: $size-7;
  text-align: right;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  text-align: center;
  color: $grey-lighter;
  a {
    color: white;
  }
}

.is-active .navbar-footer {
  visibility: visible;
  opacity: 1;
}

@media screen and (max-width: $tablet) {
  .navbar-menu {
    flex-wrap: wrap;
  }
  .navbar-footer {
    transform-origin: 100% 0;
    transform: translateX(-100vh) rotate(-90deg);
    width: 100vh;
    left: unset;
    bottom: unset;
  }
}

.navbar .letter-icon {
  transition: all 0.3s;
  font-size: calc((100vh + 100vw) / 9);
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.75);
  color: rgba(black, 0.04);
}
</style>
