const app = Vue.createApp({
    data() {
        return {
            product: 'iPhone 12',
            brand: 'Apple',
            image: './assets/images/iphone-12-red.png',
            description:'New Apple A14 Bionic hight perfomance',
            inStock: false,
            inventory: 8,
            details: ['64GB','128GB','256GB'], // collection
            variants: [
                {id: 239, color: 'Red', image: './assets/images/iphone-12-red.png'},
                {id: 240, color: 'Purple', image: './assets/images/iphone-12-purple.png'},
                {id: 250, color: 'White', image: './assets/images/iphone-12-white.png'},
            ],
            cart:0
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        }
    }
})