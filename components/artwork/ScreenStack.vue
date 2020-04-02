<template>
  <div class="screen-stack">
    <translate-on-scroll
      :start="{ translate: [60, 0, 0], rotate: [60, 90, 0], opacity: 0 }"
      class="screen screen-1"
    >
      <img src="/img/be-creative/screens/screen-mobile-4.jpg" />
    </translate-on-scroll>
    <translate-on-scroll
      :start="{ translate: [90, 20, -40], rotate: [70, 90, 0], opacity: 0 }"
      class="screen screen-2"
    >
      <img src="/img/be-creative/screens/screen-mobile-2.jpg" />
    </translate-on-scroll>
    <translate-on-scroll
      :start="{ translate: [120, 40, -80], rotate: [80, 90, 0], opacity: 0 }"
      class="screen screen-3"
    >
      <img src="/img/be-creative/screens/screen-mobile-3.jpg" />
    </translate-on-scroll>
    <translate-on-scroll
      :start="{ translate: [150, 60, -120], rotate: [90, 90, 0], opacity: 0 }"
      class="screen screen-4"
    >
      <img src="/img/be-creative/screens/screen-mobile-1.jpg" />
    </translate-on-scroll>
    <!-- <translate-on-scroll
      :start="{ translate: [60, 0, 0], rotate: [60, 60, 0] }"
    >
      <figure class="image is-4by5 m-b-1_5rem">
        <img class="box is-paddingless" src="img/be-creative/mock-up-2.jpg" />
      </figure>
    </translate-on-scroll> -->
  </div>
</template>

<script>
import TranslateOnScroll from "~/components/fx/TranslateOnScroll";

export default {
  components: {
    TranslateOnScroll
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_var.scss";

.screen-stack {
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: $radius-large;
  .screen {
    padding-top: 189, 2%;
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: ease-out 5s;
    img {
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(black, 0.08), 0 0 2px rgba(black, 0.04);
    }
  }
  .screen-1 {
    margin-left: -10%;
    margin-top: 2%;
  }

  .screen-2 {
    margin-left: -5%;
    margin-top: 0%;
  }

  .screen-3 {
    margin-left: 0%;
    margin-top: -2%;
  }

  .screen-4 {
    margin-left: 5%;
    margin-top: -4%;
  }
}
</style>
