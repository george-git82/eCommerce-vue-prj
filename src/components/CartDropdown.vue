<template>
  <div class="dropdown-clip">
    <transition
      name="dropdown"
      @enter="transitionColor"
      @after-leave="resetColor"
    >
      <div class="list-group" aria-labelledby="cartDropdown" v-if="displayCart">
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
</template>

<script>
import Curr from '@/components/Curr'

export default {
  name: 'CartDropdown',
  components: { Curr },
  props: ['displayCart', 'cart'],
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
