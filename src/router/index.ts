import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import DetailView from '../views/DetailView.vue'
import ProductList from '../views/ProductList.vue'
import NotFound from '../views/NotFound.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/products',
    name: 'products',
    component: ProductList
  },
  // {
  //   path: '/loggin',
  //   name: 'loggin',
  //   component: () => import(/*webpackChunkName: detail*/ "../views/LogginView.vue")
  // },
  {
    path: "/products/:id",
    name:"detail",
    component : DetailView,
    props: (route) => {
      const id = Number(route.params.id)
      return isNaN(id) ? {id: null} : {id}
    }
  },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   component: () => import(/*webpackChunkName: detail*/ "../views/Profile.vue")
  // },
  {
    path: "/:pathMatch(.*)",
    component: import(/*webpackChunkName: notFound*/ "../views/NotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
