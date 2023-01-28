import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = () => {
    const store = useStore();

    return{
        //getters
        products: computed(() => store.getters['products/getProducts']),
        isLoading: computed(()=> store.getters['products/getIsLoading']),
        product: computed(() => store.getters["products/getProduct"]),
        
        //actions
        fetchProducts: ()=> store.dispatch('products/fetchProducts')
    }
}

export default useProducts;
