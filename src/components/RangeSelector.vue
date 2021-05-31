<template>
  <label for="max-price" class="form-label h4"
    >Max Price (${{ modelValue }})</label
  >
  <div class="badge bg-success ml-3">{{ products.length }} results found</div>
  <input
    type="range"
    class="form-range"
    name="max-price-range"
    id="max-price-range"
    min="0"
    max="130"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'RangeSelector',
  props: ['products', 'modelValue'],
  inheritAttrs: false
}
</script>

<style></style>
