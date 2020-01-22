<template>
  <div>
    <Header/>
    <div class="reads">
      This page tracks the books I've read from Jan 2020!
      <br>
      <a href="https://www.goodreads.com/review/list/50197980-swapnil-agarwal" target="_blank" rel="noopener noreferrer">View all my reviews on Goodreads</a>
      <br>
      <div v-for="book in books" :key="book.title">
        <hr>
        <a :href="book.link" style="float: left; padding-right: 20px" target="_blank" rel="noopener noreferrer">
          <img border="0" :alt="book.title" :src="book.image" />
        </a>
        <a :href="book.link" target="_blank" rel="noopener noreferrer">{{ book.title }}</a> by {{ book.author }}
        <br/>
        My rating: {{ book.rating }}
        <br/><br/>
        {{ book.review }}
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
