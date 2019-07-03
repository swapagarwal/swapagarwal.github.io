<template>
  <div>
    <Header/>
    <div class="fund">
      <h2>Things I've 💸 funded:</h2>
      <ul>
        <li>
          A women community's coding challenge
        </li>
        <li>
          A coding club's events
        </li>
        <li>
          <a href="https://github.com/arshadkazmi42/first-issues" target="_blank" rel="noopener noreferrer">First Issues Twitter Bot</a>
        </li>
      </ul>
      <h2>Things I'm 💰 willing to fund:</h2>
      <ul>
        <li>
          Publishing your apps to play store
        </li>
        <li>
          Any 100-day challenge, e.g. 100 days of coding, writing, designing, fitness, etc.
        </li>
      </ul>
      There's no fixed structure to it yet; everything is on a case-by-case basis. Use the chat option below to send me a message. 😇
    </div>
    <no-ssr>
      <Footer/>
    </no-ssr>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.fund {
  width: 80%;
  margin: auto;
  margin-top: 100px;
}
</style>
