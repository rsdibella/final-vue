<template>
    <div class="product-item">
        <div class="product-image"></div>
            <img :src="product.image" :alt="product.title" />
        <div class="product-info"></div>
            <div class="product-title">{{ product.title }}</div>
            <div class="product-price">{{ product.price }}</div>
    </div>
</template>

<script lang="ts">
import { Product } from '@/models/product'; 
import { defineComponent, PropType } from "vue";

export default defineComponent({
props: {
    product: {
        type: Object as PropType<Product>,
        required: true,
    },
},
});
</script>

<style scoped>
.product-item {
    width: 300px;
    display: flex;

}

.product-image {
    width: 50%;

}
.product-image > img {
    width: 100%;
    height: auto;
}
</style>