const productApp = {
    data() {
        return {
            show: true,
            btnColor: "btn-success",
            totalColor: "text-secondary",
            salesBtn: "btn-secondary",
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
        cartBtn() {
            return {
                "btn-secondary": this.cartTotal <= 100,
                "btn-success": this.cartTotal > 100,
                "btn-danger": this.cartTotal > 200,
            };
        },
    },
    methods: {
        // currency(value) {
        //     let fpnNum = Number.parseFloat(value).toFixed(2);
        //     return `$${fpnNum}`;
        // },
        addToCart(item, e) {
            this.cart.push(item);
            if (this.cartTotal >= 100) {
                this.salesBtn = "btn-success";
            }
        },
        transitionColor(el) {
            this.totalColor = "text-danger";
        },
        resetColor(el) {
            this.totalColor = "text-secondary";
        },
    },
};

const App = Vue.createApp(productApp);

App.component("curr", {
    props: ["amt"],
    template: `{{dollar(amt)}}`,
    methods: {
        dollar(value) {
            let fpnNum = Number.parseFloat(value).toFixed(2);
            return `$${fpnNum}`;
        },
    },
});

App.mount("#products");
