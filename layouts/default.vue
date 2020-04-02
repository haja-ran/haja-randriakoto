<template>
  <div>
    <Navbar ref="navbar" />
    <nuxt ref="page_content" />
    <Footer />
    <Loader />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Loader from "~/components/Loader";

export default {
  components: {
    Navbar,
    Footer,
    Loader
  }
};
</script>