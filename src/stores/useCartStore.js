import { defineStore } from "pinia";


export const useCartStore = defineStore('cart', {

    state: () => ({
        cart: []
    }),

    actions: {
        addToCart(product) {
            const index = this.cart.findIndex(item => {
                return item?.selectSku.id === product?.selectSku.id
            });

            console.log("index", index)
            if (index > -1) {
                // this.cart[index].selectSku.selectQty++;
                this.cart[index].selectSku.selectQty = product?.selectSku?.selectQty;
            } else {
                this.cart.push(product);
            }
            this.setInLocalStorage();
        },
        removeFromCart(item) {
            this.cart.splice(item, 1);
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        incrementQty(id) {
            const index = this.cart.findIndex(item => {
                return item?.selectSku.id === id
            });
            this.cart[index].selectSku.selectQty++;
            this.setInLocalStorage();
        },
        decrementQty(id) {

            const index = this.cart.findIndex(item => {
                return item?.selectSku.id === id
            });

            if (this.cart[index].selectSku.selectQty > 1) {
                this.cart[index].selectSku.selectQty--;
            }

            // if you want to remove this product if qty 0
            // if (this.cart[itemIndex].quantity <= 0) {
            //     this.removeFromCart(this.cart[itemIndex]);
            // }

            this.setInLocalStorage();
        },
        setInLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        initCart() {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                this.cart = JSON.parse(storedCart);
            }
        },
        clearCart() {
            this.items = [];
            localStorage.removeItem("cart");
            this.initCart();
        }
    },

    getters: {
        getCartLength() {
            return this.cart.length;
        },
        getCartItems() {
            return this.cart;
        },
        getCartTotalPrice() {
            return this.cart.reduce((total, item) => total + item.selectSku?.price * item.selectSku?.selectQty, 0)
        }
    }

})
