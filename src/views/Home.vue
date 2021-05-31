<template>
  <div class="home">
    <div id="products">
      <section class="container">
        <RangeSelector :products="filteredProducts" v-model.number="max" />

        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            name="showLabels"
            id="showLabels"
            v-model="displayLabels"
          />
          <label for="showLabels" class="form-check-label">
            <span class="badge bg-dark">Show labels</span>
          </label>
        </div>

        <div v-for="(el, k, i) in filteredProducts" :key="el.id">
          <Product :item="el" :k="k" :i="i" :display-labels="displayLabels" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product'
import RangeSelector from '@/components/RangeSelector'

export default {
  name: 'Home',
  data: function () {
    return {
      max: 50,
      displayLabels: true
    }
  },
  props: ['productsList'],
  components: { Product, RangeSelector },
  computed: {
    filteredProducts() {
      return this.productsList.filter(item => item.price <= Number(this.max))
    }
  }
}
</script>

<style></style>
