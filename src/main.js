//入口文件
import Vue from 'vue'
import app from './App.vue';

//导入mint-ui
//import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
import {Header} from 'mint-ui';

//导入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

//Vue.use(MintUI);
Vue.use(ElementUI);
Vue.component(Header.name,Header)

//导入路由
import router from './router.js';

var vm = new Vue({
  el:'#app',
  render:(c)=>c(app),
  router:router
})