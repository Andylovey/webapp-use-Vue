//导入 Vue 框架
import Vue from 'vue'
//导入 App 组件
import app from './App.vue'
//导入Mint-ui 组件
import { Header } from 'mint-ui';

import 'mint-ui/lib/style.css'

Vue.component(Header.name, Header);

import './assets/libs/css/mui.min.css'

var vm = new Vue({
  el : '#app',
  render : c => c(app)
})