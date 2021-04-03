<template>
  <section class="login-registration">
    <div class="login-registration-container__wrap">
      <div class="login-registration-container">
        <h2 class="title">Login</h2>
        <form class="form">
          <input type="text" class="input email" placeholder="Your email" />
          <input
            type="text"
            class="input password"
            placeholder="Enter your password"
          />
          <nuxt-link to="/home">
            <button class="form__btn">Login</button></nuxt-link
          >
        </form>
        <p>
          Don't have an account yet?
          <nuxt-link to="/registration">Registration</nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "empty"
};
</script>

<style>
.login-registration {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background-color: black; */
}
.login-registration-container__wrap {
  position: relative;
  width: 500px;
  height: auto;
  background-color: white;
  border-radius: 5px;
}
.login-registration-container {
  width: 400px;
  margin: 20px auto;
}
.form {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto 20px;
}
.input {
  width: 100%;
  margin: 0 0 20px;
}
.title {
  margin: 0 0 10px;
}
.form__btn {
  width: max-content;
  padding: 5px 15px;
}
</style>
