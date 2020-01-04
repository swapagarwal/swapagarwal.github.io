<template>
  <div class="footer">
    <!-- <fab
      :position="position"
      :bg-color="bgColor"
      :main-icon="mainIcon"
      :icon-size="iconSize"
      :actions="fabActions"
      @uses="uses"
      @fund="fund"
    ></fab> -->
    <!-- Last updated on: {{ lastUpdatedOn }} -->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      lastUpdatedOn: new Date(document.lastModified).toDateString(),
      bgColor: '#808080',
      position: 'top-right',
      mainIcon: 'menu',
      iconSize: 'small',
      fabActions: [
        {
          name: 'uses',
          icon: 'school',
          tooltip: 'Uses'
        },
        {
          name: 'fund',
          icon: 'attach_money',
          tooltip: 'Fund'
        }
      ]
    }
  },
  methods: {
    uses () {
      window.open('/uses', '_self')
    },
    fund () {
      window.open('/fund', '_self')
    }
  }
}
</script>

<style scoped>

</style>
