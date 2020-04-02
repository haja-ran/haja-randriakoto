<template>
  <div>
    <main-hero id="home"></main-hero>
    <section
      data-nav-bg="whitesmoke"
      data-nav-color="currentColor"
      id="about"
      class="hero is-medium is-fullheight is-light"
    >
      <div class="hero-body">
        <div class="container">
          <anime-reveal class="columns is-vcentered">
            <div class="column is-offset-1 is-4 anime-reveal">
              <div class="m-b-1_5rem">
                <h3 class="title is-1">My focus</h3>
                <p class="subtitle has-text-cursive is-4">
                  Crafting great experiences
                </p>
              </div>
            </div>
            <div class="column is-6 content anime-reveal">
               <p class=" is-size-5">
                It is not just about the looks, I help your customers reach their
                goals when interacting with your business. I
                truly consider the feelings of your precious users.
              </p>
              <p class=" is-size-5">
                I dive into your world and translate it into a visual
                language. I make things work by crafting high quality
                interactions, whilst conveying the right message to your
                audience.
              </p>
            </div>
          </anime-reveal>
        </div>
      </div>
    </section>

    <section
      id="expertise"
      data-nav-bg="whitesmoke"
      data-nav-color="currentColor"
      class="hero is-black has-background-black-bis is-medium is-fullheight"
    >
      <div class="hero-body">
        <div class="container">
          <anime-reveal class="columns is-vcentered">
            <div class="column  is-offset-1 is-4 anime-reveal">
              <h3 class="title is-1">Expertise</h3>
              <p class="subtitle">This is my cup of tea</p>
            </div>
            <div class="column is-6 anime-reveal">
              <div class="media is-borderless">
                <div class="media-left">
                  <div class="circle-icon">
                    <Icon>
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        stroke-linejoin="round"
                        stroke-miterlimit="2"
                      >
                        <path
                          d="M16.04 0C7.24 0 .08 7.16.08 15.96s7.16 15.96 15.96 15.96S32 24.76 32 15.96 24.84 0 16.04 0zm0 .73c8.4 0 15.23 6.84 15.23 15.23 0 8.4-6.84 15.23-15.23 15.23C7.64 31.2.8 24.36.8 15.96S7.64.73 16.04.73zm0 1.54c-4.78 0-8.98 2.44-11.42 6.15.32.01.62.04.88.04 1.43 0 3.65-.19 3.65-.19.74-.04.82 1.07.08 1.15 0 0-.75.08-1.58.12l5 14.8 3-8.96-2.15-5.84c-.74-.04-1.42-.12-1.42-.12-.74-.04-.66-1.2.07-1.15 0 0 2.27.2 3.62.2 1.43 0 3.65-.2 3.65-.2.74-.04.82 1.07.08 1.15 0 0-.76.08-1.58.12l4.96 14.7 1.35-4.55c.7-1.78 1.04-3.25 1.04-4.42 0-1.7-.6-2.86-1.12-3.77-.69-1.13-1.34-2.1-1.34-3.23 0-1.26.96-2.42 2.3-2.42h.2a13.7 13.7 0 00-9.27-3.58zm12 7.11c.06.44.11.92.11 1.43 0 1.39-.26 2.93-1.03 4.88l-4.2 12.08a13.65 13.65 0 005.12-18.39zm-24.5 1a13.66 13.66 0 006.54 17.89L3.54 10.39zm12.73 6.77l-4.08 11.93c1.23.36 2.5.57 3.85.57 1.59 0 3.11-.3 4.54-.8a1.2 1.2 0 01-.08-.16l-4.23-11.54z"
                          fill-rule="nonzero"
                        />
                      </svg>
                    </Icon>
                  </div>
                </div>
                <div class="media-content">
                  <p class="is-size-5 title m-b-0_75rem">Wordpress</p>
                  <p class="is-size-7">
                    Wordpress is the most popular CMS or “Content Management
                    System” in the world. It allows you to organize your content
                    peacefully. It’s the most versatile and by far the most
                    extendable platform.
                  </p>
                </div>
              </div>
              <div class="media is-borderless">
                <div class="media-left">
                  <div class="circle-icon">
                    <Icon>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path
                          d="M3 6l13 22L29 6H19l-3 5.3L13 6H3zm3.5 2h3.77L16 18l5.73-10h3.77L16 24.1 6.5 8z"
                        />
                      </svg>
                    </Icon>
                  </div>
                </div>
                <div class="media-content">
                  <p class="is-size-5 title m-b-0_75rem">Vue.js</p>
                  <p class="is-size-7">
                    Vue is a modern Javascript framework I use to craft stunning
                    custom experiences. The possibilities are endless, from
                    static sites, to highly dynamic Web Apps or even Mobile
                    apps.
                  </p>
                </div>
              </div>
            </div>
          </anime-reveal>
        </div>
      </div>
    </section>

    <section class="hero is-light is-medium is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h3 class="title is-1 has-text-centered">Work</h3>
          <p class="subtitle m-b-1_5rem has-text-centered">Curated projects</p>
          
          <div class="columns">
            <div v-for="(item, index) in  portfolios" :key="item.id" class="column">
              <div class="card">
                <div class="card-content is-paddingless">
                  <figure class="image">
                    <img :src="item.thumbnail.default">
                  </figure>
                </div>
                <div class="card-content">
                  <p class="title is-size-5">{{item.title}}</p>
                  <p class="subtitle has-text-grey is-size-7">{{item.subtitle}}</p>
                </div>
                <div class="card-footer">
                  <nuxt-link :to="'/work/' + item.id" class="card-footer-item">
                    Explore
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>

          <div class="has-text-right">
            <nuxt-link to="/work" class="button is-rounded is-dark is-outline">
              More
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-light has-background-waves">
      <translate-on-scroll
        :start="{ translate: [0, 50, 0] }"
        :parallax="true"
        class="hero-body"
      >
        <div class="container has-text-centered">
          <p class="heading">Reach out</p>
          <p class="title is-1">Let’s build the website you need</p>
          <nuxt-link to="/contact" class="button is-large is-primary is-rounded">
            I'm here to help you
          </nuxt-link>
        </div>
      </translate-on-scroll>
    </section>


  </div>
</template>

<script>
import Icon from "~/components/Icon.vue";
import MainHero from "~/components/MainHero.vue";
import InstagramPosts from "~/components/InstagramPosts.vue";
import AnimeReveal from "~/components/fx/AnimeReveal.vue";
import TranslateOnScroll from "~/components/fx/TranslateOnScroll.vue";
import ArtScreenStack from "~/components/artwork/ScreenStack.vue";
import api from "~/services/api.js";

export default {
  data() {
    return {
      portfolio_data: []
    };
  },

  components: {
    MainHero,
    Icon,
    InstagramPosts,
    ArtScreenStack,
    TranslateOnScroll,
    AnimeReveal
  },

  computed: {
    portfolios() {
      let items = [];
      for (let i = 0; i < 3; i++) {
        if (this.portfolio_data[i]) {
          items.push(this.portfolio_data[i]);
        }
      }
      return items;
    }
  },

  beforeCreate() {
    api.getPortfolios().then(res => {
      this.portfolio_data = res.data;
    });
  }
};
</script>


<style lang="scss" scoped>
@import "~/assets/styles/_var";

.circle-icon {
  padding: 0.75rem;
  background: $primary;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 100%;
}
</style>