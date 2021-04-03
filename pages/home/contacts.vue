<template>
  <div class="contacts">
    <div class="contacts__text">
      A big request to you, with all questions only on weekdays, on weekends the
      developer fills in his own mind and goes to admire the beautiful autumn
      sunset
    </div>
    <div class="contacts__links">
      <div class="contacts__link-item">
        <a href="https://t.me/glxmind"
          ><img
            src="@/assets/images/tg.png"
            alt="img"
            class="contacts__link-img"
        /></a>
      </div>
      <div class="contacts__link-item">
        <a href="https://instagram.com/glxmind?igshid=f7z9cn093uer"
          ><img
            src="@/assets/images/instagram.png"
            alt="img"
            class="contacts__link-img"
        /></a>
      </div>
      <div class="contacts__link-item">
        <a href="https://github.com/moon-light-night"
          ><img
            src="@/assets/images/github.png"
            alt="img"
            class="contacts__link-img"
        /></a>
      </div>
      <div class="contacts__link-item">
        <a href="https://join.skype.com/invite/mpa8oesTx08d"
          ><img
            src="@/assets/images/skype.png"
            alt="img"
            class="contacts__link-img"
        /></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts__text {
  font-size: 28px;
  width: 80%;
  padding: 10% 0;
  margin: 0 auto;
  color: white;
  /* text-shadow: 2px 2px 3px black, 1em 1em 1em black; */
  /* @media (max-width: 450px) {
      font-size: 20px;
    } */
}
.contacts__links {
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 450px) {
    padding-bottom: 40%;
  }
}
.contacts__link-item {
  perspective: 400px;
}
.contacts__link-img {
  width: 72px;
  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 450px) {
    width: 48px;
  }
}
</style>
