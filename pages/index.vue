<template>
  <section class="container">
    <div style="z-index: 10">
      <logo />

      <miner-activity />

      <setup v-if="!showTimer" @start="start" />

      <div class="back-button" v-if="showTimer" @click="closeTimer">
        <back-button />
      </div>

      <credits />

      <timer v-if="showTimer"/>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Credits from '~/components/Credits.vue'
import Setup from '~/components/Setup.vue'
import Timer from '~/components/Timer.vue'
import BackButton from '~/components/BackButton.vue'
import MinerActivity from '~/components/MinerActivity.vue'
import Blobs from '~/components/Blobs.vue'

export default {
  components: {
    Logo,
    Credits,
    Setup,
    Timer,
    BackButton,
    MinerActivity,
    Blobs
  },

  data () {
    return {
      showTimer: false
    }
  },

  mounted () {
    if (Notification) {
      if (Notification.permission !== 'granted')
        Notification.requestPermission()
    }
  },

  methods: {
    start () {
      this.showTimer = true
    },

    closeTimer () {
      this.showTimer = false
    }
  }
}
</script>

<style>
body {
  --color-bg: #0e0e0e;
  --color-text: #fff;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  overflow: hidden;
}
</style>


<style scoped>
.container {
  --color-link: #666;
  --color-link-hover: #fff;
  --color-top-right: #222;
  --color-bottom-left: #000;

  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.back-button {
  top: 20px;
  left: 60px;
  position: absolute;
  cursor: pointer;
}
</style>
