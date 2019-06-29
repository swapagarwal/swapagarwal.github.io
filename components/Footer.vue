<template>
  <div class="footer">
    <fab
      :position="position"
      :bg-color="bgColor"
      :main-icon="mainIcon"
      :icon-size="iconSize"
      :actions="fabActions"
      @uses="uses"
    ></fab>
    <!-- Last updated on: {{ lastUpdatedOn }} -->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      lastUpdatedOn: new Date(document.lastModified).toDateString(),
      bgColor: '#000000',
      position: 'top-right',
      mainIcon: 'menu',
      iconSize: 'small',
      fabActions: [
        {
          name: 'uses',
          icon: 'school',
          tooltip: 'Uses'
        }
      ]
    }
  },
  methods: {
    uses () {
      window.open('/uses', '_self')
    }
  }
}
</script>

<style scoped>

</style>
