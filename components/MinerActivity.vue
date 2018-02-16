<template>
  <div class="miner-activity" @click="toggle">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      :style="{ stroke: (isRunning) ? '#fff' : '#555' }">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  </div>
</template>

<script>
import Miner from '~/core/coinhive'

export default {
  name: 'miner-activity',

  mounted () {
    this.miner = new Miner()
    this.miner.start()
  },

  data () {
    return {
      miner: null
    }
  },

  methods: {
    stop () {
      this.miner.stop()
    },

    start () {
      this.miner.start()
    },

    toggle () {
      if (this.isRunning) this.stop()
      else                this.start()
    }
  },

  computed: {
    isRunning () {
      return (this.miner) ? this.miner.isRunning() : false
    }
  }
}
</script>

<style scoped>
.miner-activity {
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 50px;
  stroke: #fff;
}
</style>
