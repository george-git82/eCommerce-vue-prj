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
    <!-- <CustomAlert type="success" close="true" v-if="cartTotal >= 1" /> -->
    <CustomAlert type="success" close="true" v-if="cartTotal >= 9999999" />
  </nav>
</template>

<script>
import Curr from '@/components/Curr'
import CustomAlert from '@/components/CustomAlert'
export default {
  name: 'Navbar',
  data: function () {
    return {
      totalColor: 'text-secondary',
      displayCart: false
    }
  },
  props: ['cart'],
  components: { Curr, CustomAlert },
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
  },
  methods: {
    transitionColor(el) {
      this.totalColor = 'text-danger'
    },
    resetColor(el) {
      this.totalColor = 'text-secondary'
    }
  }
}
</script>

<style>
.dropdown-clip {
  overflow: hidden;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.5s ease-in-out;
  transform: auto;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-300px);
}
</style>
