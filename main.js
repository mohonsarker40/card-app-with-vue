const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Sucks',
            image: './assets/images/socks_blue.jpg',
            inventory: 11,
            onSale: true,
            details: ['50% cotton, 30% wool, 20% polyester'],
            variants: [
                {id: 442, color: 'Blue', image: './assets/images/socks_blue.jpg'},
                {id: 443, color: 'Green', image: './assets/images/socks_green.jpg'}

            ],
            sizes: [
                {id: 222, fit: 'sm'},
                {id: 333, fit: 'xl'},
                {id: 333, fit: 'xxl'},
            ]
        }

    },
    methods: {
        addToCard(){
            this.cart += 1;
        },
        updateImage(variantImage){
            this.image = variantImage;
        },
        removeFromCard(){
            this.cart -= 1;
        }
    }
}
)