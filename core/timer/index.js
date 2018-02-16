import { has } from 'lodash'

import Countdown from './countdown'

class IntervalTimer {

  constructor (intervals) {
    this.intervals = intervals
    this.state = 0
    this.timer = null
    this._onTick = null
    this._onChange = null
  }

  setState (value) {
    this.state = value

    const { duration } = this.getState()
    const timer = new Countdown({
      duration,
      completion: () => this.next()
    })
    if (this._onTick) timer.onTick(this._onTick)

    this.timer = timer
  }

  getState () {
    return this.intervals[this.state]
  }

  onChange (callback) {
    this._onChange = callback
    return this
  }

  onTick (callback) {
    this._onTick = callback
    return this
  }

  start () {
    if (!this.timer) this.setState(0)
    this.timer.start()
  }

  stop () {
    if (!this.timer) return
    this.timer.stop()
  }

  reset () {
    this.setState(0)
  }

  next () {
    this.setState(this.getNextIndex())

    const { name } = this.getState()
    if (this._onChange) this._onChange(name)

    this.start()
  }

  getNextIndex () {
    return (this.state + 1) % this.intervals.length
  }

  getPreviousIndex () {
    return (this.state - 1) % this.intervals.length
  }

  getNext () {
    return this.intervals[this.getNextIndex()]
  }

  getPrevious () {
    return this.intervals[this.getPreviousIndex()]
  }

}

export default IntervalTimer
