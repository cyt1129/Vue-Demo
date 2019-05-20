import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './components/tabbar/HomeContainer.vue';
import member from './components/tabbar/MemberContainer.vue';
import search from './components/tabbar/SearchContainer.vue';
import shopcar from './components/tabbar/ShopcarContainer.vue';
import newslist from './components/news/NewsList.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [//配制路由规则
    { path: '/home', component: home, },
    { path: '/member', component: member },
    { path: '/search', component: search },
    { path: '/shopcar', component: shopcar },
    { path: '/', redirect: '/home' },
    { path: '/home/newslist', component: newslist }
  ],
  linkActiveClass: 'active-router'//覆盖默认的路由高亮的类
})

export default router