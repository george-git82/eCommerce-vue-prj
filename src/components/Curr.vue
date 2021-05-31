<template>
  {{ dollar(amt) }}
</template>

<script>
export default {
  props: ['amt'],
  methods: {
    dollar(value) {
      let fpnNum = Number.parseFloat(value).toFixed(2)
      return `$${fpnNum}`
    }
  }
}
</script>

<style></style>
