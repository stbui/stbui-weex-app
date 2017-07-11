// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'
import mixins from './mixins'

import AppHeader from './components/app-header.vue';
import AppFooter from './components/app-footer.vue';
import Icon from './components/icon.vue';
import Loading from './components/loading.vue';
import Calender from './components/calender.vue';
import List from './components/list.vue';

sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.mixin(mixins)

Vue.component('icon', Icon);
Vue.component('stbui-loading', Loading);
Vue.component('stbui-header', AppHeader);
Vue.component('stbui-footer', AppFooter);
Vue.component('stbui-calender', Calender);
Vue.component('stbui-list', List);

new Vue(Vue.util.extend({ el: '#root', router, store }, App))

router.push('/')
