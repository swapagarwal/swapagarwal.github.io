<template>
    <div>
        <Header/>
        <div class="uses">
            <h2>🦄 Things I use:</h2>
            <ul>
                <li>
                    ⚔️ <a href="https://todoist.com/r/swapnilagarwal1994_powvaa" target="_blank" rel="noopener noreferrer">Todoist</a> for task management <a href="https://buttondown.email/swap/archive/a-personal-assistant-to-maximize-your-productivity/" target="_blank" rel="noopener noreferrer">Read more...</a>
                <li>
                    🌐 <a href="https://www.namecheap.com/" target="_blank" rel="noopener noreferrer">Namecheap</a> for registering domains
                </li>
                <li>
                    🏃‍♂️ <a href="https://airtable.com/invite/r/3vcHWIIt" target="_blank" rel="noopener noreferrer">Airtable</a> for spinning up a quick database
                </li>
                <li>
                    ✍️ <a href="https://www.notion.so/?r=ee9dea5d2e09438480bb97aa7a338770" target="_blank" rel="noopener noreferrer">Notion</a> for documentation
                </li>
                <li>
                    👨‍💻 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> as my primary editor
                </li>
                <li>
                    ⬛ <a href="https://www.iterm2.com/" target="_blank" rel="noopener noreferrer">iTerm2</a> as my terminal (with <a href="https://github.com/robbyrussell/oh-my-zsh" target="_blank" rel="noopener noreferrer">oh-my-zsh</a> framework)
                </li>
                <li>
                    🌙 <a href="https://justgetflux.com/" target="_blank" rel="noopener noreferrer">f.lux</a> to make life better
                </li>
                <li>
                    🗒️ <strike><a href="http://www.clipmenu.com/" target="_blank" rel="noopener noreferrer">ClipMenu</a></strike>&nbsp;<a href="https://pasteapp.me/" target="_blank" rel="noopener noreferrer">Paste</a> as my clipboard manager
                </li>
                <li>
                    ☕ <a href="https://itunes.apple.com/us/app/amphetamine/id937984704?mt=12" target="_blank" rel="noopener noreferrer">Amphetamine</a> for keeping mac awake
                </li>
                <li>
                    🚀 <a href="https://matthewpalmer.net/rocket/" target="_blank" rel="noopener noreferrer">Rocket</a> to keep emojis at my fingertips
                </li>
                <li>
                    🔑 <a href="https://myki.com/" target="_blank" rel="noopener noreferrer">Myki</a> for managing passwords w/o a master password <a href="https://buttondown.email/swap/archive/password-manager-wo-a-master-password/" target="_blank" rel="noopener noreferrer">Read more...</a>
                </li>
                <li>
                    💭 <a href="https://dayoneapp.com/" target="_blank" rel="noopener noreferrer">Day One</a> for capturing moments <a href="https://buttondown.email/swap/archive/how-accurately-can-you-remember-distant-memories/" target="_blank" rel="noopener noreferrer">Read more...</a>
                </li>
                <li>
                    🗃️ <a href="https://db.tt/OYuASVR3HM" target="_blank" rel="noopener noreferrer">Dropbox</a> for backup purposes
                </li>
                <li>
                    🎵 <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">Spotify</a> for its awesome dose of discover weekly
                </li>
                <li>
                    🦊 <a href="https://www.mozilla.org/en-US/firefox/mobile/" target="_blank" rel="noopener noreferrer">Firefox Focus</a> for mobile browsing
                </li>
                <li>
                    📌 <a href="https://www.pushbullet.com/" target="_blank" rel="noopener noreferrer">PushBullet</a> to share stuff b/w devices
                </li>
                <li>
                    🎨 <strike><a href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer">Sketch</a></strike>&nbsp;<a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a> for design
                </li>
                <li>
                    📚 <a href="https://amzn.to/37E0O6k" target="_blank" rel="noopener noreferrer">Kindle</a> to read non-fiction books
                </li>
                <li>
                    🎹 <a href="https://amzn.to/2YJ7rQv" target="_blank" rel="noopener noreferrer">Yamaha F51</a> as my musical keyboard
                </li>
                <li>
                    🎸 <a href="https://amzn.to/3hxqFRM" target="_blank" rel="noopener noreferrer">Yamaha F310</a> as my guitar
                </li>
                <li>
                    🥁 <a href="https://amzn.to/3eePHmE" target="_blank" rel="noopener noreferrer">Clapbox CB11</a> as my cajon
                </li>
            </ul>
            <div class="commentbox"></div>
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
  mounted() {
    commentBox('5665346656665600-proj')
  }
}
</script>

<style scoped>
.uses {
  width: 80%;
  margin: auto;
  margin-top: 100px;
}
</style>
