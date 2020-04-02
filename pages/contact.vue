<template>
  <Page sectionClasses="has-background-light" headerClasses=" is-light has-background-waves has-overlay-info">
    <div slot="header" class="container has-text-centered">
      <p class="heading">Get in touch</p>
      <h1 class="title is-1">Contact</h1>
    </div>
    <div class="has-text-centered">
      <p class="title is-3 m-b-2rem">
        How can I help you ?
      </p>
    </div>
    <form
        @submit.prevent="onSubmit()"
        class="control box"
        style="max-width: 450px"
      >
        <div
          class="columns is-variable is-1 is-mobile"
          style="margin-bottom: 0"
        >
          <div class="field column" style="margin-bottom: 0">
            <label for="" class="label">Name</label>
            <input v-model="contact.name" required class="input" type="text" />
          </div>
          <div class="field column">
            <label for="" class="label">Email</label>
            <input v-model="contact.email" required class="input" type="email" />
          </div>
        </div>
        <div class="field">
          <label for="" class="label">Subject</label>
          <input v-model="contact.subject" required type="text" class="input" />
        </div>
        <div class="field">
          <label  for="" class="label">Message</label>
          <textarea
            v-model="contact.message" required
            name=""
            id=""
            cols="30"
            rows="5"
            class="textarea"
          ></textarea>
        </div>
        <button :class="{'is-loading': isLoading }" type="submit" class="button is-large is-fullwidth is-primary">
          <span>Send</span>
        </button>
        <div  v-if="error" class="message is-warning m-t-1_5rem">
          <div class="message-body">
            <p>An error has occured, please try again</p>
          </div>
        </div>
      </form>
  </Page>
</template>

<script>
import Page from "~/components/Page";
import axios from "axios";

export default {
  data() {
    return {
      error: false,
      isLoading: false,
      contact: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  },

  components: {
    Page
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      axios
        .post("https://sheetdb.io/api/v1/dq7dahffeemfh", {
          data: [
            {
              name: this.contact.name,
              email: this.contact.email,
              subject: this.contact.subject,
              message: this.contact.message,
              time: new Date()
            }
          ]
        })
        .then(() => {
          this.$router.push({ path: "/thank-you" });
          this.isLoading = false;
        })
        .catch(e => {
          this.error = true;
          this.isLoading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_var";
.box {
  margin: 0 auto;
}
</style>