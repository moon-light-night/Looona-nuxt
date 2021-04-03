<template>
  <section class="navbar">
    <li class="navbar__logo"><nuxt-link to="/home">logo</nuxt-link></li>
    <ul class="navbar__list">
      <li class="navbar__list-item">
        <nuxt-link to="/home/documentation">Documentation</nuxt-link>
      </li>
      <li class="navbar__list-item">
        <nuxt-link to="/home/about">About</nuxt-link>
      </li>
      <li class="navbar__list-item">
        <nuxt-link to="/home/contacts">Contacts</nuxt-link>
      </li>
      <li class="navbar__list-item">
        <nuxt-link to="/login">Logout</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  padding: 10px 0 0;
  margin: 0 auto 100px;
}
.navbar__list {
  display: flex;
}
.navbar__list-item {
  margin: 0 20px;
  padding: 5px;
  border-radius: 3px;
  transition-duration: 0.2s;
}
.navbar__logo {
  display: flex;
  align-self: center;

  padding: 5px;
}
a {
  color: #f5f7fa;
}
.navbar__list-item:hover {
  background-color: #00c58e;
}
</style>
