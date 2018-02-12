<template lang="pug">
  div#app
    el-container
      el-aside
        ul
          li
            router-link(to="watch") Binary Clock
          li
            router-link(to="test-page") Test Page
          li
            router-link(to="landing-page") Landing Page
      router-view
</template>

<script>
  export default {
    name: 'vue-electron-watch'
  }
</script>

<style lang="sass">
  *
    font-family: "Ricty Diminished", sans-serif
    background-color: #333
    color: #ddd
  ul
    padding: 10px
    list-style-type: none
    overflow: scroll
    li
      padding-bottom: 5px
</style>
