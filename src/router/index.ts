import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import haveRoleGuard from "./role-guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homeProducts',
    component: () => import(/*webpackChunkName: detail*/ "../views/ProductList.vue")
  },
  {
    path: '/loggin',
    name: 'loggin',
    component: () => import(/*webpackChunkName: detail*/ "../views/Loggin.vue")
  },
  {
    path: "/detail/:id",
    name:"detail",
    component : () => import(/*webpackChunkName: detail*/ "../views/DetailView.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import(/*webpackChunkName: detail*/ "../views/Profile.vue")
  },
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
