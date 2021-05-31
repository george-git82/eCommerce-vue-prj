<template>
  {{ dollar(amt) }}
</template>

<script>
export default {
  name: 'Curr',
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
