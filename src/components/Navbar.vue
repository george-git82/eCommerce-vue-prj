<template>
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
            <fa icon="shopping-cart" />
            {{ cart.length }}
          </button>
        </div>
        <CartDropdown :displayCart="displayCart" :cart="cart" />
      </div>
    </div>
    <!-- <CustomAlert type="success" close="true" v-if="cartTotal >= 1" /> -->
    <CustomAlert type="success" close="true" v-if="cartTotal >= 9999999" />
  </nav>
</template>

<script>
import Curr from '@/components/Curr'
import CustomAlert from '@/components/CustomAlert'
import CartDropdown from '@/components/CartDropdown'

export default {
  name: 'Navbar',
  data: function () {
    return {
      totalColor: 'text-secondary',
      displayCart: false
    }
  },
  props: ['cart'],
  components: { Curr, CustomAlert, CartDropdown },
  computed: {
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
  }
}
</script>

<style></style>
