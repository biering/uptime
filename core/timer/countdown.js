export default class Countdown {

  constructor ({ duration, granularity = 1000, completion = null }) {
    this.duration = duration
    this.granularity = granularity
    this.completion = completion
    this.running = false
    this.ticks = []
  }

  static parse (seconds) {
    return {
      'minutes': (seconds / 60) | 0,
      'seconds': (seconds % 60) | 0
    }
  }

  start () {
    if (this.running) return

    this.running = true

    const self = this
    const start = Date.now()
    let diff
    let obj

    (function timer () {
      diff = self.duration - (((Date.now() - start) / 1000) | 0)

      if (diff > 0) {
        setTimeout(timer, self.granularity)
      } else {
        diff = 0
        self.running = false
        if (self.completion) self.completion()
      }

      obj = Countdown.parse(diff)
      self.ticks.forEach(function (ftn) {
        ftn.call(this, obj.minutes, obj.seconds, self.duration)
      }, self)
    }())
  }

  stop () {

  }

  onTick (callback) {
    if (typeof callback === 'function')
      this.ticks.push(callback)
    return this
  }

  expired () {
    return !this.running
  }

}
