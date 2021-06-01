<template>
  <div class="container">
    <h1>Checkout</h1>

    <table class="table table-hover">
      <caption class="text-right h3">
        <b>Total:</b>
        <Curr :amt="cartTotal" />
      </caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-right">Price</th>
          <th scope="col" class="text-right">Sub-total</th>
        </tr>
      </thead>
      <tbody v-if="cart.length">
        <template v-for="(item, index) in cart" :key="index">
          <tr>
            <td class="text-center">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button
                  class="btn btn-success"
                  @click.stop="this.$emit('addItem', item.product)"
                >
                  +
                </button>
                <button
                  class="btn btn-outline-success"
                  @click.stop="this.$emit('deleteItem', index)"
                >
                  -
                </button>
              </div>
            </td>
            <th scope="row">{{ item.product.name }}</th>
            <td class="text-center">{{ item.qty }}</td>
            <td class="text-right">
              <Curr :amt="Number(item.product.price)" />
            </td>
            <td class="text-right">
              <Curr :amt="item.qty * Number(item.product.price)" />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <router-link class="btn btn-sm btn-success" to="/"
      >Keep Shopping</router-link
    >
  </div>
</template>

<script>
import Curr from '@/components/Curr'
export default {
  name: 'Checkout',
  props: ['cart', 'cartTotal'],
  components: { Curr },
  emits: ['addItem', 'deleteItem']
}
</script>

<style></style>
