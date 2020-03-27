import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f15e1cfe = () => interopDefault(import('..\\pages\\chat.vue' /* webpackChunkName: "pages_chat" */))
const _7d4ae77a = () => interopDefault(import('..\\pages\\posts.vue' /* webpackChunkName: "pages_posts" */))
const _4238a099 = () => interopDefault(import('..\\pages\\secret.vue' /* webpackChunkName: "pages_secret" */))
const _256d148a = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _1a24d72f = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _668cdd9b = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages_users__id" */))
const _568a060e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/chat",
    component: _f15e1cfe,
    name: "chat"
  }, {
    path: "/posts",
    component: _7d4ae77a,
    name: "posts"
  }, {
    path: "/secret",
    component: _4238a099,
    name: "secret"
  }, {
    path: "/test",
    component: _256d148a,
    name: "test"
  }, {
    path: "/users",
    component: _1a24d72f,
    name: "users",
    children: [{
      path: ":id?",
      component: _668cdd9b,
      name: "users-id"
    }]
  }, {
    path: "/",
    component: _568a060e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
