<template>
  <Navbar :cart="cart" />
  <div class="container">
    <router-view :cart="cart" @add-to-cart="addToCart" />
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
      displayCart: false
    }
  },
  components: { Footer, Navbar },
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
