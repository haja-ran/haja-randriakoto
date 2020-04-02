<template>
  <Page v-if="item" sectionClasses="is-paddingless" :thumbnail="item.thumbnail.default" headerClasses="is-medium is-light">
    <div slot="header" class="has-text-centered">
      <h1 class="title is-1">{{item.title}}</h1>
      <p class="subtitle">{{item.subtitle}}</p>
    </div>
    <div>
      <section class="section has-background-white is-fullwidth">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-5">
              <div class="columns is-multiline is-mobile">
                <div class="column is-6 is-size-7">
                  <p class="heading">
                    Pitch
                  </p>
                  <p>
                    {{ item.pitch }}
                  </p>
                </div>
                <div class="column is-6 is-size-7">
                  <p class="heading">
                    Role
                  </p>
                  <p>
                    {{ item.roles }}
                  </p>
                </div>
                <div class="column is-6 is-size-7">
                  <p class="heading">
                    Context
                  </p>
                  <p>
                    {{ item.context }}
                  </p>
                </div>
                <div class="column is-6 is-size-7">
                  <p class="heading">
                    Client
                  </p>
                  <p>
                    {{ item.client }}
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-7 is-full-mobile">
              <img :src="item.thumbnail.default" :srcset="item.thumbnail.retina" />
            </div>
          </div>
        </div>
      </section>
      <section class="section is-fullwidth">
        <div class="container">
          <!-- <translate-on-scroll
            v-for="(img, index) in images"
            :start="{ translate: [isEven(index) ? 46 : -46, 0, 0] }"
            :parallax="true"
            :key="index"
          >
            <figure class="image m-b-1_5rem p-b-1_5rem">
              <img :src="img" />
            </figure>
          </translate-on-scroll> -->
          <figure
            :key="index"
            v-for="(img, index) in images"
            class="image m-b-1_5rem p-b-1_5rem"
          >
            <img :src="img.default" :srcset="img.retina" />
          </figure>
        </div>
      </section>
      <section class="has-background-black-ter has-text-white section is-paddingless is-fullwidth">

        <div class="columns is-gapless">
          <div v-if="previous_item" class="column">
            <nuxt-link
              tag="div"
              :to="'/work/' + previous_item.id"
              class="section has-text-centered is-medium portfolio-nav-link"
            > 
              <img :src="previous_item.thumbnail.default" class="thumbnail">
              <p class="heading">Previous</p>
              <p class="title has-text-white">
                {{ previous_item.title }}
              </p>
            </nuxt-link>
          </div>

          <div v-if="next_item" class="column ">
            <nuxt-link
              tag="div"
              :to="'/work/' + next_item.id"
              class="section has-text-centered is-medium portfolio-nav-link"
            >
              <img :src="next_item.thumbnail.default" class="thumbnail">
              <p class="heading">Next</p>
              <p class="title has-text-white">
                {{ next_item.title }}
              </p>
            </nuxt-link>
          </div>

          <div v-if="!next_item" class="column ">
            <nuxt-link
              tag="div"
              :to="'/work/'"
              class="section has-text-centered is-medium portfolio-nav-link"
            >
              <p class="heading">Work</p>
              <p class="title has-text-white">
                All
              </p>
            </nuxt-link>
          </div>
          
        </div>
      </section>

    </div>
  </Page>
</template>

<script>
import Icon from "~/components/Icon";
import ScrollAnim from "~/components/ScrollAnim";
import Page from "~/components/Page";
import api from "~/services/api";

export default {
  components: {
    ScrollAnim,
    Icon,
    Page
  },

  data() {
    return {
      header_height: 0,
      scrollY: 0,
      portfolios: []
    };
  },

  computed: {
    id() {
      return this.$route.params.id;
    },

    item() {
      let filter = this.portfolios.filter(obj => {
        return obj.id === this.id;
      });
      return filter[0];
    },

    images() {
      return this.item.images;
    },

    item_index() {
      return this.findIndex(this.portfolios, "id", this.id);
    },

    next_item() {
      if (this.portfolios[this.item_index + 1]) {
        return this.portfolios[this.item_index + 1];
      }
      return false;
    },

    previous_item() {
      if (this.portfolios[this.item_index - 1]) {
        return this.portfolios[this.item_index - 1];
      }
      return false;
    }
  },

  methods: {
    findIndex(array, attr, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return i;
        }
      }
      return -1;
    },

    isEven(value) {
      if (value % 2 == 0) return true;
      else return false;
    }
  },

  beforeCreate() {
    api.getPortfolios().then(res => {
      this.portfolios = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_var";
.portfolio-nav-link {
  cursor: pointer !important;
  transition: all 0.3s;
  overflow: hidden;
  position: relative;
  background-color: $black;
  .heading,
  .title {
    position: relative;
    z-index: 2;
    transition: color, 0.3s;
  }
  .thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.3;
    filter: grayscale(100);
    object-fit: cover;
    transition: all 1s;
  }
  &:hover {
    background: $primary;
    .heading {
      color: $white;
    }
    .thumbnail {
      transform: scale(1.05);
    }
  }
}
</style>
