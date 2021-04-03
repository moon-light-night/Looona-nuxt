<template>
  <section class="about">
    This service is free and cross-platform as it works when connected to the
    network. Remind you that for the speech recognizer to work correctly, you
    should <b>only</b> use the latest version of the
    <span class="emerald about__field">Google Chrome</span> or
    <span class="emerald about__field">Opera</span>. As the project develops,
    new features will be added and possibly an official application for the
    Looona, which you can find in Google Store or App Store. For assistance in
    project support or suggestions for improvement, application modernization,
    you can contact the developer by
    <nuxt-link to="/contacts" class="emerald about__field">contacts</nuxt-link>
  </section>
</template>

<style scoped>
.about {
  width: 900px;
  margin: 0 auto;
  padding: 10px;
  font-size: 20px;
  color: #f5f7fa;
  line-height: 1.625;
}
.emerald:hover {
  color: #00e0a1;
}
.about__field {
  background-color: #2d3748;
  border-radius: 2px;
  padding: 0 5px;
}
</style>
