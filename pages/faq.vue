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
    </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'
import Header from '~/components/Header.vue'

export default {
  components: {
    VueFaqAccordion, Header
  },
  data () {
    return {
      faqs: [
        {
          title: 'What should I do about my career?',
          value:
            `<p>
                Read the book "<a target="_blank" href="https://amzn.to/2VHHwFO">So Good They Can't Ignore You</a>".
                <br><br>
                <a href="https://www.amazon.in/Good-They-Cant-Ignore-You/dp/0349420211/ref=as_li_ss_il?ie=UTF8&qid=1551967646&sr=8-1&keywords=so+good+they+can't+ignore+you+by+cal+newport&linkCode=li3&tag=swap0b-21&linkId=1728ac35bc38e84c9915174ee97b3c3c&language=en_IN" target="_blank"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0349420211&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=swap0b-21&language=en_IN" ></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=swap0b-21&language=en_IN&l=li3&o=31&a=0349420211" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            </p>`,
          category: 'Work'
        },
        {
          title: 'How do I become a better programmer?',
          value:
            `<p>
                Read the book "<a target="_blank" href="https://amzn.to/2VLklul">Clean Code</a>".
                <br><br>
                <a href="https://www.amazon.in/Clean-Code-Robert-C-Martin/dp/8131773388/ref=as_li_ss_il?_encoding=UTF8&qid=1551967795&sr=8-3&linkCode=li3&tag=swap0b-21&linkId=231ba88a260ce463ff96b8d3794fcae1&language=en_IN" target="_blank"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=8131773388&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=swap0b-21&language=en_IN" ></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=swap0b-21&language=en_IN&l=li3&o=31&a=8131773388" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            </p>`,
          category: 'Work'
        },
        {
          title: 'Do you have any collaboration opportunities for students?',
          value:
            `<p>
                YES! YES! YES! I have lots of them:<br>
                1. <strike><a href="https://github.com/swapagarwal/swag-for-dev/issues/52" target="_blank" rel="noopener noreferrer">Website</a> for <a href="https://github.com/swapagarwal/swag-for-dev" target="_blank" rel="noopener noreferrer">swag-for-dev</a></strike> <a href="http://devswag.io/" target="_blank" rel="noopener noreferrer">DONE ✅</a><br>
                2. Website for <a href="https://github.com/swapagarwal/awesome-eli5" target="_blank" rel="noopener noreferrer">awesome-eli5</a><br>
                3. Website for <a href="https://github.com/swapagarwal/awesome-inspiration" target="_blank" rel="noopener noreferrer">awesome-inspiration</a><br>
                4. Feature Request for <a href="https://github.com/swapagarwal/mediumship/issues/5" target="_blank" rel="noopener noreferrer">mediumship</a><br>
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
          value: 'Ship every day. Every. Single. Day. Thank me later! :D',
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
          title: 'Books (Read a lot. Buy a <a target="_blank" href="https://amzn.to/2EVajkQ">Kindle</a>!)',
          value:
            `<ul>
                <li class="list-item"><a target="_blank" href="https://amzn.to/2HkdHai">The Alchemist</a></li>
                <li class="list-item"><a target="_blank" href="https://amzn.to/2VJrWJS">Sapiens: A Brief History of Humankind</a></li>
                <li class="list-item"><a target="_blank" href="https://amzn.to/2H5pAl8">Hooked: How to Build Habit-Forming Products</a></li>
                <li class="list-item"><a target="_blank" href="https://amzn.to/2VKea9P">Anything You Want</a></li>
                <a href="https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988/ref=as_li_ss_il?ie=UTF8&qid=1551967997&sr=8-3&keywords=the+alchemist&linkCode=li3&tag=swap0b-21&linkId=b648b1d1bc1d6208d99175faaf2a16dc&language=en_IN" target="_blank"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=8172234988&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=swap0b-21&language=en_IN" ></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=swap0b-21&language=en_IN&l=li3&o=31&a=8172234988" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
                <a href="https://www.amazon.in/Sapiens-Humankind-Yuval-Noah-Harari/dp/0099590085/ref=as_li_ss_il?ie=UTF8&qid=1551968056&sr=8-1&keywords=sapiens&linkCode=li3&tag=swap0b-21&linkId=c90e74e5db36c83dd09319b14d0b9ffc&language=en_IN" target="_blank"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0099590085&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=swap0b-21&language=en_IN" ></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=swap0b-21&language=en_IN&l=li3&o=31&a=0099590085" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
                <br>
                <a href="https://www.amazon.in/Hooked-How-Build-Habit-Forming-Products/dp/0241184835/ref=as_li_ss_il?ie=UTF8&qid=1551968112&sr=8-1&keywords=hooked&linkCode=li3&tag=swap0b-21&linkId=33085d2f32788d6251306de1de1d90d9&language=en_IN" target="_blank"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0241184835&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=swap0b-21&language=en_IN" ></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=swap0b-21&language=en_IN&l=li3&o=31&a=0241184835" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
                <a href="https://www.amazon.in/Anything-You-Want-Derek-Sivers/dp/0241209048/ref=as_li_ss_il?ie=UTF8&qid=1551968163&sr=8-2&keywords=anything+you+want&linkCode=li3&tag=swap0b-21&linkId=e12e9092e81e5cf60e86b0754832744a&language=en_IN" target="_blank"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0241209048&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=swap0b-21&language=en_IN" ></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=swap0b-21&language=en_IN&l=li3&o=31&a=0241209048" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
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
