<template>
  <div>
    <Header/>
    <div class="reads">
      In 2020, I want to read 50 books. This page tracks the challenge progress (updated weekly, well hopefully weekly!).
      <br>
      <a href="https://www.goodreads.com/review/list/50197980-swapnil-agarwal" target="_blank" rel="noopener noreferrer">View all my reviews on Goodreads</a>
      <br>
      <div v-for="book in books" :key="book.title" style="min-height: 175px;">
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
            review: `I liked part 6 - raising indistractable children. 🤞<br />Rest was skippable - I’ve already learnt these over the years; would’ve been super helpful 5 years ago!`,
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
          }
        ]
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
