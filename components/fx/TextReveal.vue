<template>
  <div v-observe-visibility="{
        callback: visibilityChanged,
        throttle: 250,
        throttleOptions: { leading: 'visible' } 
      }" class="is-relative">
    <div class="text-reveal" :class="{ 'is-visible' : isVisible }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible 
    }
  }
}
</script>

<style lang="scss" scoped>
.text-reveal {
  opacity: 0;
  transition: all ease-in-out .7s;
  transform: translateY(1rem);
  transition-delay: .3s;
  &.is-visible {
    opacity: 1;
    transform: none;
  }
}
</style>