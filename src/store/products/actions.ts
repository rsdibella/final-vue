import fakeShopApi from "@/api/fakeShopApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

const actions: ActionTree<IProductsState, IState> = {
async fetchProducts({ commit }) {
    commit("setIsLoading", true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(
    "/products/"
    );
    commit("setIsLoading", false);
    commit("setProducts", data);
    },
async fetchProductById({ commit }, productId: number) {
    commit("setIsLoading", true);
    
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(
    `/products/${productId}`
    );

    commit("setIsLoading", false);

    commit("setSelectedProduct", data);
    },
};

export default actions;
