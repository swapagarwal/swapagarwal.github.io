<template>
  <div>
    <Header/>
    <div class="consulting">
      <h2>1:1 Consulting</h2>
      <p>
        I specialize in getting your first customers, asking good questions, and managing your time.
        If you're just starting out or are in your early-growth stage, you are at the right place.
        If you need help with any of the below, let's talk.
        <br>
        <b>You will get my undivided attention for one hour</b>, with tips, advice, and actionable insights you will be able to use straight away.
        Depending on your needs, this hour can be used for a conversation, or a more practical workshop. Whatever the topic, I promise you awesome value. You will leave inspired and equipped to tackle your next challenge.
        <ul>
          <li>Define your priorities</li>
          <li>Be productive and get stuff done</li>
          <li>Manage your mental well-being</li>
          <li>Build a personal brand</li>
          <li>Grow your audience</li>
          <li>Get your first paid customer</li>
          <li>Ask the right questions</li>
          <li>Anything related to Product / Marketing / Sales</li>
        </ul>
        <a href="https://www.paypal.me/SwapnilAgarwal/100" target="_blank" rel="noopener noreferrer">Click here to pay via PayPal and book a one-hour session.</a> I'll get in touch to arrange a time.
      </p>
      <h2>Reading Buddy</h2>
      If you've always wanted to read more but can't seem to do so, I can help you here.
      <br>
      We'll pick the books according to your interests and read together. I'll make a guided plan for you and check-in with you regularly.
      <br>
      Note that this comes with a refund-clause, i.e. <b>you get a refund if you aren't able to read them all in the stipulated time-frame</b>.
      <br>
      Pick one of the packages below:
      <ul>
        <li><a href="https://www.paypal.me/SwapnilAgarwal/9" target="_blank" rel="noopener noreferrer">Commit to reading one book in one month!</a></li>
        <li><a href="https://www.paypal.me/SwapnilAgarwal/19" target="_blank" rel="noopener noreferrer">Commit to reading one book in two weeks!</a></li>
        <li><a href="https://www.paypal.me/SwapnilAgarwal/29" target="_blank" rel="noopener noreferrer">Commit to reading two books in one month!</a></li>
      </ul>
      P.S. Here are some of the books that I highly recommend everyone to read:
      <ul>
        <li><a href="https://amzn.to/2EubI0p" target="_blank" rel="noopener noreferrer">The Mom Test</a></li>
        <li><a href="https://amzn.to/2QuYsyk" target="_blank" rel="noopener noreferrer">Nonviolent Communication</a></li>
        <li><a href="https://amzn.to/2QBVWXa" target="_blank" rel="noopener noreferrer">Getting Things Done</a></li>
      </ul>
      <h2>Corporate Workshops</h2>
      Use the chat widget to enquire about my availability for trainings in Vue.js / Productivity (GTD) / Communication.
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
.consulting {
  width: 80%;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
