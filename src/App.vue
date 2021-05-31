<template>
  <Navbar :cart="cart" />
  <div class="container">
    <router-view
      :cart="cart"
      @add-to-cart="addToCart"
      :productsList="productsList"
    />
  </div>
  <hr />
  <Footer />
</template>

<script>
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  data: function () {
    return {
      cart: [],
      displayCart: false,
      productsList: []
    }
  },
  components: { Footer, Navbar },
  created() {
    fetch('https://hplussport.com/api/products/order/price')
      .then(resp => resp.json())
      .then(data => {
        this.productsList = data
      })
  },
  methods: {
    addToCart(item, e) {
      this.cart.push(item)
    }
  }
}
</script>

<style lang="scss">
$primary: #6f42c1;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
