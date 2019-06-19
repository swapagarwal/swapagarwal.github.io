<template>
    <div>
        <Header/>
        <div class="projects">
            <div style="text-align: center;">
                <a href="https://github.com/swapagarwal" target="_blank" rel="noopener noreferrer">Follow me on GitHub</a> to see what I'm currently working on!
                <br><br>
                <div class="github-card" data-github="swapagarwal" data-width="400" data-height="152" data-theme="default"></div>
        <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
            </div>
            <br>
            Some of my projects include:<br>
            (P.S. If the layout seems broken, please refresh the page.)
            <br><br>
            <div style="display: flex; flex-wrap: wrap;">
                <div class="card">
                    <div class="container padding">
                        <gh-btns-star
                            slug="swapagarwal/swag-for-dev"
                            show-count
                        />
                        <gh-btns-fork
                            slug="swapagarwal/swag-for-dev"
                            show-count
                        />
                    </div>
                    <a href="http://devswag.io/" target="_blank" rel="noopener noreferrer">
                        <img src="https://partners.npmjs.com/weekly/weekly30/socks-1100x.jpg" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4>
                                <b>swag-for-dev</b>
                            </h4>
                            <p>😎 swag opportunities for developers</p>
                        </div>
                    </a>
                </div>
                <div class="card">
                    <div class="container padding">
                        <gh-btns-star
                            slug="swapagarwal/JARVIS-on-Messenger"
                            show-count
                        />
                        <gh-btns-fork
                            slug="swapagarwal/JARVIS-on-Messenger"
                            show-count
                        />
                    </div>
                    <a href="https://github.com/swapagarwal/JARVIS-on-Messenger" target="_blank" rel="noopener noreferrer">
                        <img src="https://slideplayer.com/slide/8640299/26/images/1/Initializing%E2%80%A6.jpg" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4>
                                <b>JARVIS-on-Messenger</b>
                            </h4>
                            <p>💬 A community-driven python bot that aims to be as simple as possible to serve humans with their everyday tasks</p>
                        </div>
                    </a>
                </div>
                <div class="card">
                    <div class="container padding">
                        <gh-btns-star
                            slug="swapagarwal/awesome-eli5"
                            show-count
                        />
                        <gh-btns-fork
                            slug="swapagarwal/awesome-eli5"
                            show-count
                        />
                    </div>
                    <a href="https://github.com/swapagarwal/awesome-eli5" target="_blank" rel="noopener noreferrer">
                        <img src="https://howhttps.works/assets/images/how-https-works-open-graph.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4>
                                <b>awesome-eli5</b>
                            </h4>
                            <p>👶 Technical concepts explained in layman terms! git.io/eli5</p>
                        </div>
                    </a>
                </div>
                <div class="card">
                    <div class="container padding">
                        <gh-btns-star
                            slug="swapagarwal/awesome-inspiration"
                            show-count
                        />
                        <gh-btns-fork
                            slug="swapagarwal/awesome-inspiration"
                            show-count
                        />
                    </div>
                    <a href="https://github.com/swapagarwal/awesome-inspiration" target="_blank" rel="noopener noreferrer">
                        <img src="https://callingdreams.com/wp-content/uploads/2016/02/Michael-Jordan-Quote-1.jpg" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4>
                                <b>awesome-inspiration</b>
                            </h4>
                            <p>🔥 A curated list of content worth sharing to help you get inspired! ⚡️</p>
                        </div>
                    </a>
                </div>
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
            <br><br><br><br>
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
.projects {
  width: 80%;
  margin: auto;
  margin-top: 100px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  min-width: 400px;
  max-width: 400px;
  border-radius: 5px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 8px 16px 0px 16px;
}

.padding {
  padding: 12px 10px 12px 10px;
}

a:hover, a:visited, a:link, a:active {
  color: black;
  text-decoration: none;
}
</style>
