<template lang="pug">
  div.clock-container
    table
      tr
        th(v-for="v in clock.definition") {{v}}
      clock-table-row(title="y" v-bind:data="clock.year")
      clock-table-row(title="m" v-bind:data="clock.month")
      clock-table-row(title="d" v-bind:data="clock.day")
      clock-table-row(title="h" v-bind:data="clock.hour")
      clock-table-row(title="m" v-bind:data="clock.minute")
      clock-table-row(title="s" v-bind:data="clock.second")
</template>

<script>
  import moment from 'moment'
  import ClockTableRow from './Watch/ClockTableData'

  export default {
    name: 'watch',
    data () {
      return {
        now: moment(),
        clock: {
          definition: ['', 32, 16, 8, 4, 2, 1],
          year: '',
          month: '',
          day: '',
          hour: '',
          minute: '',
          second: ''
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

        this.clock.year = this.to_b(time.format('YY'))
        this.clock.month = this.to_b(time.format('MM'))
        this.clock.day = this.to_b(time.format('DD'))
        this.clock.hour = this.to_b(time.format('HH'))
        this.clock.minute = this.to_b(time.format('mm'))
        this.clock.second = this.to_b(time.format('ss'))
      },
      to_b: function (time) {
        const length = this.clock.definition.length - 1
        return ('0'.repeat(length) + parseInt(time).toString(2))
          .substr(-length, length)
          .split('')
      }
    },
    components: {ClockTableRow}
  }
</script>

<style lang="sass" scoped>
  .clock-container
    margin: auto
    height: 100%
    table
      th
        text-align: center
        opacity: 1
</style>
