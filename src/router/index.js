import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import Login from '../views/Login.vue'
import Transaction from '../views/Transaction.vue'
import Card from '../views/Card.vue'
import Register from '../views/Register.vue'
import Loan from '../views/Loan.vue'
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Account',
    name: 'Account',
    component: Account
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Transaction',
    name: 'Transaction',
    component: Transaction
  },
  {
    path: '/Loan',
    name: 'Loan',
    component: Loan
  },
  {
    path: '/Card',
    name: 'Card',
    component: Card
  },
  {
    path: '/',
    component: {default:Login}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
