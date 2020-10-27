<template>
  <section class="container">
    <Header/>
    <div>
      <!-- <logo/> -->
      <!-- <h1 class="title">
        127.0.0.1 sweet 127.0.0.1
      </h1> -->
      <img src="/avatar.png" style="border-radius:100%" width="140"><br>
      <br>
      <h2 class="subtitle">
        <vue-typer text="Hi! 👋 I'm Swapnil Agarwal. 🗣️ People call me 'swap'."
                   :repeat='0'
                   :pre-type-delay='1000'
                   :type-delay='100'
                   caret-animation='smooth'
        ></vue-typer>
      </h2>
      <div>
        I'm fixing tech hiring at <a href="https://elevatelabs.tech/" target="_blank" rel="noopener noreferrer">🚀 Elevate Labs</a>.
        I also run a private community of mastermind groups at <a href="https://dxclub.io/" target="_blank" rel="noopener noreferrer">⚡️ The DX Club</a>.
        <br>
        <!-- I am a Co-Organizer of <a href="https://twitter.com/AnAwesomeConf" target="_blank" rel="noopener noreferrer">💯 Awesome Conference</a> and <a href="https://dxclub.io/taboo" target="_blank" rel="noopener noreferrer">🙅 Screw the Taboo meetups</a>.
        <br> -->
        <!-- I run <a href="http://devswag.io/" target="_blank" rel="noopener noreferrer">😎 devSwag</a> on the side. Some of you might know me as <u>That Swag Guy</u>!
        <br> -->
        <span>Modern Polymath &bull; INTP turned INFP &bull; <a href="/reads">📚 Avid Reader</a> &bull; Speaker at Conferences & Meetups</span>
        <br>
        In the past, I have worked as a Software Developer at Amazon and as a Product Manager at Meesho.
      </div>
      <!-- <div class="links">
        <a href="projects" target="_blank" rel="noopener noreferrer">🏗️ Projects</a>
        | <a href="ideas" target="_blank" rel="noopener noreferrer">🤔 Ideas</a>
        | <a href="faq" target="_blank" rel="noopener noreferrer">❓ F.A.Q.</a>
      </div> -->
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
      <div class="newsletter">
        My polished thoughts can be found here: <a href="/writes">💡 swap's insights</a>
        <br>
        Here are some of my raw newsletters:
        <a href="https://buttondown.email/swap" target="_blank" rel="noopener noreferrer">💌 swap's musings</a>
        &bull;
        <a href="https://tinyletter.com/swap" target="_blank" rel="noopener noreferrer">✍️ swap's life updates</a>
        &bull;
        <a href="https://www.getrevue.co/profile/swap" target="_blank" rel="noopener noreferrer">🦄 swap's startup journey</a>
        &bull;
        <a href="https://swap.substack.com" target="_blank" rel="noopener noreferrer">🧪 swap's creative lab</a>
        <br><br>
        <a href="https://emailoctopus.com/lists/583fff8a-c041-11ea-a3d0-06b4694bee2a/forms/subscribe" target="_blank" class="button--grey">Subscribe to get new posts in your inbox!</a>
      </div>
      <br>
      <div class="contact">
        You can use the chat widget at the bottom right to send me a <a href="http://www.nohello.com/" target="_blank" rel="noopener noreferrer">💬 message</a>.
        <br>
        I'd love to connect online or over a cup of ☕ coffee. <a href="https://calendly.com/swapnilagarwal" target="_blank" rel="noopener noreferrer">Here's my 🗓️ calendar link</a> to make finding time easy.
      </div>
      <!-- <br>
      <div class="social">
        <a href="https://github.com/swapagarwal" target="_blank" rel="noopener noreferrer">GitHub</a>
        |
        <a href="https://www.twitter.com/SwapAgarwal" target="_blank" rel="noopener noreferrer">Twitter</a>
        |
        <a href="https://medium.com/@swap" target="_blank" rel="noopener noreferrer">Medium</a>
        |
        <a href="https://www.linkedin.com/in/swapagarwal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        |
        <a href="https://www.facebook.com/swap.agarwal" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div> -->
    </div>
    <no-ssr>
      <Footer/>
    </no-ssr>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Logo,
    Header,
    Footer
  }
}
</script>

<style>
.container {
  min-height: 90vh;
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
  word-spacing: 5px;
  padding-top: 5px;
  padding-bottom: 10px;
}

.links {
  padding-top: 15px;
}

.newsletter {
  margin: auto;
}

.contact {
  margin: auto;
}

.social {
  margin: auto;
}
</style>
