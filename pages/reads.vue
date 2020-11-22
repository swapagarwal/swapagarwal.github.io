<template>
  <div>
    <Header/>
    <div class="reads">
      2020 Reading Challenge: I have read {{ progress }} of 50 books (updated weekly, well hopefully weekly!).
      <br>
      <a href="https://www.goodreads.com/review/list/50197980-swapnil-agarwal?shelf=read&sort=date_read" target="_blank" rel="noopener noreferrer">View all my reviews on Goodreads</a>
      <br>
      <div v-for="book in books" :key="book.title" style="min-height: 175px;" :id="slug(book.title)">
        <hr>
        <a :href="book.link" class="book-container" style="float: left; padding-right: 20px" target="_blank" rel="noopener noreferrer">
          <div class="book">
            <img border="0" :alt="book.title" :src="book.image" />
          </div>
        </a>
        <a :href="book.link" target="_blank" rel="noopener noreferrer">{{ book.title }}</a> by {{ book.author }}
        <br/>
        My rating: {{ book.rating }}
        <br/><br/>
        <p v-html="book.review"></p>
        <p v-if="book.notes">
          <a :href="book.notes" target="_blank" rel="noopener noreferrer">
            Read my notes
          </a>
        </p>
      </div>
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
          { hid: 'description', name: 'description', content: 'Swapnil has read ' + this.progress + ' of 50 books.' },
          { hid: 'og:title', property: 'og:title', content: this.title },
          { hid: 'og:description', property: 'og:description', content: 'Swapnil has read ' + this.progress + ' of 50 books.' },
          { hid: 'twitter:title', name: 'twitter:title', content: this.title },
          { hid: 'twitter:description', name: 'twitter:description', content: 'Swapnil has read ' + this.progress + ' of 50 books.' },
        ]
      }
    },
    data () {
      return {
        title: '2020 Reading Challenge - Swapnil Agarwal',
        books: [
          {
            title: 'Snow Crash',
            author: 'Neal Stephenson',
            link: 'https://amzn.to/38QXAvN',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385119008l/11357844._SX98_.jpg',
            review: `I LOL'd twice in the first five pages but overall it wasn't a great sci-fi for me. Maybe because I have read Ready Player One and The Gamer before!`,
            rating: '3 of 5 stars'
          },
          {
            title: 'Indistractable',
            author: 'Nir Eyal',
            link: 'https://amzn.to/2SwX3tr',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559847987l/44595007._SX98_.jpg',
            review: `I liked the part on raising indistractable children.<br />Rest was skippable - I’ve already learnt these over the years; would’ve been super helpful 5 years ago!`,
            rating: '2 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-indistractable-7af2f832a3a6'
          },
          {
            title: 'Clean Code',
            author: 'Robert C. Martin',
            link: 'https://amzn.to/2vaAbqu',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436202607l/3735293._SX98_.jpg',
            review: `This is the first book you should read when you're starting out as a developer.<br />Pro Tip: Read the first 10 chapters; skip the rest!`,
            rating: '5 of 5 stars'
          },
          {
            title: 'Dark Matter',
            author: 'Blake Crouch',
            link: 'https://amzn.to/2T42crX',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1472119680l/27833670._SX98_.jpg',
            review: `The best sci-fi I've read so far!<br />Tackles some real questions along the lines of are you happy with your life / what if / the road not taken.<br />You wouldn't be able to put it down; just read the first chapter!!`,
            rating: '5 of 5 stars'
          },
          {
            title: 'The Obstacle is the Way',
            author: 'Ryan Holiday',
            link: 'https://amzn.to/2uEwkC6',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391440316l/18668059._SX98_.jpg',
            review: `Could've been a blog post.`,
            rating: '1 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-the-obstacle-is-the-way-db44f4e69ab0'
          },
          {
            title: 'Alice in Wonderland',
            author: 'Lewis Carroll',
            link: 'https://amzn.to/2vKwubk',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391458382l/13023._SX98_.jpg',
            review: `Loved Alice's curiosity in this short and sweet adventure! And life lessons are thrown around here so casually.`,
            rating: '3 of 5 stars'
          },
          {
            title: 'Shoe Dog',
            author: 'Phil Knight',
            link: 'https://amzn.to/2IkbJGn',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457284880l/27220736._SX98_.jpg',
            review: `Loved the candid account of everyday struggles. It’s motivating to see someone’s behind-the-scenes (while the system tends to focus only on the highlight-reel!) and I wish more people share their stories.`,
            rating: '5 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-shoe-dog-c2116be07df5'
          },
          {
            title: 'The Pragmatic Programmer',
            author: 'David Thomas and Andrew Hunt',
            link: 'https://amzn.to/2STvyKR',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562150630l/45280024._SX98_.jpg',
            review: `You can make this book your mentor! Some great advice here, viz. Your Knowledge Portfolio, Estimating, and many more.`,
            rating: '4 of 5 stars'
          },
          {
            title: 'The Hitchhiker\'s Guide to the Galaxy',
            author: 'Douglas Adams',
            link: 'https://amzn.to/3czok6p',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559986152l/386162._SX98_.jpg',
            review: `First of all: Don't Panic! It's a quick read and will make you wonder about the ultimate question. Why? 42. So long, and thanks for all the fish.`,
            rating: '5 of 5 stars'
          },
          {
            title: 'Who Owns the Future?',
            author: 'Jaron Lanier',
            link: 'https://amzn.to/2PME640',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1362536648l/15802693._SX98_.jpg',
            review: `With more and more jobs getting automated, this book posits an economy of micropayments that compensates people for original material they post to the web.`,
            rating: '4 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-who-owns-the-future-8a18f33f572f'
          },
          {
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            link: 'https://amzn.to/2JvsnDk',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107._SX98_.jpg',
            review: `It's a coming-of-age story where we get a good look inside a teenager's mind. The writing is in the form of a narrative and it might take some time before you get accustomed to Holden's thoughts.`,
            rating: '3 of 5 stars'
          },
          {
            title: 'Remote',
            author: 'David Heinemeier Hansson and Jason Fried',
            link: 'https://amzn.to/2UxTtQL',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1363265098l/17316682._SX98_.jpg',
            review: `Pick this up if you need to convince your manager (or even yourself) on the benefits of remote work, which includes access to the best talent, freedom from soul-crushing commutes, and increased productivity outside the traditional office. It also debunks various myths, for example, innovation only happens face-to-face, people can’t be trusted to be productive at home, company culture would wither away, etc.`,
            rating: '4 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-remote-2c66ae1dc4dd'
          },
          {
            title: 'Don\'t Make Me Think',
            author: 'Steve Krug',
            link: 'https://amzn.to/3dDgDwn',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1384736553l/18197267._SX98_.jpg',
            review: `It's a nice introduction to UX and you'll be tempted to read more! The language is easy and you can read quite a bit in one stretch. It'll motivate you to do usability testing and also keep accessibility in mind. It also provides great insights into how we use the web today.`,
            rating: '4 of 5 stars'
          },
          {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            link: 'https://amzn.to/3aAbxPF',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427698656l/22138225._SX98_.jpg',
            review: `Lee takes time to set up the background for the story well; quite well now that I think about it. I was well-invested into the characters, especially the way how Atticus raises his children. Written from an innocent child's point of view, the book deals with themes of race, morality, class, gender, etc.`,
            rating: '4 of 5 stars'
          },
          {
            title: 'The 7 Habits of Highly Effective People',
            author: 'Stephen R. Covey',
            link: 'https://amzn.to/3dGRTn3',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421842784l/36072._SX98_.jpg',
            review: `I avoided this book for the longest time, because the title seemed clickbaity! However, it contains some really great guiding principles for life including the importance of keeping promises, empathy, etc.`,
            rating: '4 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-the-7-habits-of-highly-effective-people-ec5fb4c45f1b'
          },
          {
            title: 'The Elements of Style',
            author: 'William Strunk Jr. and E.B. White',
            link: 'https://amzn.to/2wp77MF',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393947922l/33514._SX98_.jpg',
            review: `The content is presented as a handy reference of dos and don'ts. Terms like split infinitive and gerund made me feel nostalgic for the grammar classes back in my school days.`,
            rating: '3 of 5 stars'
          },
          {
            title: 'How to Win Friends & Influence People',
            author: 'Dale Carnegie',
            link: 'https://amzn.to/3ecRU2i',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442726934l/4865._SX98_.jpg',
            review: `I could relate to many situations where I mishandled them in the past. The ideas presented in this book are simple yet effective. I've seen them work for many people, including myself. Don't just treat them as life hacks! If you're praising, do it sincerely. I'm pretty sure I need to revise it.`,
            rating: '5 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-how-to-win-friends-influence-people-f2a30951b749'
          },
          {
            title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
            author: 'Ashlee Vance',
            link: 'https://amzn.to/2JwgTzG',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1518291452l/25541028._SX98_.jpg',
            review: `In a world where the best minds of our generation are thinking about how to make people click ads, Musk is on a quest to start a colony on Mars! Love him or hate him, he certainly deserves respect for pushing clean-tech and humanity forward.`,
            rating: '5 of 5 stars'
          },
          {
            title: 'On Writing Well',
            author: 'William Zinsser',
            link: 'https://amzn.to/2Y5axiW',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1538764251l/53343._SX98_.jpg',
            review: `Writing is everywhere. You might as well learn how to write well. Topics like science and sports are also within your reach if you enjoy learning. William teaches us, among other things, how to structure a piece and write about people and places, with numerous examples. An element of surprise refreshes and delights readers. Be confident. Resist using an exclamation point! Add humor subtly.`,
            rating: '5 of 5 stars'
          },
          {
            title: 'Zen and the Art of Motorcycle Maintenance',
            author: 'Robert M. Pirsig',
            link: 'https://amzn.to/2SRvE4S',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1410136019l/629._SX98_.jpg',
            review: `It was a very heavy read. Maybe because it's a weird mix of fiction and non-fiction. Or maybe because I'm simply not ready for philosophy yet.`,
            rating: '1 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-zen-and-the-art-of-motorcycle-maintenance-184a8061206f'
          },
          {
            title: 'Hyperbole and a Half',
            author: 'Allie Brosh',
            link: 'https://amzn.to/2WXjAkb',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1409522492l/17571564._SX98_.jpg',
            review: `I thoroughly enjoyed Allie's voice and her illustrations, especially the ones involving dogs. It's pure gold. Oh, and did I say I laughed a lot? My only regret is that I finished reading it too soon. Please don't do that. Savor it.`,
            rating: '4 of 5 stars'
          },
          {
            title: 'Antifragile',
            author: 'Nassim Nicholas Taleb',
            link: 'https://amzn.to/2LGLPhH',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1380257334l/18589083._SX98_.jpg',
            review: `I really liked the concept of antifragility. Having read The Black Swan, I knew Taleb's style. I find him hard to read but the content is presented in myriad applications. So I skimmed it, making lots of notes along the way. These include the need for redundancy, stocking up for emergencies, the barbell strategy, having skin in the game, etc.`,
            rating: '4 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-antifragile-f5891474f579'
          },
          {
            title: 'Head First Design Patterns',
            author: 'Eric Freeman and Elisabeth Robson',
            link: 'https://amzn.to/2VPx6Xq',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463912451l/30250151._SX98_.jpg',
            review: `I always wanted to formally study design patterns. Like algorithms, you just need to know of their existence. If you understand their usage, there's no need to memorize them. I loved this book's style of delivering content; so conversational and full of visual examples. All technical books should be like this! Just read "How to Use This Book: Intro" and you'll know what I'm talking about.`,
            rating: '5 of 5 stars'
          },
          {
            title: 'Adulthood Is a Myth',
            author: 'Sarah Andersen',
            link: 'https://amzn.to/2WLclge',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1481219756l/25855506._SX98_.jpg',
            review: `Adulting sucks, and this is a nice reminder that you are not alone. As an introvert, this hit the spot at so many levels: the evergreen question of why are you so quiet, making excuses for not picking up the phone, people trying to help without you asking, and many more!`,
            rating: '3 of 5 stars'
          },
          {
            title: 'Losing My Virginity',
            author: 'Richard Branson',
            link: 'https://amzn.to/2ZAVY7P',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388216295l/211099._SX98_.jpg',
            review: `I loved the first half; the second half not so much. The diversity of Branson's businesses and his willingness to try everything once are commendable. Oh screw it, let's do it!`,
            rating: '4 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-losing-my-virginity-55c496878d8a'
          },
          {
            title: 'Understanding Comics',
            author: 'Scott McCloud',
            link: 'https://amzn.to/2XMXHUY',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519650031l/38763983._SX98_.jpg',
            review: `It's a comic book about comics.`,
            rating: '3 of 5 stars'
          },
          {
            title: 'Homo Deus',
            author: 'Yuval Noah Harari',
            link: 'https://amzn.to/3hKXaw2',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1468760805l/31138556._SX98_.jpg',
            review: `After reading Sapiens last year, I was looking forward to reading this - another thought-provoking one from Harari!`,
            rating: '4 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-homo-deus-d49cdb114b03'
          },
          {
            title: 'No Hard Feelings',
            author: 'Liz Fosslien and Mollie West Duffy',
            link: 'https://amzn.to/36QN73a',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541734762l/42734244._SX98_.jpg',
            review: `No one talks about emotion at work! Liz and Mollie present actionable ideas for making life better. The future of work is emotional so we might as well begin to work on it.`,
            rating: '5 of 5 stars'
          },
          {
            title: 'Steal Like an Artist',
            author: 'Austin Kleon',
            link: 'https://amzn.to/3dr6ilR',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404576602l/13099738._SX98_.jpg',
            review: `Everything's a remix! Everything that needs to be said has already been said. But, since no one was listening, everything must be said again. This book came to me at the right time. If you're picking this, pair it up with The War of Art.`,
            rating: '5 of 5 stars'
          },
          {
            title: 'Digital Minimalism',
            author: 'Cal Newport',
            link: 'https://amzn.to/3hZqOO9',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549433350l/40672036._SX98_.jpg',
            review: `Skip the first half! The second half has practical advice to incorporate into your life. I've already been doing most of them hence the low rating.`,
            rating: '2 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-digital-minimalism-30897b872688'
          },
          {
            title: 'Show Your Work!',
            author: 'Austin Kleon',
            link: 'https://amzn.to/3bjlnXh',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404580714l/18290401._SX98_.jpg',
            review: `"All of us who do creative work, we get into it because we have good taste. But there is this gap. For the first couple years you make stuff, it’s just not that good. It’s trying to be good, it has potential, but it’s not. But your taste, the thing that got you into the game, is still killer." ― Ira Glass`,
            rating: '5 of 5 stars'
          },
          {
            title: 'Prisoners of Geography',
            author: 'Tim Marshall',
            link: 'https://amzn.to/2QGlByr',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432827094l/25135194._SX98_.jpg',
            review: `This is a good primer on geography and politics. It's not meant to be read in one sitting; the information can be overwhelming! Keep a map handy for better understanding.`,
            rating: '3 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-prisoners-of-geography-1b33646d4a32'
          },
          {
            title: 'Algorithms to Live By',
            author: 'Brian Christian and Tom Griffiths',
            link: 'https://amzn.to/32IgxPE',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454296875l/25666050._SX98_.jpg',
            review: `Optimal stopping tells us when to look and when to leap. The explore/exploit tradeoff tells us how to find the balance between trying new things and enjoying our favorites. Sorting theory tells us how (and whether) to arrange our offices. Caching theory tells us how to fill our closets. Scheduling theory tells us how to fill our time.`,
            rating: '3 of 5 stars'
          },
          {
            title: 'Design as Art',
            author: 'Bruno Munari',
            link: 'https://amzn.to/32IqAUT',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1359388850l/6095883._SX98_.jpg',
            review: `This made me realize that the world of design is quite vast and I've just scratched the surface.`,
            rating: '3 of 5 stars'
          },
          {
            title: '12 Rules for Life',
            author: 'Jordan B. Peterson',
            link: 'https://amzn.to/32CopBW',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512705866l/30257963._SX98_.jpg',
            review: `Some of the analogies are good. It started out strong but the book is way too long for its content.`,
            rating: '1 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-12-rules-for-life-97f4aaf156'
          },
          {
            title: 'Rich Dad Poor Dad',
            author: 'Robert T. Kiyosaki',
            link: 'https://amzn.to/3kEvDwZ',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524451661l/39924789._SX98_.jpg',
            review: `I resonated quite a lot with the ideas presented in this book. It's a nice introduction and you'll realize that there are a lot of things you don't know. Now I need a companion book to go deep into the financial world.`,
            rating: '4 of 5 stars'
          },
          {
            title: 'Tao Te Ching',
            author: 'Lao Tzu',
            link: 'https://amzn.to/31LzT7c',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1558122428l/45869611._SX98_.jpg',
            review: `YMMV`,
            rating: '1 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-tao-te-ching-beff666deb60'
          },
          {
            title: 'The Clean Coder',
            author: 'Robert C. Martin',
            link: 'https://amzn.to/2ZxecFp',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347470803l/10284614._SX98_.jpg',
            review: `Although the content is similar to The Pragmatic Programmer, I liked this book more because a) it was written by Uncle Bob and b) it has a lot of personal stories. I loved the concept of wildly optimistic, nominal, and wildly pessimistic estimates. We tend to estimate projects optimistically; having the above 3 estimates laid out can help paint a better picture here.`,
            rating: '5 of 5 stars'
          },
          {
            title: 'Think and Grow Rich',
            author: 'Napoleon Hill',
            link: 'https://amzn.to/35Q2ASQ',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579600057l/50614141._SX98_.jpg',
            review: `I tried hard to find any takeaways from this book. Not for me!`,
            rating: '1 of 5 stars'
          },
          {
            title: 'Influence',
            author: 'Robert B. Cialdini',
            link: 'https://amzn.to/2YXiart',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391026083l/28815._SX98_.jpg',
            review: `Robert explains the concepts behind manipulation techniques which are widely in use today. There are some heuristics we use in our everyday life to get by. They serve us right for the most part but leave us vulnerable to get tricked easily. Being aware of such tactics is a good first step to start recognizing them and remain uninfluenced.`,
            rating: '5 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-influence-da8e40cce3c1'
          },
          {
            title: 'The 4-Hour Body',
            author: 'Timothy Ferriss',
            link: 'https://amzn.to/36W4Mc3',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1413132348l/17429690._SX98_.jpg',
            review: `I loved how actionable this is! Tim provides a low-friction approach to reap benefits; you don't need to read the whole book, just skip to the sections that are most relevant to your body right now. I made lots of notes along the way (skimmed the parts mentioning supplements) and have already started incorporating some of the changes in my day-to-day life.`,
            rating: '4 of 5 stars'
          },
          {
            title: 'On the Shortness of Life',
            author: 'Seneca',
            link: 'https://amzn.to/3lQ6znl',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574250997l/1384442._SX98_.jpg',
            review: `It's a good reminder that life is short, so do things that you love doing. There's no point toiling to acquire things you wouldn't enjoy for long. My main problem with this is that the language used is unnecessarily complex (both in terms of sentence structure and words). The book consists of 3 letters. The first is quite good and I'll probably read it again next year. Skip the second one, skim the third.`,
            rating: '3 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-on-the-shortness-of-life-f5f0377ebe29'
          },
          {
            title: 'Lean In',
            author: 'Sheryl Sandberg',
            link: 'https://amzn.to/3ihV71l',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1364250803l/16071764._SX98_.jpg',
            review: `This has takeaways for everyone in the tech industry. For a preview, watch her TED talk. Sheryl doesn't rant or blame anyone for the current situation. Rather, she shares anecdotes acknowledging it and suggests ways we can improve the ratio of women in leadership roles. It's time to lean in!`,
            rating: '4 of 5 stars'
          },
          {
            title: 'Born to Run',
            author: 'Christopher McDougall',
            link: 'https://amzn.to/3drkFID',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507647408l/11398264._SX98_.jpg',
            review: `I ran a 10k last year and was done with running. Reading this memoir has rekindled my interest. Now I want to push myself more. Half-marathon, here I come!`,
            rating: '3 of 5 stars'
          },
          {
            title: 'The Hard Thing About Hard Things',
            author: 'Ben Horowitz',
            link: 'https://amzn.to/30UAX7F',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386609333l/18176747._SX98_.jpg',
            review: `Ben goes deep into the struggles a CEO faces on a daily basis. Pick this up (along with The Culture Code) if you're already running a business or aspire to start one. It made me understand the reasons behind the processes at large companies.`,
            rating: '5 of 5 stars',
            notes: 'https://medium.com/@swap/book-notes-the-hard-thing-about-hard-things-3fc6e9093061'
          },
          {
            title: 'The Checklist Manifesto',
            author: 'Atul Gawande',
            link: 'https://amzn.to/3nvYIfX',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1312061594l/6667514._SX98_.jpg',
            review: `Have you noticed that the construction and aviation industries have very low error rates? Well, it might sound boring but they use checklists! Loaded with stories, Atul takes us on a journey to create a 90-second checklist in the world of surgery that ended up reducing the fatality rate by a third.`,
            rating: '3 of 5 stars',
            notes: 'https://swap.medium.com/book-notes-the-checklist-manifesto-a1d549dc8af9'
          },
        ]
      }
    },
    computed: {
      progress: function () {
        return this.books.length
      }
    },
    methods: {
      slug: function (url) {
        return url.toLowerCase().replace(/ +/g, '-')
      },
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
.reads {
  width: 80%;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
}

.book-container {
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 600px;
}

@keyframes initAnimation {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-30deg);
  }
}

