<template>
  <section class="login-registration">
    <div class="login-registration-container__wrap">
      <div class="login-registration-container">
        <h2 class="title">Registration</h2>
        <form class="form">
          <input type="text" class="input name" placeholder="Your name" />
          <input type="text" class="input email" placeholder="Your email" />
          <input
            type="text"
            class="input password"
            placeholder="Create a password"
          />
          <nuxt-link to="/home">
            <button class="form__btn">Registration</button></nuxt-link
          >
        </form>
        <p>
          Already have an account?
          <nuxt-link to="/login">Login</nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>
