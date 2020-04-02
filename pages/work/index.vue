<template>
  <Page
    headerClasses="is-medium has-text-centered has-background-waves has-overlay-info"
    sectionClasses="is-paddingless"
  >
    <div slot="header">
      <p class="heading">Curated projects</p>
      <p class="title is-1">Work</p>
    </div>

    <nuxt-link
      tag="section"
      :to="'/work/' + item.id"
      v-for="item in portfolios"
      :key="item.id" class="hero is-fullheight is-fullwidth portfolio-item"
      :style="`background-color: ${ item.theme }`">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-vcentered is-half">
              <p class="title">{{item.title}}</p>
              <p class="subtitle">{{item.subtitle}}</p>
              <nuxt-link :to="'/work/' + item.id" class="button is-outlined is-dark is-rounded">
                <span>Explore</span>
              </nuxt-link>
            </div>
            <div class="column is-half">
              <nuxt-link :to="'/work/' + item.id" class="image">
                <img :src="item.thumbnail.default">
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </Page>
</template>

<script>
import Page from "~/components/Page";
import Icon from "~/components/Icon";
import api from "~/services/api";

export default {
  components: {
    Icon,
    Page
  },

  data() {
    return {
      portfolios: []
    };
  },

  beforeCreate() {
    api.getPortfolios().then(res => {
      this.portfolios = res.data;
    });
  }
};
</script>

<style lang="scss">
@import "~/assets/styles/_var";

.portfolio-item {
  padding: 6rem 0;
  .title {
    font-size: calc(((100vh + 100vw) / 100) * 3) !important;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: $primary;
    }
  }
  .image {
    position: relative;
    transition: all 0.3s;
    img {
      position: relative;
      z-index: 2;
      box-shadow: -5px 5px 30px rgba(black, 0.15);
    }
    &:after {
      position: absolute;
      display: block;
      content: "";
      background: white;
      transition: all 0.3s;
      top: 0.5rem;
      left: -0.5rem;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    &:hover {
      transform: translate(0.5rem, -0.5rem);
      &:after {
        transform: translate(-0.5rem, 0.5rem);
      }
    }
  }
}
</style>
