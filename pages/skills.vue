<template>
  <Page sectionClasses="is-medium" headerClasses="is-light has-background-waves is-medium has-overlay-primary">
    <div slot="header" class="has-text-centered">
      <h1 class="title is-1">
        Skills
      </h1>
    </div>
    <div class="columns m-b-1_5rem">
      <div class="column is-4 is-offset-2">
        <p class="title is-3">Design</p>
      </div>
      <div class="column is-6">
        <p class="is-size-4">UI / UX</p>
        <p class="is-size-5">Adobe XD</p>
        <p class="is-size-5">Affinity Designer</p>
        <p class="is-size-5">Photoshop</p>
        <p class="is-size-5">Lightroom</p>
        <p class="is-size-5">Illustrator</p>
      </div>
    </div>
    <div class="columns m-b-1_5rem">
      <div class="column is-4 is-offset-2">
        <p class="title is-3">Programming</p>
      </div>
      <div class="column is-6">
        <p class="is-size-4">Web fundamentals</p>
        <p class="is-size-5">HTML5 / CSS3 / Js</p>
        <p class="is-size-4">Javascript</p>
        <p class="is-size-5">Vue Js</p>
        <p class="is-size-5">React Js</p>
        <p class="is-size-5">Node Js</p>
        <p class="is-size-4">PHP</p>
        <p class="is-size-5">Wordpress</p>
      </div>
    </div>
    <div class="columns m-b-1_5rem">
      <div class="column is-4 is-offset-2">
        <p class="title is-3">Education</p>
      </div>
      <div class="column is-6">
        <p class="is-size-4">2017 — EMD School of Business</p>
        <p class="is-size-5">Master's Degree - Web & Digital Marketing</p>
        <p class="is-size-4"> 2014 — EMD School of Business</p>
        <p class="is-size-5">Bachelor - Management</p>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from "~/components/Page";
export default {
  components: {
    Page
  }
};
</script>