// import Vue from 'vue'
import Router from 'vue-router'
import Workspace from './views/WorkspaceView.vue'
import Leads from './views/LeadsView.vue';
import Customer from './views/CustomerView.vue';
import Tasks from './views/TasksView.vue';
import MyView from './views/MyView.vue'
import LeadsDetail from './views/LeadsDetailView.vue'

// const Workspace = r => require.ensure([], () => r(require('./views/WorkspaceView.vue')), 'ik');
// const Leads = r => require.ensure([], () => r(require('./views/LeadsView.vue')), 'ik');
// const Customer = r => require.ensure([], () => r(require('./views/CustomerView.vue')), 'ik');


Vue.use(Router)


export default new Router({
  // mode: 'abstract',
  routes: [
    // { path: '/article/:url(.*)?', component: ArticleView },
    // { path: '/item/:id(\\d+)', component: CommentView },
    // { path: '/user/:id', component: UserView },
    { path: '/workspace', component: Workspace },
    { path: '/leads', component: Leads },
    { path: '/leads/detail/:id', component: LeadsDetail },
    { path: '/customer', component: Customer },
    { path: '/tasks', component: Tasks },
    { path: '/my', component: MyView },
    { path: '/', redirect: '/leads/detail/1' }
  ]
})
