<template lang="pug">
  div
    el-header
      h1 Binary Clock @{{now.format('HH:mm:ss')}}
    el-main
      table
        tr
          th(v-for="v in clock.definition") {{v}}
        clock-table-data(title="h" v-bind:data="clock.hh")
        clock-table-data(title="m" v-bind:data="clock.mm")
        clock-table-data(title="s" v-bind:data="clock.ss")
</template>

<script>
  import moment from 'moment'
  import ClockTableData from './Watch/ClockTableData'

  export default {
    name: 'watch',
    data () {
      return {
        now: '',
        clock: {
          definition: ['', 32, 16, 8, 4, 2, 1],
          hh: '',
          mm: '',
          ss: ''
        }
      }
    },
    mounted: function () {
      this.update()
      setInterval(this.update, 1000)
    },
    methods: {
      update: function () {
        this.now = moment()
        const time = this.now

        this.clock.hh = this.to_b(time.format('HH'))
        this.clock.mm = this.to_b(time.format('mm'))
        this.clock.ss = this.to_b(time.format('ss'))
      },
      to_b: function (time) {
        const length = this.clock.definition.length - 1
        return ('0'.repeat(length) + parseInt(time).toString(2))
          .substr(-length, length)
          .split('')
      }
    },
    components: {ClockTableData}
  }
</script>

<style lang="sass" scoped>
  table
    th
      opacity: 0.5
</style>
