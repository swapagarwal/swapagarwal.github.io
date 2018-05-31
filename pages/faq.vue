<template>
    <div class="container">
        <div style="display: inline-block; text-align: left;">
            <h1 class="title">Frequently Asked Questions</h1>
            <br><br>
            <ul>
                <li class="list-item"><a href="#career">What should I do about my career?</a></li>
                <li class="list-item"><a href="#code">How do I become a better programmer?</a></li>
                <li class="list-item"><a href="#motivation">I need some quick motivation!</a></li>
                <li class="list-item"><a href="#recommend">Which other things do you recommend?</a></li>
                <li class="list-item"><a href="#advice">Any general advice?</a></li>
            </ul>
            <br>
            <hr id="career">
            <br><br>
            <h2 class="subtitle">What should I do about my career?</h2>
            <br>
            <p>
                Read the book "<a target="_blank" href="http://amzn.to/2otKmza">So Good They Can't Ignore You</a>".
                <br><br>
                <a href="https://www.amazon.in/Good-They-Cant-Ignore-You/dp/0349420211/ref=as_li_ss_il?ie=UTF8&linkCode=li3&tag=swap06c-21&linkId=f1f787f84e95f992e9b7cd69c5c7b58c" target="_blank"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0349420211&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=swap06c-21" ></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=swap06c-21&l=li3&o=31&a=0349420211" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            </p>
            <br>
            <hr id="code">
            <br><br>
            <h2 class="subtitle">How do I become a better programmer?</h2>
            <br>
            <p>
                Read the book "<a target="_blank" href="http://amzn.to/2Ftdwqh">Clean Code</a>".
                <br><br>
                <a href="https://www.amazon.in/Clean-Code-Robert-C-Martin/dp/8131773388/ref=as_li_ss_il?_encoding=UTF8&qid=1519495443&sr=8-2&linkCode=li3&tag=swap06c-21&linkId=e11fa95ffbf6b2f6cd1e4fc2f22f2638" target="_blank"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=8131773388&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=swap06c-21" ></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=swap06c-21&l=li3&o=31&a=8131773388" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            </p>
            <br>
            <hr id="motivation">
            <br><br>
            <h2 class="subtitle">I need some quick motivation!</h2>
            <br>
            <p>Listen to "<a target="_blank" href="https://open.spotify.com/album/3LF93q2V8mFvMxR2tWIY5y">Fearless Motivation</a>" on Spotify.</p>
            <br>
            <hr id="recommend">
            <br><br>
            <h2 class="subtitle">Which other things do you recommend?</h2>
            <br>
            <p>
                Apps:<br>
                <ul>
                    <li class="list-item"><a target="_blank" href="http://blinki.st/a3d9d82bdf9d">Blinkist</a></li>
                    <li class="list-item"><a target="_blank" href="https://www.headspace.com/">Headspace</a></li>
                </ul>
                Books (Read a lot. Buy a <a target="_blank" href="http://amzn.to/2F2M1CM">Kindle</a>!):<br>
                <ul>
                    <li class="list-item"><a target="_blank" href="https://amzn.to/2JtQ4ud">The Alchemist</a></li>
                    <li class="list-item"><a target="_blank" href="https://amzn.to/2HBDcQP">Sapiens: A Brief History of Humankind</a></li>
                    <li class="list-item"><a target="_blank" href="https://amzn.to/2JxGqqD">Hooked: How to Build Habit-Forming Products</a></li>
                    <li class="list-item"><a target="_blank" href="https://amzn.to/2l0Gd4B">Anything You Want</a></li>
                </ul>
                Games:<br>
                <ul>
                    <li class="list-item"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.nekki.shadowfight">Shadow Fight 2</a></li>
                </ul>
                Coding:<br>
                <ul>
                    <li class="list-item">Best Programming Courses & Tutorials: <a target="_blank" href="https://hackr.io/">https://hackr.io/</a></li>
                </ul>
            </p>
            <br>
            <hr id="advice">
            <br><br>
            <h2 class="subtitle">Any general advice?</h2>
            <br>
            <ul>
                <li class="list-item">Ship every day. Every. Single. Day. Thank me later! :D</li>
            </ul>
        </div>
        <div id="disqus_thread"></div>
        <script>
        var disqus_config = function () {
            this.page.url = "http://swapnil.net/faq";
            this.page.identifier = "faq";
        };
        (function() {
            var d = document, s = d.createElement('script');
            s.src = 'https://swapnil-net.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
</template>

<script>
    export default {

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
