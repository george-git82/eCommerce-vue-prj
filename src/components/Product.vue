<template>
  <hr v-if="k != 0" />
  <h3 class="text-info">{{ k + 1 }}.</h3>
  <div id="display-list" class="row d-flex mb-3 align-items-center">
    <div class="col-1 m-auto">
      <button
        class="btn btn-success"
        :style="borderStyle"
        @click="this.$parent.$parent.$emit('addItem', item, $event)"
      >
        +
      </button>
    </div>
    <div class="col-sm-4">
      <img
        class="img-fluid d-block"
        :src="item.image"
        :alt="item.image_title"
      />
    </div>
    <div class="col">
      <h3 class="text-info">{{ item.id }} | {{ item.name }}</h3>
      <p class="mb-0">{{ item.description }}</p>
      <div class="h5 float-right">
        <span class="badge bg-success" v-if="item.price >= 90 && displayLabels"
          >premier</span
        >
        <span
          class="badge bg-primary"
          v-else-if="item.price < 90 && item.price > 10 && displayLabels"
          >value</span
        >
        <span
          class="badge bg-danger"
          v-else-if="item.price <= 10 && displayLabels"
          >sale</span
        >
        <Curr :amt="item.price" />
      </div>
    </div>
  </div>
</template>

<script>
import Curr from '@/components/Curr'
export default {
  name: 'Product',
  data: function () {
    return {
      borderStyle: {
        borderRadius: '20%',
        border: '3px solid'
      }
    }
  },
  components: { Curr },
  props: ['item', 'k', 'i', 'displayLabels'],
  emits: ['addToCart']
}
</script>

<style></style>
