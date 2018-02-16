<template>
  <div class="setup">
    <p>
      Remind me every
      <DurationInput
        placeholder="10"
        v-model.number="itv1"
        @input="$store.commit('setDuration', { itv1: $event})" /> min
    </p>
    <p>
    to take a break for
    <DurationInput
      placeholder="5"
      v-model.number="itv2"
      @input="$store.commit('setDuration', { itv2: $event})"/> min.
    </p>

    <div style="text-align: center;">
      <button class="start-button" @click="$emit('start')">
        Go
      </button>
    </div>
  </div>
</template>

<script>
import DurationInput from './DurationInput.vue'

export default {
  name: 'setup',

  components: {
    DurationInput
  },

  data () {
    return {
      itv1: null,
      itv2: null
    }
  }
}
</script>

<style scoped>
.setup {
  text-align: left;
  font-size: 2.8em;
}

.setup p {
  padding: 6px 0;
  font-family: 'Avenir', sans-serif;
  font-weight: 700;
  font-size: 54px;
}

.start-button {
  background: none;
  outline: none;
  border: none;
  cursor: pointer;

  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 30px 0;
  font-size: 20px;
  border-radius: 50%;
  text-transform: uppercase;
  border: 2px solid #555;
  color: #fff;
  width: 90px;
  height: 90px;
}

.start-button:hover {
  background-color: #1920f3;
  border-color: #1920f3;
}
</style>
