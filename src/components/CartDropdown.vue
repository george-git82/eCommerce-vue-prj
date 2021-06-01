<template>
  <div class="dropdown-clip">
    <transition
      name="dropdown"
      @enter="transitionColor"
      @after-leave="resetColor"
    >
      <div
        class="list-group bg-light"
        aria-labelledby="cartDropdown"
        v-if="displayCart"
      >
        <div v-for="(item, index) in cart" :key="index">
          <div class="dropdown-item-text text-nowrap text-right align-middle">
            <span class="badge bg-success align-text-top mr-1">
              {{ item.qty }}</span
            >
            {{ item.product.name }}
            <b>
              <Curr :amt="item.qty * Number(item.product.price)" />
            </b>
            <button
              @click.stop="this.$parent.$emit('deleteItem', index)"
              class="btn btn-sm btn-danger ml-2"
            >
              -
            </button>
          </div>
        </div>
        <router-link
          to="/checkout"
          class="btn btn-sm btn-success text-white float-right ml-2 mr-2 mt-2 mb-2"
          >Checkout</router-link
        >
      </div>
    </transition>
  </div>
</template>

<script>
import Curr from '@/components/Curr'

export default {
  name: 'CartDropdown',
  components: { Curr },
  props: ['displayCart', 'cart'],
  emits: ['deleteItem'],
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
