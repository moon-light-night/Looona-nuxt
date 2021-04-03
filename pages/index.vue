<template>
  <div class="container">
    <nuxt-link to="/login" class="logo">Hello</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: "empty"
};
</script>

<style scoped>
.container {
  /* font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 300;
  letter-spacing: 1px; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* background-color: black; */
}
.logo {
  color: white;
}
</style>
