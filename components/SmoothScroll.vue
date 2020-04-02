<template>
  <div ref="outer"  class="smooth-scroll">
    <div ref="inner" class="smooth-inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    SmoothScroll(
      args = {
        inner: ".smoooth-inner", //Your content wrapper
        outer: ".smoooth", //The inner scrollable content
        transition: "cubic-bezier(.05,.50,.45,1) 3s", //Easing while scrolling & timing. This is CSS.
        transitionEnd: "cubic-bezier(.15,.68,.44,1.26) 1s", //Easing when reaching the end of scrolling & timing. This is CSS.
        scrollRatio: 0.75, //Scroll speed, higher is faster
        touchRatio: 1, //Scroll speed on mobile devices
        skewRatio: 0.06, //Skew effect on content, set it to zero to disable it
        touchSkewRatio: 0.01, //Skew effect on mobile because it has to be calculated differently
        scrollProgress: true,
        scrollProgressColor: "#333",
        scrollProgressWidth: "4px"
      }
    ) {
      let head = document.querySelector("head");

      let styles = document.createElement("style");
      styles.innerHTML = `
      html, body { overflow: hidden; width: 100vw; height: 100vh; } ${args.outer} { overflow: hidden; }
      .smoooth-scroll-progress { position: fixed; right: 0; top: 0; background: ${args.scrollProgressColor}; width: ${args.scrollProgressWidth}; z-index: 999999; }
      `;
      head.appendChild(styles);

      let body,
        scrollProgress,
        inner,
        outer,
        position,
        innerY,
        windowY,
        touchStartPos,
        touchStart,
        touchEnd,
        touchMove,
        touchDelta,
        skew;

      inner = this.$refs.inner;
      outer = this.$refs.inner;
      position = 0;
      innerY = inner.clientHeight;
      windowY = window.innerHeight;
      skew = 0;

      window.addEventListener("resize", function() {
        innerY = inner.clientHeight;
        windowY = window.innerHeight;
      });

      if (args.scrollProgress) {
        body = document.querySelector("body");
        scrollProgress = document.createElement("div");
        scrollProgress.classList.add("smoooth-scroll-progress");
        body.appendChild(scrollProgress);
      }

      function translateContent() {
        if (position <= -(innerY - windowY)) {
          position = -(innerY - windowY);
          inner.style.transition = args.transitionEnd;
          inner.style.transform = `translate3d(0,${position}px,0)`;
        } else if (position >= 0) {
          position = 0;
          inner.style.transition = args.transitionEnd;
          inner.style.transform = `translate3d(0,${position}px,0)`;
        } else {
          inner.style.transition = args.transition;
          inner.style.transform = `translate3d(0,${position}px,0)skewY(${skew}deg)`;
        }
        if (args.scrollProgress) {
          scrollProgress.style.height = `${(-position / (innerY - windowY)) *
            windowY}px`;
        }
        requestAnimationFrame(translateContent);
      }

      function onScroll(e) {
        position -= e.deltaY * args.scrollRatio;
        skew = e.deltaY * args.skewRatio;
      }

      window.addEventListener(
        "wheel",
        function(e) {
          onScroll(e);
        },
        { passive: true }
      );

      window.addEventListener(
        "touchstart",
        function(e) {
          touchStart = e.touches[0].clientY;
          touchStartPos = position;
        },
        { passive: true }
      );

      window.addEventListener(
        "touchmove",
        function(e) {
          touchMove = e.touches[0].clientY;
          touchDelta = touchStart - touchMove;
          position = touchStartPos - touchDelta * args.touchRatio;
          skew = touchDelta * args.touchSkewRatio;
        },
        { passive: true }
      );

      window.addEventListener(
        "touchend",
        function(e) {
          touchStartPos = position;
          touchMove = 0;
          skew = 0;
        },
        { passive: true }
      );

      translateContent();
    }
  },
  mounted() {
    this.SmoothScroll();
  }
};
</script>

<style lang="scss" scoped>
.smooth-scroll {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
</style>