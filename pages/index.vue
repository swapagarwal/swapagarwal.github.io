<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <h1 class="title">
        127.0.0.1 sweet 127.0.0.1
      </h1>
      <h2 class="subtitle">
        Hi! I'm Swapnil Agarwal. People call me swap.
      </h2>
      <div class="links">
        <!-- <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a> -->
        <!-- <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a> -->
        <a href="github" target="_blank" class="button--grey">GitHub</a>
        <a href="projects" target="_blank" class="button--grey">Projects</a>
        <!-- <a href="about" target="_blank" class="button--grey">About</a> -->
        <!-- <a href="contact" target="_blank" class="button--grey">Contact</a> -->
        <!-- <a href="now" target="_blank" class="button--grey">Now</a> -->
      </div>
      <!-- <a class="btn btn-block btn-social btn-twitter">
        <span class="fa fa-twitter"></span> Sign in with Twitter
      </a> -->
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