.book {
  width: 100px;
  height: 150px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(-30deg);
  transition: 1s ease;
  animation: 1s ease 0s 1 initAnimation;
}

.book:hover {
  transform: rotateY(0deg);
}

.book > :first-child {
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  width: 100px;
  height: 150px;
  transform: translateZ(12.5px);
  background-color: #01060f;
  border-radius: 0 2px 2px 0;
  box-shadow: 2px 2px 10px #666;
}

.book::before {
  position: absolute;
  content: ' ';
  background-color: blue;
  left: 0;
  top: 3px;
  width: 23px;
  height: 144px;
  transform: translateX(84.5px) rotateY(90deg);
  background: linear-gradient(90deg,
    #fff 0%,
    #f9f9f9 5%,
    #fff 10%,
    #f9f9f9 15%,
    #fff 20%,
    #f9f9f9 25%,
    #fff 30%,
    #f9f9f9 35%,
    #fff 40%,
    #f9f9f9 45%,
    #fff 50%,
    #f9f9f9 55%,
    #fff 60%,
    #f9f9f9 65%,
    #fff 70%,
    #f9f9f9 75%,
    #fff 80%,
    #f9f9f9 85%,
    #fff 90%,
    #f9f9f9 95%,
    #fff 100%
    );
}

.book::after {
  position: absolute;
  top: 0;
  left: 0;
  content: ' ';
  width: 100px;
  height: 150px;
  transform: translateZ(-12.5px);
  background-color: #01060f;
  border-radius: 0 2px 2px 0;
  box-shadow: -5px 0 25px 5px #666;
}
</style>
