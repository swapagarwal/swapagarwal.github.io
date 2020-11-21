<template>
  <div>
    <Header/>
    <div class="mentor">
      Working on real-world projects is the best way to learn! I have some side-projects which I'm currently not able to devote time to so I'm putting it out there.
      <br>
      If you're a student or want to learn-by-doing, here are some collaboration opportunities:
      <ol>
        <li>
          <a href="https://github.com/swapagarwal/swag-for-dev" target="_blank" rel="noopener noreferrer">devswag.io</a>
          <ul>
            <li>
              The GitHub repo has 2 awesome maintainers, but they would love to get a helping hand. <b>#maintenance</b>
            </li>
            <li>
              There's a newsletter, which aims to send out emails notifying about new swag opportunities. I want someone who can draft the content. <b>#content</b>
            </li>
            <li>
              There's a Telegram group, who has a caring moderator. I'm not sure how you can help, but I'm open to hearing your ideas. <b>#engagement</b>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/swapagarwal/JARVIS-on-Messenger" target="_blank" rel="noopener noreferrer">J.A.R.V.I.S.</a>
          <ul>
            <li>
              It has 500+ open PRs so it'll take a lot of time investment. Only apply if you're really passionate about it! <b>#maintenance</b>
            </li>
            <li>
              Lead the development of its evolution project: <a href="https://github.com/the-vision/" target="_blank" rel="noopener noreferrer">Vision</a>. <b>#backend</b>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://twitter.com/VueBLR" target="_blank" rel="noopener noreferrer">Vue Bangalore</a>
          <ul>
            <li>
              Design more stickers. The current one is <a href="https://twitter.com/VueBLR/status/1193123614528163840" target="_blank" rel="noopener noreferrer">here</a>. We can brainstorm more on the concepts; some inspiration can be found in the replies <a href="https://twitter.com/SwapAgarwal/status/1162631064772173824" target="_blank" rel="noopener noreferrer">here</a>. <b>#design</b>
            </li>
            <li>
              Design some tees. Here are our <a href="https://twitter.com/znck0/status/1163324435329191936" target="_blank" rel="noopener noreferrer">previous</a> <a href="https://twitter.com/znck0/status/1172943188996177920" target="_blank" rel="noopener noreferrer">attempts</a>. <b>#design</b>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://dxclub.io/" target="_blank" rel="noopener noreferrer">The DX Club</a>
          <ul>
            <li>
              Looking for someone to jot down notes and write blog posts of the meetups. <b>#content</b>
            </li>
            <li>
              Design stickers / tees. <b>#design</b>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://geeksay.xyz/" target="_blank" rel="noopener noreferrer">geeksay</a>
          <ul>
            <li>
              Add a <a href="https://github.com/swapagarwal/geeksay/issues/64" target="_blank" rel="noopener noreferrer">quiz</a>. <b>#frontend</b>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/swapagarwal/awesome-eli5" target="_blank" rel="noopener noreferrer">awesome-eli5</a>
          <ul>
            <li>
              Design (and build) the website. <b>#design</b> <b>#frontend</b>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/swapagarwal/awesome-inspiration" target="_blank" rel="noopener noreferrer">awesome-inspiration</a>
          <ul>
            <li>
              Design (and build) the website. <b>#design</b> <b>#frontend</b>
            </li>
          </ul>
        </li>
      </ol>
      If you're interested in any of the above, let me know. (You know where to find me!)
      <br>
      P.S. I've added hashtags of the skills that you'll learn in each project.
      Don't worry; you'll get guidance from me whenever you're stuck!
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
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: this.description },
          { hid: 'og:title', property: 'og:title', content: this.title },
          { hid: 'og:description', property: 'og:description', content: this.description },
          { hid: 'twitter:title', name: 'twitter:title', content: this.title },
          { hid: 'twitter:description', name: 'twitter:description', content: this.description },
        ]
      }
    },
    data () {
      return {
        title: 'Mentorship - Swapnil Agarwal',
        description: 'Working on real-world projects is the best way to learn! I have some side-projects which I\'m currently not able to devote time to so I\'ve opened them up for collaboration.'
      }
    },
    methods: {
      track: function(event) {
        this.$ga.event(window.location.pathname, 'Clicked Link', event.target.href);
      }
    },
    mounted() {
      window.addEventListener('click', this.track)
    },
    destroyed() {
      window.removeEventListener('click', this.track)
    },
  }
</script>

<style scoped>
.mentor {
  width: 80%;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
}

ul li {
  list-style: disc;
}
</style>
