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
        Hi! 👋 I'm Swapnil Agarwal. 🗣️ People call me "swap".
      </h2>
      Developer @Amazon | running <a href="https://www.meetup.com/vue-bangalore/" target="_blank" rel="noopener noreferrer">@VueBLR</a> + <a href="http://devswag.io/" target="_blank" rel="noopener noreferrer">😎 devSwag</a> on the side | INTP turned INFP | <a href="http://buttondown.email/swap" target="_blank" rel="noopener noreferrer">💌 My Newsletter</a> 📚🎵🎮
      <div class="links">
        <a href="projects" target="_blank" rel="noopener noreferrer">🏗️ Projects</a>
        | <a href="ideas" target="_blank" rel="noopener noreferrer">🤔 Ideas</a>
        | <a href="faq" target="_blank" rel="noopener noreferrer">❓ F.A.Q.</a>
      </div>
      <!-- <div class="links">
        <a href="now" target="_blank" class="button--grey">Now</a>
        <a href="github" target="_blank" class="button--grey">GitHub</a>
        <a href="about" target="_blank" class="button--grey">About</a>
        <a href="contact" target="_blank" class="button--grey">Contact</a>
      </div> -->
      <!-- <div class="links">
        <a href="ideas" target="_blank" class="button--grey">Ideas</a>
        <a href="quotes" target="_blank" class="button--grey">Quotes</a>
        <a href="reads" target="_blank" class="button--grey">Reads</a>
        <a href="writes" target="_blank" class="button--grey">Writes</a>
      </div> -->
      <!-- <div class="about">
        <a href="https://buttondown.email/swap/archive/7d5b3001-9ecc-4d58-abbc-0353e121633f" target="_blank" rel="noopener noreferrer">About Me</a> | <a href="https://buttondown.email/swap" target="_blank" rel="noopener noreferrer">My Newsletter</a>
      </div> -->
      <br>
      <div class="contact">
        You can use the chat widget at the bottom right to send me a message. 💬
        <br>
        I'd love to connect online or over a cup of coffee. ☕ <a href="https://calendly.com/swapnilagarwal">Here's my calendar link</a> to make finding time easy.
      </div>
      <br>
      <div class="social">
        <a href="https://github.com/swapagarwal" target="_blank" rel="noopener noreferrer">GitHub</a>
        | <a href="https://www.twitter.com/SwapAgarwal" target="_blank" rel="noopener noreferrer">Twitter</a>
        | <a href="https://medium.com/@swap" target="_blank" rel="noopener noreferrer">Medium</a>
        | <a href="https://www.linkedin.com/in/swapagarwal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        | <a href="https://www.facebook.com/swap.agarwal" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
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
  margin-top: 20px;
  margin-bottom: 20px;
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

.about {
  margin: auto;
}

.contact {
  margin: auto;
}

.social {
  margin: auto;
}
</style>
