<template>
  <span class="icon">
    <slot />
  </span>
</template>

<style lang="scss">
  .icon {
    svg {
      fill: currentColor;
      height: 1.5em;
      width: 1.5em;
      object-fit: contain;
    }
  }
</style>