<template>
  <div v-observe-visibility="{
        callback: visibilityChanged,
        throttle: 250,
        throttleOptions: { leading: 'visible' } 
      }" class="is-relative">
    <transition>
      <slot v-if="isVisible"/>
    </transition>
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