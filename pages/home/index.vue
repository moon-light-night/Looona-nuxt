<template>
  <div class="home">
    <p class="home__text">
      Hi <span class="emerald">ヽ(・∀・)ﾉ</span> you're on my service. At the
      moment it includes the voice assistant "Looona" and brief documentation
      for her. In the direction of travel, if I have free time, I'll try to add
      new features. Pleasant use <span class="emerald">:)</span>
    </p>
    <nuxt-link to="/looona-app" class="home__link"
      ><button class="home__btn shadow">Get started</button></nuxt-link
    >
  </div>
</template>

<script>
export default {
  layout: "default"
};
</script>

<style scoped>
.home {
  width: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0 auto;
  color: #f5f7fa;
}
.home__text {
  font-size: 24px;
  text-align: center;
  margin: 0 0 50px;
}
.home__btn {
  font-size: 28px;
  background-color: #00c58e;
  color: #f5f7fa;
  border-radius: 3px;
  padding: 0px 10px;
  transition-duration: 0.2s;
}
.home__btn:hover {
  background-color: #00e0a1;
  cursor: pointer;
}
.home__link {
  margin: 0 auto;
}
</style>
