<template>
  <div class="logo">
    <div class="custom-logo">
      <svg
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="bevel"
        stroke-miterlimit="1.5"
        style=""
      >
        <path
          d="M20 39a19 19 0 0019-19h0A19 19 0 0020 1h0A19 19 0 001 20h0a19 19 0 0019 19h0"
          fill="none"
          stroke-width="2.0008158000000003"
          class="GvpARvPD_0 base-color-stroke"
        ></path>

        <path
          d="M15.35 12.6L10.5 26.1s3.1-11.25 6.5-9.72c3.09 1.38-3.1 8.6 0 9.73 1.97.71 3.39-2.66 4.64-5.45 1.13-2.54 2.87-5.79.66-6.54-1.7-.59-3.27 2.24.54 3.65 1.41.52 3.55.9 3.55.9s-3.2 7.08-.82 7.44c2.06.3 4.01-4.46 4.01-4.46"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
          class="GvpARvPD_1 monogram"
        ></path>
      </svg>
    </div>
    <transition name="fade">
      <p :class="{ 'is-hidden' : hideText }" class="logo-text m-l-0_75rem has-text-weight-bold">Haja Randriakoto</p>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    hideText: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/styles/_var.scss";
.logo {
  display: flex;
  align-items: center;
  .title {
    font-size: 1em !important;
    color: currentColor;
  }
  &:hover {
    .base-color-fill {
      fill: $primary;
    }
    .base-color-stroke {
      stroke: $primary;
    }
    .monogram {
      stroke: $primary;
    }
  }
}
.custom-logo {
  height: 2.5em;
  width: 2.5em;
  .base-color-fill {
    fill: currentColor;
    transition: all 0.3s;
  }
  .base-color-stroke {
    stroke: currentColor;
    transition: all 0.3s;
  }
  .monogram {
    stroke: currentColor;
    transition: all 0.3s;
  }
}

.GvpARvPD_0 {
  stroke-dasharray: 120 122;
  stroke-dashoffset: 121;
  animation: GvpARvPD_draw 2000ms ease-in-out 0ms forwards;
  animation-delay: 1s;
}
.GvpARvPD_1 {
  stroke-dasharray: 78 80;
  stroke-dashoffset: 79;
  animation: GvpARvPD_draw 2000ms ease-in-out 0ms forwards;
  animation-delay: 3s;
}

@keyframes GvpARvPD_draw {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes GvpARvPD_fade {
  0% {
    stroke-opacity: 1;
  }
  93.54838709677419% {
    stroke-opacity: 1;
  }
  100% {
    stroke-opacity: 0;
  }
}

.logo-text {
  transition: all 0.4s;
  &.is-hidden {
    opacity: 0;
    display: block !important;
    visibility: hidden;
  }
}
</style>
