import { GetterTree } from "vuex";
import { IState } from "..";
import {IProductsState } from "./state";

const getters: GetterTree<IProductsState, IState> = {
  getProduct(state) {
    return state.products;
  },
  getIsLoading(state) {
    return state.isLoading;
  },
  getPRoduct(state) {
    return state.selectedProduct;
  },
};
export default getters;
