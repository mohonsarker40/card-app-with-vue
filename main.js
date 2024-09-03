const app = Vue.createApp({
    data() {
        return {
            product: 'Sucks',
            image: './assets/images/socks_blue.jpg',
            inventory: 11,
            onSale: true,
            details: ['50% cotton, 30% wool, 20% polyester'],
            variants: [
                {id: 442, color: 'Blue'},
                {id: 443, color: 'Greeen'}

            ],
            sizes: [
                {id: 222, fit: 'sm'},
                {id: 333, fit: 'xl'},
                {id: 333, fit: 'xxl'},
            ],
        }
    }
})