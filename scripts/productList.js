const productApp = {
  data() {
    return {
      max: 130,
      displayLabels: true,
      productsList: [],
      cart: [],
      displayCart: false,
    };
  },
  created() {
    fetch("https://hplussport.com/api/products/order/price")
      .then((resp) => resp.json())
      .then((data) => {
        this.productsList = data;
      });
  },
  computed: {
    filteredProducts() {
      return this.productsList.filter((item) => item.price <= this.max);
    },
    cartTotal() {
      return this.cart.reduce((inc, item) => Number(item.price) + inc, 0);
    },
  },
  methods: {
    currency(value) {
      let fpnNum = Number.parseFloat(value).toFixed(2);
      return `$${fpnNum}`;
    },
    addToCart(item, e) {
      this.cart.push(item);
    },
  },
};
Vue.createApp(productApp).mount("#products");
