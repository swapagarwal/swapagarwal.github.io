<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <!-- <h1 class="title">
        127.0.0.1 sweet 127.0.0.1
      </h1> -->
      <img src="/avatar.jpg" style="border-radius:100%" width="140"><br>
      <br>
      <h2 class="subtitle">
        Hi! I'm Swapnil Agarwal. People call me "swap".
      </h2>
      Backend Developer at Amazon | Open Source Contributor at Night | Co-Organizer at <a href="https://www.meetup.com/vue-bangalore/" target="_blank" rel="noopener noreferrer">Vue Bangalore</a>
      <div class="links">
        <a href="projects" target="_blank" class="button--grey">Projects</a>
        <a href="now" target="_blank" class="button--grey">Now</a>
        <a href="github" target="_blank" class="button--grey">GitHub</a>
      </div>
      <div class="links">
        <a href="about" target="_blank" class="button--grey">About</a>
        <a href="faq" target="_blank" class="button--grey">F.A.Q.</a>
        <a href="contact" target="_blank" class="button--grey">Contact</a>
      </div>
      <div class="links">
        <!-- <a href="ideas" target="_blank" class="button--grey">Ideas</a> -->
        <!-- <a href="quotes" target="_blank" class="button--grey">Quotes</a> -->
        <!-- <a href="reads" target="_blank" class="button--grey">Reads</a> -->
        <!-- <a href="writes" target="_blank" class="button--grey">Writes</a> -->
      </div>
      <a class="btn btn-social-icon btn-lg btn-github" href="https://github.com/swapagarwal" target="_blank">
        <i class="fa fa-github"></i>
      </a>
      <a class="btn btn-social-icon btn-lg btn-twitter" href="https://www.twitter.com/SwapAgarwal" target="_blank">
        <i class="fa fa-twitter"></i>
      </a>
      <a class="btn btn-social-icon btn-lg btn-medium" href="https://medium.com/@swap" target="_blank">
        <i class="fa fa-medium"></i>
      </a>
      <a class="btn btn-social-icon btn-lg btn-linkedin" href="https://www.linkedin.com/in/swapagarwal/" target="_blank">
        <i class="fa fa-linkedin"></i>
      </a>
      <a class="btn btn-social-icon btn-lg btn-facebook" href="https://www.facebook.com/swap.agarwal" target="_blank">
        <i class="fa fa-facebook"></i>
      </a>
      <no-ssr>
        <Footer/>
      </no-ssr>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Logo, Footer
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
  color: white;
  background-color: black;
  word-spacing: 5px;
  padding-top: 5px;
  padding-bottom: 10px;
}

.links {
  padding-top: 15px;
}
</style>
