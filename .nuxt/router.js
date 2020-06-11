import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _582abdfe = () => interopDefault(import('../pages/button/index.vue' /* webpackChunkName: "pages/button/index" */))
const _bfc7a6c8 = () => interopDefault(import('../pages/card/index.vue' /* webpackChunkName: "pages/card/index" */))
const _e1f60814 = () => interopDefault(import('../pages/layout/index.vue' /* webpackChunkName: "pages/layout/index" */))
const _274984de = () => interopDefault(import('../pages/liste/index.vue' /* webpackChunkName: "pages/liste/index" */))
const _3910123f = () => interopDefault(import('../pages/tabelle/index.vue' /* webpackChunkName: "pages/tabelle/index" */))
const _53fec159 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/button",
    component: _582abdfe,
    name: "button"
  }, {
    path: "/card",
    component: _bfc7a6c8,
    name: "card"
  }, {
    path: "/layout",
    component: _e1f60814,
    name: "layout"
  }, {
    path: "/liste",
    component: _274984de,
    name: "liste"
  }, {
    path: "/tabelle",
    component: _3910123f,
    name: "tabelle"
  }, {
    path: "/",
    component: _53fec159,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
