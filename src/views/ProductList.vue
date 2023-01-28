<template>
    <div class="home">
        <div v-if = "isLoading">Cargando..</div>
        <div class="product-list" v-else>
            <ProductItem v-for="product in products" :key="product.id"> {{product.title}}>
            </ProductItem>>
        </div>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent } from 'vue';
import  useProducts from '@/composables/useProducts';
import ProductItem from '@/components/ProductItem.vue'


export default defineComponent({
    name: 'ProductList',
    components:{
        ProductItem
    },
    setup() {
        const {products, isLoading, fetchProducts} = useProducts()
        
        fetchProducts();
        return{ products, isLoading}
    },
}); 

</script>

<style scoped>
.product-list {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    gap: 1rem 1rem;
}
</style>