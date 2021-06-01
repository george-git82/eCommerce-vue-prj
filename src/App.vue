<template>
  <Navbar
    :cart="cart"
    :cartTotal="cartTotal"
    :cartQty="cartQty"
    @deleteItem="deleteItem"
  />
  <div class="container">
    <router-view
      :cart="cart"
      :productsList="productsList"
      :cartTotal="cartTotal"
      @addItem="addItem"
      @deleteItem="deleteItem"
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
    },
    addItem(product) {
      let addProduct
      let existing = this.cart.filter(function (item, index) {
        if (Number(item.product.id) == Number(product.id)) {
          addProduct = index
          return true
        } else {
          return false
        }
      })

      if (existing.length) {
        this.cart[addProduct].qty++
      } else {
        this.cart.push({ product: product, qty: 1 })
      }
    },
    deleteItem(id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--
      } else {
        this.cart.splice(id, 1)
      }
    }
  },
  computed: {
    cartTotal() {
      let sum = 0
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty
      }
      return sum
    },
    cartQty() {
      let qty = 0
      for (let key in this.cart) {
        qty = qty + this.cart[key].qty
      }
      return qty
    }
  }
}
</script>

<style lang="scss">
$primary: #6f42c1;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
