const productApp = {
    data() {
        return {
            warningObject: {
                backgroundColor: "auto",
                border: "transparent",
            },
            borderStyle: {
                borderRadius: "50%",
                border: "3px solid darkgreen",
            },
            max: 50,
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
            if (this.cartTotal >= 100) {
                this.warningObject.backgroundColor = "red";
            }
        },
    },
};
Vue.createApp(productApp).mount("#products");
