import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/Home.vue'
import contactPage from '../components/Contact.vue'
import aboutPage from '../components/About.vue'
import productPage from '../components/Product.vue'
import ProductItem from '../components/Product_item.vue'
import User from '../components/User_page.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'aboutPage',
    component: aboutPage
  },
  {
    path: '/contact',
    name: 'contactPage',
    component: contactPage
  },
  {
    path: '/product/:id', // <-- notice the colon
    name: 'ProductItem',
    component: ProductItem,
    props: true
  },
  {
    path: '/product',
    name: 'productPage',
    component: productPage
  },
  {
    path: '/user/:name', // <-- notice the colon
    name: 'User',
    component: User,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
