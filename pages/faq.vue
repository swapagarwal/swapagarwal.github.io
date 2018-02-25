<template>
    <div class="container">
        <div style="display: inline-block; text-align: left;">
            <h1 class="title">Frequently Asked Questions</h1>
            <br><br>
            <ul>
                <li class="list-item"><a href="#career">What should I do about my career?</a></li>
                <li class="list-item"><a href="#code">How do I become a better programmer?</a></li>
                <li class="list-item"><a href="#recommend">Which books / apps do you recommend?</a></li>
            </ul>
            <br>
            <hr id="career">
            <br><br>
            <h2 class="subtitle">What should I do about my career?</h2>
            <br>
            <p>Read the book "<a href="http://amzn.to/2otKmza">So Good They Can't Ignore You</a>".</p>
            <br>
            <hr id="code">
            <br><br>
            <h2 class="subtitle">How do I become a better programmer?</h2>
            <br>
            <p>Read the book "<a href="http://amzn.to/2Ftdwqh">Clean Code</a>".</p>
            <br>
            <hr id="recommend">
            <br><br>
            <h2 class="subtitle">Which other books / apps do you recommend?</h2>
            <br>
            <p>
                Apps:<br>
                <ul>
                    <li class="list-item">Blinkist</li>
                    <li class="list-item">Headspace</li>
                </ul>
                Books:<br>
                <ul>
                    <li class="list-item">The Alchemist</li>
                    <li class="list-item">Anything You Want</li>
                </ul>
            </p>
        </div>
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
    margin-bottom: 10px;
}

.h2 {
    margin-top: 30px;
    line-height: 60px;
}
</style>
