<template>
  <div>
    <Header/>
    <div class="reads">
      In 2020, I want to read 50 books.
      <br>
      Challenge progress: {{ progress }} books down, {{ 50 - progress }} more to go. (updated weekly, well hopefully weekly!)
      <br>
      <a href="https://www.goodreads.com/review/list/50197980-swapnil-agarwal" target="_blank" rel="noopener noreferrer">View all my reviews on Goodreads</a>
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
          }
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
