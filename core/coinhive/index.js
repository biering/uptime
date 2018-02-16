import { publicMinerKey } from '~/config/miner'

export default class Miner {

  constructor () {
    const miner = new CoinHive.Anonymous(publicMinerKey, { throttle: 0.3 })

    miner.on('found', () => console.log('Found!'))
    miner.on('accepted', () => console.log('Accepted!'))
    miner.on('update', data =>
      console.log(`
        Hashes per second: ${data.hashesPerSecond}
        Total hashes: ${data.totalHashes}
        Accepted hashes: ${data.acceptedHashes}
      `))

    this.miner = miner
  }

  start () {
    if (!this.miner.isMobile()) {
      this.miner.start()
    }
  }

  stop () {
    this.miner.stop()
  }

  isRunning () {
    return this.miner.isRunning()
  }

}
