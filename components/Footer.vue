<template>
  <div class="footer">
    <fab
      :position="position"
      :bg-color="bgColor"
      :main-icon="mainIcon"
      :icon-size="iconSize"
      :actions="fabActions"
      @home="home"
      @projects="projects"
      @ideas="ideas"
      @faq="faq"
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
      position: 'top-left',
      mainIcon: 'menu',
      iconSize: 'small',
      fabActions: [
        {
          name: 'home',
          icon: 'home',
          tooltip: 'Home'
        },
        {
          name: 'projects',
          icon: 'folder_special',
          tooltip: 'Projects'
        },
        {
          name: 'ideas',
          icon: 'highlight',
          tooltip: 'Ideas'
        },
        {
          name: 'faq',
          icon: 'question_answer',
          tooltip: 'F.A.Q.'
        }
      ]
    }
  },
  methods: {
    home () {
      window.open('/', '_self')
    },
    projects () {
      window.open('/projects', '_self')
    },
    ideas () {
      window.open('/ideas', '_self')
    },
    faq () {
      window.open('/faq', '_self')
    }
  }
}
</script>

<style scoped>

</style>
