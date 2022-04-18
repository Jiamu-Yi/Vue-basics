import Vue from 'vue'
//引入APP组件，他是所以组件的父组件
import App from './App.vue'

import ElementUI from 'element-ui'
//全部引入
// import 'element-ui/lib/theme-chalk/index.css'
//按需引入
import { Button , Row} from 'element-ui';

//关闭vue的生成提示
Vue.config.productionTip = false
// Vue.component()
Vue.use(Button)
Vue.use(Row)
//创建Vm
new Vue({
  el:'#app',
  //下面是为了将APP组件放入容器中，
  render: h => h(App),
})
