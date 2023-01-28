import {Module} from "vuex";
import { IState } from "..";
import state, { IProductsState } from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const productModule: Module<IProductsState,IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

export default productModule;
