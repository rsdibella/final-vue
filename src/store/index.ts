import { Product } from '@/models/product';
import { createStore } from 'vuex'
import productModule from './products';


export interface IState{
  authUser: Product | null;
}
export default createStore <IState>({
  state: {
    authUser: null,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products: productModule,
  },
})
