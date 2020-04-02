<template>
  <div class="scroll-anim">
    <p class="is-size-7 m-b-0_5rem has-text-grey-light">Scroll</p>
    <div class="mouse anime-reveal"></div>
  </div>
</template>

<style lang="scss">
@import "~/assets/styles/_var";

.scroll-anim {
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  transform: translateX(-50%);
  .mouse {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 24px;
    border: solid 2px $dark;
    border-radius: 1000px;
    &:after {
      content: "";
      display: block;
      height: 6px;
      width: 2px;
      background: $dark;
      animation: scroll-anim 2s infinite ease-in-out;
      opacity: 0;
    }
  }
}

@keyframes scroll-anim {
  0% {
    transform: translateY(-8px);
  }
  20% {
    opacity: 1;
  }
  50% {
    transform: translateY(8px);
    opacity: 0;
  }
}
</style>