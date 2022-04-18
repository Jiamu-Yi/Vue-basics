import Vue from 'vue'
//引入APP组件，他是所以组件的父组件
import App from './App.vue'
import VueRouter from "vue-router";
import router from './router'
//关闭vue的生成提示
Vue.config.productionTip = false
Vue.use(VueRouter)
//创建Vm
new Vue({
  el:'#app',
  //下面是为了将APP组件放入容器中，
  render: h => h(App),
  router:router,
})
