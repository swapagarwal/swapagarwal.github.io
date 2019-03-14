<template>
  <div class="header">
    <nuxt-link to="/" exact>Home</nuxt-link>
    <nuxt-link to="/projects">Projects</nuxt-link>
    <nuxt-link to="/ideas">Ideas</nuxt-link>
    <nuxt-link to="/faq">F.A.Q.</nuxt-link>
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
}
a {
  margin-right: 20px;
  font-size: 14px;
  color: #999;
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
  color: #333;
}
a.nuxt-link-active {
  color: #333;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  font-weight: 600;
}
</style>
