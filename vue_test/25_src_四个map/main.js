import Vue from 'vue'
//引入APP组件，他是所以组件的父组件
import App from './App.vue'
import Vuex from "vuex";

import store from "@/store";
//关闭vue的生成提示
Vue.config.productionTip = false
window.x = false
Vue.use(Vuex)

//创建Vm
new Vue({
  el:'#app',
  store,
  //下面是为了将APP组件放入容器中，
  render: h => h(App),
})
