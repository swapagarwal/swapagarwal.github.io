<template>
  <div class="footer">
    Last updated on: {{ lastUpdatedOn }}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      lastUpdatedOn: document.lastModified
    }
  }
}
</script>

<style scoped>

</style>
