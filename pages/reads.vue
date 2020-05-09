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
        <a :href="book.link" style="float: left; padding-right: 20px" target="_blank" rel="noopener noreferrer">
          <img border="0" :alt="book.title" :src="book.image" />
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
    data () {
      return {
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
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657._SX98_.jpg',
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
      }
    }
  }
</script>

<style scoped>
.reads {
  width: 80%;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
