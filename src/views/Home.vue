<template>
  <div class="home">
    <div id="products">
      <section class="container">
        <label for="max-price" class="form-label h4"
          >Max Price (${{ max }})</label
        >
        <div class="badge bg-success ml-3">
          {{ filteredProducts.length }} results found
        </div>
        <input
          type="range"
          class="form-range"
          name="max-price-range"
          id="max-price-range"
          v-model.number="max"
          min="0"
          max="130"
        />

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

export default {
  name: 'Home',
  data: function () {
    return {
      max: 50,
      displayLabels: true,
      productsList: []
    }
  },
  components: { Product },
  created() {
    fetch('https://hplussport.com/api/products/order/price')
      .then(resp => resp.json())
      .then(data => {
        this.productsList = data
      })
  },
  computed: {
    filteredProducts() {
      return this.productsList.filter(item => item.price <= this.max)
    }
  }
}
</script>

<style></style>
