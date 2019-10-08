<template>
  <section class="container">
    <Header/>
    <div>
      <!-- <logo/> -->
      <!-- <h1 class="title">
        127.0.0.1 sweet 127.0.0.1
      </h1> -->
      <img src="/avatar.jpg" style="border-radius:100%" width="140"><br>
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
        I'm currently <b>Exploring Career #3</b>. In the past, I have worked as a <b>Software Developer at Amazon</b> and as a <b>Product Manager at Meesho</b>.
        <br>
        I am a Co-Organizer of <a href="https://twitter.com/AnAwesomeConf" target="_blank" rel="noopener noreferrer">💯 Awesome Conference</a> and <a href="https://www.meetup.com/vue-bangalore/" target="_blank" rel="noopener noreferrer">🤓 Vue Bangalore</a> meetups.
        <br>
        I run <a href="http://devswag.io/" target="_blank" rel="noopener noreferrer">😎 devSwag</a> on the side. Some of you might know me as <u>That Swag Guy</u>!
        <br>
        INTP turned INFP | Speaker at Conferences & Meetups | Open-Source Contributor at Night | Experimenting with <a href="https://dxclub.io" target="_blank" rel="noopener noreferrer">DX Club</a>
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
        <span class="badge badge-danger" style="margin-left: 10px; font-size: 12px;">New</span>
        In the next 6 months, I plan to learn new skills and test them out professionally. Follow along and become part of my journey!
        <br>
        <form
          action="https://tinyletter.com/swap"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://tinyletter.com/swap', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
        >
          <input type="text" placeholder="drop your email" style="width: 400px; padding: 8px 124px 6px 16px; border-radius: 10px; outline: none; border: 1px solid;" name="email" id="tlemail" />
          <input type="hidden" value="1" name="embed"/>
          <input type="submit" value="subscribe" style="cursor: pointer; margin-left: -112px; border-radius: 10px; background-color: #0069FF; color: #fff; border: none; font-size: 18px;"/>
        </form>
        Past issues can be found here: <a href="https://tinyletter.com/swap/archive" target="_blank" rel="noopener noreferrer">tinyletter.com/swap/archive</a>
        <span class="badge badge-danger" style="margin-left: 10px; font-size: 12px;">New</span>
      </div>
      <br>
      <div class="newsletter">
        I also maintain a <a href="https://buttondown.email/swap/archive" target="_blank" rel="noopener noreferrer">little 💌 email digest</a> to share what I'm 📚 reading, 🎵 listening to, and 🎮 find interesting.
        <br>
        <!-- <form
          action="https://buttondown.email/api/emails/embed-subscribe/swap"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://buttondown.email/swap', 'popupwindow')"
          class="embeddable-buttondown-form"
        >
          <input type="email" name="email" id="bd-email" placeholder="drop your email" style="width: 400px; padding: 8px 124px 6px 16px; border-radius: 10px; outline: none; border: 1px solid;">
          <input type="hidden" value="1" name="embed"/>
          <input type="submit" value="subscribe" style="cursor: pointer; margin-left: -112px; border-radius: 10px; background-color: #0069FF; color: #fff; border: none; font-size: 18px;"/>
        </form> -->
        🔥 Latest Post: <a href="https://buttondown.email/swap/archive/book-notes-flow-the-psychology-of-optimal/" target="_blank" rel="noopener noreferrer">#43: 📚 Book Notes: Flow: The Psychology of Optimal Experience</a>
      </div>
      <br>
      <div class="contact">
        You can use the chat widget at the bottom right to send me a <a href="http://www.nohello.com/" target="_blank" rel="noopener noreferrer">💬 message</a>.
        <br>
        I'd love to connect online or over a cup of ☕ coffee. <a href="https://calendly.com/swapnilagarwal" target="_blank" rel="noopener noreferrer">Here's my 🗓️ calendar link</a> to make finding time easy.
      </div>
      <br>
      <div class="social">
        <a href="https://github.com/swapagarwal" target="_blank" rel="noopener noreferrer">GitHub</a>
        | <a href="https://www.twitter.com/SwapAgarwal" target="_blank" rel="noopener noreferrer">Twitter</a>
        | <a href="https://medium.com/@swap" target="_blank" rel="noopener noreferrer">Medium</a>
        | <a href="https://www.linkedin.com/in/swapagarwal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        | <a href="https://www.facebook.com/swap.agarwal" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
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
