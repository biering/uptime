<template>
  <div>
    <nuxt/>
    <script src="https://authedmine.com/lib/authedmine.min.js"></script>
  </div>
</template>

<script>
export default {
  name: 'default',

  head () {
    const time = this.$store.state.time || 'Uptime'
    return {
      titleTemplate: `${time}`
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

html {
  font-family: "Avenir", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
