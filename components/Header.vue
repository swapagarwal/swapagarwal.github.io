<template>
  <div class="header" align="center">
    <div style="display: flex; justify-content: center; align-items: center; margin-top: 20px">
      <div style="float:left">
        <img src="/avatar.png" style="border-radius:100%" width="100" height="100">
      </div>
      <div style="float:left; margin-left: 20px">
        <nuxt-link to="/" exact>&nbsp;🏡 Home&nbsp;</nuxt-link>
        <!-- <nuxt-link to="/projects">&nbsp;📂 Projects&nbsp;</nuxt-link> -->
        <!-- <nuxt-link to="/consulting">&nbsp;🤝 Consulting&nbsp;</nuxt-link> -->
        <nuxt-link to="/reads">&nbsp;📚️ Reads&nbsp;</nuxt-link>
        <nuxt-link to="/writes">&nbsp;✍️ Writes&nbsp;</nuxt-link>
        <nuxt-link to="/uses">&nbsp;🎁 Uses&nbsp;</nuxt-link>
        <!-- <nuxt-link to="/ideas">&nbsp;🧠 Ideas&nbsp;</nuxt-link> -->
        <nuxt-link to="/faq">&nbsp;❓ F.A.Q.&nbsp;</nuxt-link>
        <nuxt-link to="/subscribe">&nbsp;📢 Subscribe&nbsp;</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  display: flex;
  margin-bottom: 20px;
  overflow: hidden;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  display: block;
  background-color: #fff;
}
a {
  margin-right: 20px;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  padding-top: 2px;
  padding-bottom: 2px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: color .25s;
  font-weight: 400;
  line-height: normal;
}
a:hover {
  color: #000;
}
a.nuxt-link-active {
  color: #000;
  border-bottom: 1px solid #000;
  font-weight: 600;
}
</style>
