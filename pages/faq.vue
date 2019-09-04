<template>
    <div>
        <Header/>
        <div class="container">
            <div style="display: inline-block; text-align: left;">
                <h1 class="title">Frequently Asked Questions</h1>
                <br>
                <VueFaqAccordion :items='faqs'/>
            </div>
        </div>
        <no-ssr>
          <Footer/>
        </no-ssr>
    </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    VueFaqAccordion,
    Header,
    Footer
  },
  data () {
    return {
      faqs: [
        {
          title: 'What should I do about my career?',
          value:
            `<p>
                Read the book "<a target="_blank" href="https://amzn.to/32zoQvd">So Good They Can't Ignore You</a>".
                <br><br>
                <a target="_blank" href="https://www.amazon.in/gp/product/0349420211/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=0349420211&linkCode=as2&tag=swap0e-21&linkId=0339582d6f553465620320a718cfcc9f">So Good They Can't Ignore You</a><img src="//ir-in.amazon-adsystem.com/e/ir?t=swap0e-21&l=am2&o=31&a=0349420211" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            </p>`,
          category: 'Work'
        },
        {
          title: 'How do I become a better programmer?',
          value:
            `<p>
                Read the book "<a target="_blank" href="https://amzn.to/2ULzI6A">Clean Code</a>".
                <br><br>
                <a target="_blank" href="https://www.amazon.in/gp/product/B001GSTOAM/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B001GSTOAM&linkCode=as2&tag=swap0e-21&linkId=3380c616a477c2ff95261ba8ec9e726e">Clean Code: A Handbook of Agile Software Craftsmanship (Robert C. Martin Series)</a><img src="//ir-in.amazon-adsystem.com/e/ir?t=swap0e-21&l=am2&o=31&a=B001GSTOAM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            </p>`,
          category: 'Work'
        },
        {
          title: 'Do you have any collaboration opportunities for students?',
          value:
            `<p>
                YES! YES! YES! I have lots of them:<br>
                1. <strike><a href="https://github.com/swapagarwal/swag-for-dev/issues/52" target="_blank" rel="noopener noreferrer">Website</a> for <a href="https://github.com/swapagarwal/swag-for-dev" target="_blank" rel="noopener noreferrer">😎 swag-for-dev</a></strike> <a href="http://devswag.io/" target="_blank" rel="noopener noreferrer">DONE ✅</a> (I'm all ears for any improvements though!)<br>
                2. Website for <a href="https://github.com/swapagarwal/awesome-eli5" target="_blank" rel="noopener noreferrer">👶 awesome-eli5</a><br>
                3. Website for <a href="https://github.com/swapagarwal/awesome-inspiration" target="_blank" rel="noopener noreferrer">🔥 awesome-inspiration</a><br>
                4. <strike><a href="https://github.com/swapagarwal/mediumship/issues/5" target="_blank" rel="noopener noreferrer">Feature Request</a> for <a href="https://github.com/swapagarwal/mediumship" target="_blank" rel="noopener noreferrer">📚 mediumship</a></strike> DONE ✅<br>
                Working on real-world projects is the best way to learn!<br>
                Let me know if you'd like to work on any of the above. 👊
            </p>`,
          category: 'Work'
        },
        {
          title: 'I need some quick motivation!',
          value:
            `<p>
                Listen to "<a target="_blank" href="https://open.spotify.com/album/3LF93q2V8mFvMxR2tWIY5y">Fearless Motivation</a>" on Spotify.
            </p>`,
          category: 'Life'
        },
        {
          title: 'Any general advice?',
          value: 'Ship every day. Every. Single. Day. Thank me later! :D<br>If you\'d like a nudge to start a streak, I have a <a href="/fund">100-day challenge</a> for you.',
          category: 'Life'
        },
        {
          title: 'Apps',
          value:
            `<ul>
                <li class="list-item"><a target="_blank" href="http://blinki.st/a3d9d82bdf9d">Blinkist</a></li>
                <li class="list-item"><a target="_blank" href="https://www.headspace.com/">Headspace</a></li>
            </ul>`,
          category: '&nbsp;&nbsp;Recommendations&nbsp;&nbsp;'
        },
        {
          title: 'Books (Read a lot. Buy a <a target="_blank" href="https://amzn.to/2N5xluB">Kindle</a>!)',
          value:
            `<ul>
                <li class="list-item"><a target="_blank" href="https://amzn.to/2Q0nVmc">The Alchemist</a></li>
                <li class="list-item"><a target="_blank" href="https://amzn.to/2LOGtRg">Sapiens: A Brief History of Humankind</a></li>
                <li class="list-item"><a target="_blank" href="https://amzn.to/2QdsrOy">Hooked: How to Build Habit-Forming Products</a></li>
                <li class="list-item"><a target="_blank" href="https://amzn.to/2ZQvwYZ">Anything You Want</a></li>
                <a target="_blank" href="https://www.amazon.in/gp/product/8172234988/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=8172234988&linkCode=as2&tag=swap0e-21&linkId=3398247d5b2c8ab5db9bbeda9b318396">The Alchemist</a><img src="//ir-in.amazon-adsystem.com/e/ir?t=swap0e-21&l=am2&o=31&a=8172234988" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
                <a target="_blank" href="https://www.amazon.in/gp/product/0099590085/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=0099590085&linkCode=as2&tag=swap0e-21&linkId=6da68db061e43da7abe235e66bb9f800">Sapiens: A Brief History of Humankind</a><img src="//ir-in.amazon-adsystem.com/e/ir?t=swap0e-21&l=am2&o=31&a=0099590085" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
                <br>
                <a target="_blank" href="https://www.amazon.in/gp/product/0241184835/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=0241184835&linkCode=as2&tag=swap0e-21&linkId=eb7418d3bc7917a42f4cfffd23543c73">Hooked: How to Build Habit-Forming Products</a><img src="//ir-in.amazon-adsystem.com/e/ir?t=swap0e-21&l=am2&o=31&a=0241184835" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
                <a target="_blank" href="https://www.amazon.in/gp/product/0241209048/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=0241209048&linkCode=as2&tag=swap0e-21&linkId=cdc8f09be9004f4c4710707b2705d0a7">Anything You Want</a><img src="//ir-in.amazon-adsystem.com/e/ir?t=swap0e-21&l=am2&o=31&a=0241209048" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            </ul>`,
          category: '&nbsp;&nbsp;Recommendations&nbsp;&nbsp;'
        },
        {
          title: 'Games',
          value:
            `<ul>
                <li class="list-item"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.nekki.shadowfight">Shadow Fight 2</a></li>
            </ul>`,
          category: '&nbsp;&nbsp;Recommendations&nbsp;&nbsp;'
        },
        {
          title: 'Coding',
          value:
            `<ul>
                <li class="list-item">Best Programming Courses & Tutorials: <a target="_blank" href="https://hackr.io/">https://hackr.io/</a></li>
            </ul>`,
          category: '&nbsp;&nbsp;Recommendations&nbsp;&nbsp;'
        },
        {
          title: 'Things I use',
          value:
            `See <a href="/uses">/uses</a>.`,
          category: '&nbsp;&nbsp;Recommendations&nbsp;&nbsp;'
        },
        {
          title: 'Services I provide',
          value:
            `<ul>
                <li class="list-item"><a href="https://www.buymeacoffee.com/l/cvraas" target="_blank" rel="noopener noreferrer">Review my CV</a></li>
                <li class="list-item">Mentoring session</li>
                <li class="list-item"><a href="/fund">Fund</a></li>
                <li class="list-item">I'm currently accepting business consulting contracts.</li>
            </ul>`,
          category: '&nbsp;&nbsp;Recommendations&nbsp;&nbsp;'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 200px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
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

.list-item {
    margin-top: 5px;
    margin-bottom: 1em;
}

.h2 {
    margin-top: 30px;
    line-height: 60px;
}
</style>
