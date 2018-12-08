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
        <!-- <a href="about" target="_blank" class="button--grey">About</a> -->
        <a href="ideas" target="_blank" class="button--grey">Ideas</a>
        <a href="faq" target="_blank" class="button--grey">F.A.Q.</a>
        <!-- <a href="contact" target="_blank" class="button--grey">Contact</a> -->
      </div>
      <div class="links">
        <!-- <a href="ideas" target="_blank" class="button--grey">Ideas</a> -->
        <!-- <a href="quotes" target="_blank" class="button--grey">Quotes</a> -->
        <!-- <a href="reads" target="_blank" class="button--grey">Reads</a> -->
        <!-- <a href="writes" target="_blank" class="button--grey">Writes</a> -->
      </div>
      <div class="about">
        My Myers-Briggs Type Indicator (MBTI) is INFP.
        <br>
        I'm a polyglot who lives by the philosophy "Don't reinvent the wheel" and "learning by doing".
        <br>
        I'm quite passionate about open-source sustainability and helping people start their open-source journey by lowering the entry barrier.
        <br>
        Being an INTP turned INFP, I like to work in the right mix of challenges and consumer impact.
        <br>
        Outside work, I'm an anime fan, book lover, music geek, and ps4 gamer. I care deeply about the Oxford comma.
      </div>
      <br>
      <div class="contact">
        You can use the chat widget at the bottom right to send me a message.
        <br>
        I'd love to connect online or over a cup of coffee. <a href="https://calendly.com/swapnilagarwal">Here's my calendar link</a> to make finding time easy.
      </div>
      <br>
      <iframe
      scrolling="no"
      style="width:100%!important;height:220px;border:1px #ccc solid !important"
      src="https://buttondown.email/swap?as_embed=true"
      ></iframe>
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
</style>
