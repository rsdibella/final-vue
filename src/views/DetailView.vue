<template>

<h1>Hola</h1>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import useProducts from "@/composables/useProducts";

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    // userRole: String,
  },
  setup(props){
    const {product, isLoading} = useProducts();

      return{
        product,
        isLoading
      };
  },
});
</script>
