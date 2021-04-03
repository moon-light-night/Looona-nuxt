<template>
  <section class="docs">
    <div class="docs__container">
      <div class="docs__desc" v-if="this.page === 'redirect'">
        <h2 class="docs__content-item-title">Redirect to website</h2>
        <p class="docs__content-item-text">
          In order to go to the site, you need to click once on the
          <code class="docs__field"><b>Ask Looona</b></code> and confirm the
          permission to use the microphone in the browser and say for example
          <code class="docs__field"><b>"Looona go to finviz.com"</b></code> or
          <code class="docs__field"
            ><b>"Луна, перейди на <i>финвиз дот ком</i>"</b></code
          >.
          <br />
          <b class="docs__warn docs__field"
            >It's necessary to pronounce the words loudly, clearly and with an
            arrangement</b
          >
        </p>
      </div>

      <div class="docs__desc" v-if="this.page === 'pronouncation'">
        <h2 class="docs__content-item-title">Pronunciation of phrases</h2>
        <p class="docs__content-item-text">
          The current feature currently supports certain phrases for
          pronunciation. You should to click once on
          <code class="docs__field"><b>Utter by Looona</b></code> and say the
          phrase. If you manage to get into the desired phrase -
          congratulations<code class="emerald">＼(￣▽￣)／</code>
          the full list of phrases is periodically updated and you can find out
          from the developer of this service by contacting him through the
          <code class="docs__field"
            ><nuxt-link to="/home/contacts" class="emerald contacts__link"
              >contacts</nuxt-link
            ></code
          >
        </p>
      </div>

      <div class="docs__desc" v-if="this.page === 'stop'">
        <h2 class="docs__content-item-title">Stop Looona</h2>
        <p class="docs__content-item-text">
          This function stops the Looona from working. To resume it's work, you
          must reload the page
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "default",
  data: () => ({
    pageId: ""
  }),
  computed: {
    page() {
      return this.$store.getters["docs_page/RETURN_PAGE_ID"];
    }
  }
};
</script>

<style scoped>
.docs__content-item-text {
  color: #f5f7fa;
  line-height: 1.625;
  font-size: 18px;
}
.docs__content-item-title {
  color: #00c58e;
  margin: 0 0 20px;
}
.docs__field {
  background-color: #2d3748;
  border-radius: 2px;
  padding: 0 5px;
}
.docs__warn {
  color: #fd9170;
}
.contacts__link:hover {
  color: #00e0a1;
}
</style>
