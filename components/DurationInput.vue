<template>
  <input
    type="number"
    :placeholder="placeholder"
    v-model.number="val"
    v-autowidth="{ maxWidth: '130px', minWidth: '20px', comfortZone: 0 }"
  />
</template>

<script>
export default {
  name: 'duration-input',

  props: {
    value: Number,
    placeholder: String
  },

  watch: {
    val (val) {
      this.$emit('input', val);
    }
  },

  data () {
    return {
      val: this.value
    }
  }
}
</script>

<style scoped>
input {
  background: none;
  border: none;
  outline: none;
  color: var(--color-text);
  text-align: right;
  width: 100px;
  margin: 0 4px;
  font-family: 'Avenir', sans-serif;
  font-weight: 700;
  font-size: 54px;
  border-bottom: 3px solid #555;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
