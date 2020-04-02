<template>
  <anime-reveal
    class="hero is-fullheight is-light has-background-white is-relative"
  >
    <hero-background class="hero-background anime-reveal" />  
    <!-- <img
      class="hero-background-hand anime-reveal is-hidden-mobile"
      src="/img/art/hi.png"> -->
    <div class="hero-body m-t-2rem">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column has-text-centered is-3 is-offset-1">
            <h1 class="title is-1 anime-reveal">
              developer
              <br class="is-hidden-mobile" />
              <span class="has-text-primary">&</span> designer
            </h1>
          </div>
          <div class="column anime-reveal is-offset-2 is-5">
            <div class="media profile-media" style="align-items:center">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img class="is-rounded" src="/img/haja-randriakoto-portrait-bw.jpg">
                </figure>
              </div>
              <div class="media-content">
                <p class="has-text-weight-bold" >
                  Hello
                </p>
                <p>
                  I'm <b>Haja</b>, an UI <b>designer</b> & front-end
                  <b>developer</b>, born in <b>Madagascar</b>, based in
                  <b>Marseille</b>
                </p>    
              </div>
            </div>          
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot p-b-1_5rem p-r-1_5rem p-l-1_5rem">
      <div class="container">
        <div class="level is-mobile">
          <div class="level-left">
            <nuxt-link
              to="/contact"
              class="button is-primary is-rounded anime-reveal"
            >
              <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M14 4c-.29 0-.58.07-.85.2L9.8 5.73a1.56 1.56 0 001.2 2.88l2.98-1.09 5.4 5.24c.4.38.61.9.61 1.44V15h1a1 1 0 001-1V6.39a1 1 0 00-1.32-.95L19 6l-4.14-1.82A2.08 2.08 0 0014 4zM3 5a1 1 0 00-1 1v9h1l6.08 5.32c1.08.94 2.71.89 3.73-.13l4.24-4.24c.52-.52.78-1.21.8-1.9l-4.35-4.2-1.81.65A3.55 3.55 0 017.3 8.8 3.58 3.58 0 017.1 6c.12-.37.32-.7.55-1H3z"
                    />
                  </svg>
                </svg>
              </Icon>
              <span>Hire me</span>
            </nuxt-link>
          </div>
          <div class="level-right buttons">
            <a
              target="_blank"
              href="https://codepen.io/haja-ran"
              class="button anime-reveal is-dark is-outlined"
              style="border-radius: 1000px"
            >
              <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12 2L2 8.6v6.8L12 22l9.99-6.6V8.6zm0 12l-3-2 3-2 3 2zm1-5.74v-3.2l6.23 4.12-2.43 1.62zm-2 0L7.2 10.8 4.77 9.18 11 5.06zM5.4 12l-1.4.93v-1.86zm1.8 1.2l3.8 2.54v3.2l-6.24-4.12zm5.8 2.54l3.8-2.54 2.43 1.62L13 18.94v-3.2zM18.6 12l1.4-.93-.01 1.85z"
                  />
                </svg>
              </Icon>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hrandriakoto/"
              class="button anime-reveal is-dark is-outlined"
              style="border-radius: 1000px"
            >
              <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 3H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7.7 17c-.7 0-1.2-.6-1.2-1.3v-4.4c0-.7.5-1.3 1.2-1.3s1.3.6 1.3 1.3v4.4c0 .7-.6 1.3-1.3 1.3zm0-8.3c-.8 0-1.3-.5-1.3-1.2S7 6.3 7.8 6.3c.8 0 1.3.5 1.3 1.2s-.5 1.2-1.4 1.2zm9 8.3c-.6 0-1.1-.5-1.1-1.2v-2.6c0-1-.7-1.2-1-1.2s-1 0-1 1.2v2.6c0 .7-.5 1.2-1.2 1.2h-.1c-.7 0-1.2-.5-1.2-1.2v-4.5c0-.7.5-1.3 1.2-1.3s1.3.6 1.3 1.3c0 0 .3-1.3 2.2-1.3 1.2 0 2.2 1 2.2 3.2v2.6c0 .7-.5 1.2-1.2 1.2z"/>
                </svg>
              </Icon>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/hajar.dev/"
              class="button anime-reveal is-dark is-outlined"
              style="border-radius: 1000px"
            >
              <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M8 3a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5H8zm0 2h8a3 3 0 013 3v8a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3zm9 1a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1zm-5 1a5 5 0 10.01 10.01A5 5 0 0012 7zm0 2a3 3 0 110 6 3 3 0 010-6z"
                  />
                </svg>
              </Icon>
            </a>
          </div>
        </div>
      </div>
      <scroll-anim></scroll-anim>
    </div>
  </anime-reveal>
</template>

<script>
import HeroBackground from "~/components/HeroBackground";
import AnimeReveal from "~/components/fx/AnimeReveal";
import TranslateOnScroll from "~/components/fx/TranslateOnScroll";
import Icon from "~/components/Icon";
import ScrollAnim from "~/components/ScrollAnim";

export default {
  components: {
    TranslateOnScroll,
    AnimeReveal,
    HeroBackground,
    ScrollAnim,
    Icon
  }
};
</script>

<style scroped lang="scss">
@import "~/assets/styles/_var.scss";
// .hero-background-hand {
//   position: absolute;
//   bottom: 0;
//   right: calc(50% - 45vh);
//   height: 90vh;
// }

.hero {
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.profile-media {
  background: $light;
  color: $dark;
  padding: 1.5rem;
}
</style>
