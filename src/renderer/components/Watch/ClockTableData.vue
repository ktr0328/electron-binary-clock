<template lang="pug">
  tr
    td {{title}}
    td(v-for="v in data")
      i(v-if="v === '0'").el-icon-star-off.star.off
      i(v-else).el-icon-star-on.star.on
</template>

<script>
  export default {
    name: 'clock-table-data',
    props: ['title', 'data']
  }
</script>

<style lang="sass" scoped>
  td
    i
      font-size: 3em
    .star
      transition-property: color, -webkit-transform
      transition-duration: 1s
      color: cornflowerblue

    .star.on
      color: cornflowerblue
      -webkit-transform: rotate(0deg)

    .star.off
      color: #444
      -webkit-transform: rotate(360 - 72deg)

</style>
