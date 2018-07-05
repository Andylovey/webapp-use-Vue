//导入 Vue 框架
import Vue from 'vue'

//导入 App 组件
import app from './App.vue'

//导入 Vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入Mint-ui 组件
import { Header , Swipe, SwipeItem , Button , Lazyload } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);
// Vue.use(Lazyload);

//导入缩略图插件 
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

//导入MUI 样式
import './assets/libs/css/mui.min.css'
import './assets/libs/css/icons-extra.css'

//导入路由模块
import router from './router/index.js'

var vm = new Vue({
  el : '#app',
  render : c => c(app),
  router
})