<template>
  <div class="footer">
    Last updated on: {{ lastUpdatedOn }}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      lastUpdatedOn: new Date(document.lastModified).toDateString()
    }
  }
}
</script>

<style scoped>

</style>
