<template>
  <div class="timer">

    <div class="moving-letters">
      <h1 class="ml4">
        <span class="letters letters-1">Ready</span>
        <span class="letters letters-2">Set</span>
        <span class="letters letters-3">Go</span>
        <span class="letters letters-final">{{ time }}</span>
      </h1>
    </div>

  </div>
</template>

<script>
import anime from 'animejs'

import IntervalTimer from '~/core/timer'

export default {
  name: 'timer',

  data () {
    return {
      time: '00:00',
      state: 'itv1',
      percent: 0
    }
  },

  beforeDestroy () {
    this.timer.destroy()
    this.timer = null
    // reset title
    setTimeout(() => this.$store.commit('setTime', ''), 500)
  },

  mounted () {
    let { itv1, itv2 } = this.$store.state

    if (!itv1) itv1 = 10
    if (!itv2) itv2 = 5

    let min = itv1
    let sec = 'OO'
    min = min < 10 ? `0${min}` : `${min}`
    min = min.split('0').join('O')

    // initial duration placeholder
    this.time = `${min}:${sec}`

    const intervals = [
      { name: 'itv1', duration: itv1 * 60 },
      { name: 'itv2', duration: itv2 * 60 }
    ]

    // init timer
    const timer = new IntervalTimer(intervals)
      .onChange(this.onChange)
      .onTick((minutes, seconds, totalDuration) => {
        let percent = 100 - Math.floor((minutes * 60 + seconds) / (totalDuration) * 100)

        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        seconds = seconds < 10 ? `0${seconds}` : `${seconds}`

        this.$store.commit('setTime', `${minutes}:${seconds}`)

        minutes = minutes.split('0').join('O')
        seconds = seconds.split('0').join('O')

        this.time = `${minutes}:${seconds}`
        this.percent = percent

      })

    this.timer = timer

    // animate initial duration immediately
    setTimeout(() => {
      var ml4 = {
        opacityIn: [0, 1],
        scaleIn: [0.2, 1],
        scaleOut: 3,
        durationIn: 800,
        durationOut: 600,
        delay: 500
      }

      anime
        .timeline({
          // start timer after one second
          complete: anim => this.timer.start()
        })
        .add({
          targets: '.ml4 .letters-1',
          opacity: ml4.opacityIn,
          scale: ml4.scaleIn,
          duration: ml4.durationIn
        })
        .add({
          targets: '.ml4 .letters-1',
          opacity: 0,
          scale: ml4.scaleOut,
          duration: ml4.durationOut,
          easing: "easeInExpo",
          delay: ml4.delay
        })
        .add({
          targets: '.ml4 .letters-2',
          opacity: ml4.opacityIn,
          scale: ml4.scaleIn,
          duration: ml4.durationIn
        })
        .add({
          targets: '.ml4 .letters-2',
          opacity: 0,
          scale: ml4.scaleOut,
          duration: ml4.durationOut,
          easing: "easeInExpo",
          delay: ml4.delay
        })
        .add({
          targets: '.ml4 .letters-3',
          opacity: ml4.opacityIn,
          scale: ml4.scaleIn,
          duration: ml4.durationIn
        })
        .add({
          targets: '.ml4 .letters-3',
          opacity: 0,
          scale: ml4.scaleOut,
          duration: ml4.durationOut,
          easing: "easeInExpo",
          delay: ml4.delay
        })
        .add({
          targets: '.ml4 .letters-final',
          opacity: ml4.opacityIn,
          scale: ml4.scaleIn,
          duration: ml4.durationIn
        })
    }, 0)
  },

  methods: {
    onChange (state) {
      this.state = state
      const working = (state === 'itv1')

      if (Notification.permission !== 'granted')
        Notification.requestPermission()
      else {
        const notification = new Notification(
          (working) ? 'Start working!' : 'Time for a break',
          {
            icon: 'favicon.png',
            body: (working) ? "It's time to be productive." : 'Get up and catch your breath'
          }
        )

        notification.onclick = () => {
          //window.open("http://stackoverflow.com/a/13328397/1269037");
        }
      }
    }
  }

}
</script>

<style scoped>
.timer {
  font-family: 'Roboto Mono', monospace;
  font-size: 100px;
}

.moving-letters {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  height: 200px;
}

.ml4 {
  position: relative;
  font-weight: 900;
  font-size: 100px;
}
.ml4 .letters {
  position: absolute;
  margin: auto;
  left: 0;
  top: 0.3em;
  right: 0;
  opacity: 0;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #555;
}

.ml4 .letters-final {
  color: #fff;
}
</style>
