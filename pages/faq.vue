<template>
    <div>
        <Header/>
        <div class="faqs">
            <h2 style="text-align: center;">Frequently Asked Questions</h2>
            <br>
            <no-ssr>
              <VueFaqAccordion :items='faqs'/>
            </no-ssr>
            <br>
            <div class="commentbox"></div>
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
      title: 'Frequently Asked Questions - Swapnil Agarwal',
      description: 'A list of questions related to various aspects of life.',
      faqs: [
        {
          title: 'What should I do about my career?',
          value:
            `<p>
                Read the book "<a target="_blank" href="https://amzn.to/32zoQvd">So Good They Can't Ignore You</a>".
                <br><br>
                <a target="_blank"  href="https://www.amazon.in/gp/product/0349420211/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=0349420211&linkCode=as2&tag=swap0e-21&linkId=03d2588a46446e1790f81783fd56d617"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=0349420211&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=swap0e-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=swap0e-21&l=am2&o=31&a=0349420211" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            </p>`,
          category: 'Work'
        },
        {
          title: 'How do I become a better programmer?',
          value:
            `<p>
                Read the book "<a target="_blank" href="https://amzn.to/2ULzI6A">Clean Code</a>".
                <br><br>
                <a target="_blank"  href="https://www.amazon.in/gp/product/B001GSTOAM/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B001GSTOAM&linkCode=as2&tag=swap0e-21&linkId=e96c435c88c48492b504dd442a9bcc18"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B001GSTOAM&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=swap0e-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=swap0e-21&l=am2&o=31&a=B001GSTOAM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
                <br><br>
                Better yet, join the <a target="_blank" href="http://dxclub.io/books">Bottom Line Book Club</a>!
            </p>`,
          category: 'Work'
        },
        {
          title: 'Do you have any collaboration opportunities for students?',
          value:
            `<p>
                YES! YES! YES! I have lots of them. See <a href="/mentor">/mentor</a>.
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
          category: 'Recommendations'
        },
        {
          title: 'Books (Read a lot. Buy a <a target="_blank" href="https://amzn.to/2N5xluB">Kindle</a>!)',
          value:
            `<ul>
                <li class="list-item"><a target="_blank" href="https://amzn.to/2Q0nVmc">The Alchemist</a></li>
                <li class="list-item"><a target="_blank" href="https://amzn.to/2LOGtRg">Sapiens: A Brief History of Humankind</a></li>
                <li class="list-item"><a target="_blank" href="https://amzn.to/2QdsrOy">Hooked: How to Build Habit-Forming Products</a></li>
                <li class="list-item"><a target="_blank" href="https://amzn.to/2ZQvwYZ">Anything You Want</a></li>
                <a target="_blank"  href="https://www.amazon.in/gp/product/8172234988/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=8172234988&linkCode=as2&tag=swap0e-21&linkId=2d9b3621391733ac88715fbf36bf32e0"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=8172234988&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=swap0e-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=swap0e-21&l=am2&o=31&a=8172234988" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
                <a target="_blank"  href="https://www.amazon.in/gp/product/0099590085/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=0099590085&linkCode=as2&tag=swap0e-21&linkId=e68b67aecacd9cce15101156c0709b47"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=0099590085&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=swap0e-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=swap0e-21&l=am2&o=31&a=0099590085" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
                <a target="_blank"  href="https://www.amazon.in/gp/product/0241184835/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=0241184835&linkCode=as2&tag=swap0e-21&linkId=415d2edc40e86ca97ca274f77803f88b"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=0241184835&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=swap0e-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=swap0e-21&l=am2&o=31&a=0241184835" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
                <a target="_blank"  href="https://www.amazon.in/gp/product/0241209048/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=0241209048&linkCode=as2&tag=swap0e-21&linkId=a07e4adf67c685f8d6411a4ae64b3ec2"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=0241209048&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=swap0e-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=swap0e-21&l=am2&o=31&a=0241209048" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
                <br><br>
                For more, join <a target="_blank" href="https://reademy.xyz/">Reademy</a>!
            </ul>`,
          category: 'Recommendations'
        },
        {
          title: 'Games',
          value:
            `<ul>
                <li class="list-item"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.nekki.shadowfight">Shadow Fight 2</a></li>
                <li class="list-item"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.habby.archero">Archero</a></li>
            </ul>`,
          category: 'Recommendations'
        },
        {
          title: 'Coding',
          value:
            `<ul>
                <li class="list-item">Best Programming Courses & Tutorials: <a target="_blank" href="https://hackr.io/">https://hackr.io/</a></li>
            </ul>`,
          category: 'Recommendations'
        },
        {
          title: 'Things I use',
          value:
            `See <a href="/uses">/uses</a>.`,
          category: 'Recommendations'
        },
        // {
        //   title: 'Services I provide',
        //   value:
        //     `<ul>
        //         <li class="list-item"><a href="https://www.buymeacoffee.com/l/cvraas" target="_blank" rel="noopener noreferrer">Review my CV</a></li>
        //         <li class="list-item">Mentoring session</li>
        //         <li class="list-item"><a href="/fund">Fund</a></li>
        //         <li class="list-item">Landing Page Design</li>
        //         <li class="list-item">All things UX</li>
        //     </ul>`,
        //   category: 'Recommendations'
        // },
      ]
    }
  },
  methods: {
    track: function(event) {
      this.$ga.event(window.location.pathname, 'Clicked Link', event.target.href);
    }
  },
  mounted() {
    commentBox('5665346656665600-proj')
    window.addEventListener('click', this.track)
  },
  destroyed() {
    window.removeEventListener('click', this.track)
  },
}
</script>

<style scoped>
.faqs {
  width: 80%;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
}

/deep/ .faq-wrapper {
  margin: 0 auto;
}

.list-item {
  margin-top: 5px;
  margin-bottom: 1em;
}
</style>
