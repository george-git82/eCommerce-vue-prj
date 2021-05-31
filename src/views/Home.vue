<template>
  <div class="home">
    <!-- <h1 class="text-primary"><fa icon="shopping-cart" />Shopping cart</h1> -->
    <div id="products">
      <nav class="navbar navbar-light sticky-top mr-3">
        <div
          class="w-100 navbar-text ml-auto d-flex justify-content-end position-relative"
        >
          <div
            class="mr-auto d-flex align-items-end flex-column bd-highlight mb-3 position-absolute"
          >
            <div class="mb-2">
              <span class="font-weight-bold bg-white" :class="totalColor">
                <Curr :amt="cartTotal" />
              </span>
              <button
                class="btn btn-sm ml-3"
                id="cartDropdown"
                aria-haspopup="true"
                aria-expanded="false"
                :class="cartBtn"
                @click="displayCart = !displayCart"
              >
                <i class="fas fa-shopping-cart mr-1"></i>
                {{ cart.length }}
              </button>
            </div>
            <div class="dropdown-clip">
              <transition
                name="dropdown"
                @enter="transitionColor"
                @after-leave="resetColor"
              >
                <div
                  class="list-group"
                  aria-labelledby="cartDropdown"
                  v-if="displayCart"
                >
                  <div
                    v-for="(item, index) in cart"
                    :key="index"
                    class="list-group-item d-flex justify-content-between"
                  >
                    <div>{{ item.name }}</div>
                    <div class="ml-3 font-weight-bold">
                      <Curr :amt="item.price" />
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </nav>

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

        <CustomAlert type="success" close="true" v-if="cartTotal >= 1" />

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
          <product
            :item="el"
            :k="k"
            :i="i"
            :display-labels="displayLabels"
            @add-to-cart="addToCart"
          ></product>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product'
import Curr from '@/components/Curr'
import CustomAlert from '@/components/CustomAlert'
export default {
  name: 'Home',
  components: { Product, Curr, CustomAlert },
  data() {
    return {
      show: true,
      btnColor: 'btn-success',
      totalColor: 'text-secondary',
      salesBtn: 'btn-secondary',
      max: 50,
      displayLabels: true,
      productsList: [],
      cart: [],
      displayCart: false
    }
  },
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
    },
    cartTotal() {
      return this.cart.reduce((inc, item) => Number(item.price) + inc, 0)
    },
    cartBtn() {
      return {
        'btn-secondary': this.cartTotal <= 100,
        'btn-success': this.cartTotal > 100,
        'btn-danger': this.cartTotal > 200
      }
    }
  },
  methods: {
    addToCart(item, e) {
      this.cart.push(item)
      if (this.cartTotal >= 100) {
        this.salesBtn = 'btn-success'
      }
    },
    transitionColor(el) {
      this.totalColor = 'text-danger'
    },
    resetColor(el) {
      this.totalColor = 'text-secondary'
    }
  }
}
</script>

<style></style>
