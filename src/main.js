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

//导入MUI，是拷贝到lib里的，非nodemodules安装的都放在lib
import './lib/mui/css/mui.min.css'
//导入路由
import router from './router.js';

//导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);
//设置请求的根路径
Vue.http.options.root = 'http://120.77.181.41:3000';

//导入axios
//import axios from 'axios';
//Vue.use(axios);

var vm = new Vue({
  el:'#app',
  render:(c)=>c(app),
  router:router
})