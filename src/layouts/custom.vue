<template>
  <div id="main">
    <strong>Custom layout</strong>
    Header slot:
    <slot name="header">Header:</slot>
    <slot />
    <slot name="footer">Footer:</slot>
  </div>
</template>

<script>
export default {
  created () {
    console.log('layout created')
  }
}
</script>
