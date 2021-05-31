<template>
  <div id="nav" class="navbar navbar-light" style="background-color: #e3f2fd">
    <router-link to="/"><fa icon="home" /> Home</router-link> |
    <router-link to="/checkout"
      ><fa icon="address-card" /> Checkout</router-link
    >
  </div>
  <div class="container"><router-view /></div>
  <hr />
  <Footer />
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components: { Footer }
}
</script>

<style lang="scss">
$primary: #6f42c1;
@import 'node_modules/bootstrap/scss/bootstrap';

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
