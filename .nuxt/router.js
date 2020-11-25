import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b8a54dea = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4bf49418 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _910e091e = () => interopDefault(import('..\\pages\\_tmplId.vue' /* webpackChunkName: "pages/_tmplId" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _b8a54dea,
    name: "login"
  }, {
    path: "/",
    component: _4bf49418,
    name: "index"
  }, {
    path: "/:tmplId",
    component: _910e091e,
    name: "tmplId"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
