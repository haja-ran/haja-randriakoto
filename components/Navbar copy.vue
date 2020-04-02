<template>
  <anime-reveal
    tag="nav"
    class="navbar is-fixed-top"
    :class="computed_classes + (is_active ? ' is-active' : '')"
    :style="styles"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="scroll-indicator" :style="`width: ${indicator_width}`"></div>
    <div class="container">
      <div class="navbar-brand">
        <VueScrollactive
          active-class="is-active"
          :duration="1000"
          bezier-easing-value=".85,0,.15,1"
          class="navbar-end"
          :offset="0"
          :modifyUrl="false"
          v-on:itemchanged="onNavigation"
        >
          <a href="#home" class="navbar-item anime-reveal scrollactive-item">
            <Logo />
          </a>
        </VueScrollactive>

        <a
          @click="is_active = !is_active"
          :class="{ 'is-active': is_active }"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': is_active }"
      >
        <VueScrollactive
          active-class="is-active"
          :duration="1000"
          bezier-easing-value=".85,0,.15,1"
          class="navbar-end"
          :offset="0"
          :modifyUrl="false"
          v-on:itemchanged="onNavigation"
        >
          <a href="#about" class="navbar-item scrollactive-item anime-reveal">
            About
          </a>

          <a
            href="#expertise"
            class="navbar-item scrollactive-item anime-reveal"
          >
            Expertise
          </a>

          <a href="#work" class="navbar-item scrollactive-item anime-reveal">
            Work
          </a>

          <a href="#blog" class="navbar-item scrollactive-item anime-reveal">
            Blog
          </a>

          <a href="#contact" class="navbar-item scrollactive-item anime-reveal">
            Get in touch
          </a>
        </VueScrollactive>
      </div>
    </div>
  </anime-reveal>
</template>

<script>
import Logo from "~/components/Logo";
import AnimeReveal from "~/components/fx/AnimeReveal";
import VueScrollactive from "~/node_modules/vue-scrollactive/src/scrollactive.vue";

export default {
  components: {
    AnimeReveal,
    Logo,
    VueScrollactive
  },

  data() {
    return {
      text_color: false,
      background_color: false,
      is_active: false,
      scroll_y: 0,
      indicator_width: "0%",
      classes: {
        dark: "is-dark has-background-transparent",
        unscrolled: "p-t-1_5rem p-b-1_5rem ",
        scrolled: "is-black"
      }
    };
  },

  computed: {
    computed_classes() {
      let classes;

      if (this.scroll_y < 196) {
        classes = this.classes.unscrolled + this.classes.dark;
      } else {
        classes = this.classes.scrolled;
      }

      return classes;
    },

    styles() {
      let styles = "";
      if (this.background_color) {
        styles += `background-color: ${this.background_color}; `;
      }
      if (this.text_color) {
        styles += `color: ${this.text_color};`;
      }
      console.log(styles);
      return styles;
    }
  },

  methods: {
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

    onNavigation(event, currentItem, lastActiveItem) {
      this.is_active = false;
      const doNothing = () => {
        this.text_color = false;
        this.background_color = false;
      };

      if (!currentItem) return doNothing();
      const targetId = currentItem.getAttribute("href");
      if (!targetId) return doNothing();

      const el = document.querySelector(targetId);
      const bgColor = el.getAttribute("data-nav-bg");
      const textColor = el.getAttribute("data-nav-color");
      this.text_color = textColor;
      this.background_color = bgColor;
    }
  },

  mounted() {
    this.trackScroll();
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/styles/_var.scss";

.navbar {
  transition: all 0.3s;
  display: flex;
  align-items: center;
  &.has-background-transparent {
    background-color: transparent;
  }
}

.scroll-indicator {
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  width: 0;
  background: $primary;
  z-index: 3;
}

.navbar-item {
  &:hover,
  &.is-active {
    color: $primary !important;
  }
  background: transparent;
  &:focus {
    background: transparent !important;
  }
}

.navbar .navbar-menu .navbar-item {
  color: inherit;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
}

.navbar.is-light {
  .navbar-item {
    color: $grey;
  }
}

.navbar-burger {
  .burger span {
    height: 2px;
  }
}

@media screen and (max-width: $desktop) {
  .navbar {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    &.is-active {
      background-color: $black;
    }
  }
  .is-active .navbar-burger.burger {
    span {
      background: white;
    }
  }
  .navbar-menu {
    background: rgba($black-bis, 0.9);
    backdrop-filter: blur(10px);
    height: 100vh;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.3s;
    .navbar-item {
      font-size: 1rem;
      text-align: center;
      width: 100%;
    }
  }
  .is-active .navbar-menu {
    visibility: visible;
    opacity: 1;
    pointer-events: unset;
  }
}
</style>
