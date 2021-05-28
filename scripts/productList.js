const productApp = {
    data() {
        return {
            show: true,
            btnColor: "btn-success",
            totalColor: "text-secondary",
            salesBtn: "btn-secondary",
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

App.component("product", {
    data() {
        return {
            borderStyle: {
                borderRadius: "20%",
                border: "3px solid",
            },
        };
    },
    props: ["item", "k", "i", "displayLabels"],
    emits: ["addToCart"],
    template: `<hr v-if="k!=0">
    <h3 class="text-info">{{k + 1}}.</h3>
    <div id="display-list" class="row d-flex mb-3 align-items-center">
        <div class="col-1 m-auto">
            <button class="btn btn-success" :style="borderStyle" @click="$emit('addToCart', item, $event)">
                +
            </button>
        </div>
        <div class="col-sm-4">
            <img class="img-fluid d-block" :src="item.image" :alt="item.image_title">
        </div>
        <div class="col">
            <h3 class="text-info">{{item.id}} | {{item.name}}</h3>
            <p class="mb-0">{{item.description}}</p>
            <div class="h5 float-right">
                <span class="badge bg-success" v-if="item.price>=90 && displayLabels">premier</span>
                <span class="badge bg-primary"
                    v-else-if="item.price<90 && item.price>10 && displayLabels">value</span>
                <span class="badge bg-danger" v-else-if="item.price<=10 && displayLabels">sale</span>
                <curr :amt="item.price"></curr>
            </div>
        </div>
    </div>`,
});

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
