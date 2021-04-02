<template>
  <div class="home">
    <p class="home__text">
      Hi ヽ(・∀・)ﾉ you're on my service. At the moment it includes the voice
      assistant "Looona" and brief documentation for her. In the direction of
      travel, if I have free time, I'll try to add new features. Pleasant use)
    </p>
    <nuxt-link to="/looona-app" class="home__btn">Get started</nuxt-link>
  </div>
</template>

<style scoped>
.home {
  width: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: auto;
}
.home__text {
  font-size: 24px;
  text-align: center;
}
.home__btn {
  font-size: 28px;
}
</style>
