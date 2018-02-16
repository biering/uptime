<template>
  <div class="back-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8"></polygon>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'back-button'
}
</script>

<style scoped>
.back-button {
  --color-main: #555;
  --color-hover: #fff;
}

.back-button svg {
  fill: var(--color-main);
}

.back-button:hover svg {
  fill: var(--color-hover);
}
</style>
