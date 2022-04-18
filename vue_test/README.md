## ref属性
1、被用来给元素或者子组件注册引用信息（id的替代者）
2、应用在HTML标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象VC
3、使用方法：
    打标识：

```js
<h1 ref="xxx">……</h1>
```

​    或   

```js
<school ref="xxx">……</school>
```

​    获取：this.$refs.xxx

## 配置项props
功能：让组件接受外部传入的数据
(1)传递数据：

```js
    <Demo name : "xxx">
```

(2)接受数据：
    第一种（只接收）：
     

```js
   props：['name']
```

​    第二种（限制类型）：  

```js
   props：{
            name:Number
        }
```

​    第三种（限制类型，限制必要性，指定默认值）：

```js
        props:{
            name:{
                //类型
                type:String,
                //必要性
                required:true,
                //默认值
                default:99,
            },
        },
```

备注：props是只读的，Vue底层会检测你对props的修改，如果进行了修改，那么会发出警告，如果确实是需要修改，那么请复制props的内容到data一份，然后去修改data中的数据。

## minin属性
1、功能：可以把多个组件共用的配置提取成一个混入对象,将两个组件中相同的方法可以提取出来，供给每个组件复用
使用方法：
第一步定义混合，例如：

```js
{
    data() {……}
    methods:{……}   
}
```

第二步使用混入，例如：
    （1）全局引入：Vue.mixin(xxx)
    （2）局部引入：mixins:['xxx']

## 插件
功能：用于增强Vue
本质：包含install方法的一个对象，install的第一个参数是Vue，第二个参数以后是插件使用者传递的数据
定义插件：

```js
    对象.install = function(Vue , options){
        添加全局过滤器
        Vue.filter(……)
        添加全局指令
        Vue.directive(……)
        配置全局混入
        Vue.mixin(……)
        添加实例方法
        Vue.prototype.$myMethod = function(){}
        Vue.prototype.$myProperty = xxx
```

使用插件：Vue.use()

## scoped样式
作用：让样式在局部生效，防止冲突
写法：

```js
<style scoped>
```

## 总结TodoList 案例
1.组件化编码流程
(1)拆分静态组件：组件要按照功能点分，命名不能和HTML元素冲突
(2)实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用
    1)一个组件在用，在组件自身即可
    2)一些组件在用，放在他们共同的父组件上（状态提升）
(3)实现交互，从绑定事件开始

2.props适用于：
(1)父组件 ==>子组件 通信
(2)子组件 ==>父组件 通信 （要求父给子一个函数）

3.使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以更改的！

4.props传过来的若是对象类型的值，修改对象中的属性时，Vue不会报错。但不推荐这样做

## webStorage
1.存储内容大小一般支持5Mb左右
2.浏览器通过Window.sessionStorage和Window.localStorage属性实现
3.相关API：

```js
    function saveData() {
        xxxStorage.setItem('msg','hello')
    }
    function readData() {
        console.log(xxxlStorage.getItem('msg'))
    }
    function deleteData() {
        xxxStorage.removeItem('msg')
    }
    function deleteAllData() {
        xxxStorage.clear()
    }
```

4.备注：
(1)SessionStorage存储的内容会随着浏览器窗口的关闭而消失
(2)LocalStorage存储的内容需要手动删除
(3)getItem()获取不到的数据会以null返回
(4)JSON.parse(null)的结果依然是null

## 组件的自定义事件
1.一种组件间的通信方式适用于子组件===>父组件
2.使用场景 A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
3.绑定自定义事件：
第一种方式：
    在父组件中

```js
<Demo @event = "functionName" />
```

​        或

```js
<Demo v-on:event = "functionName" />
```

第二种方式：
    在父组件中

```js
   <Demo ref = demo />
        ...
    mounted(){
        this.$refs.$on('event',this.functionName)
    }
```

4.触发自定义事件：this，$emit('event',data)
5.解绑自定义事件：this.$off('event')
6.组件上也可以绑定原生DOM事件，需要用native修饰符
7.注意通过 this.$refs.$on('event',this.functionName)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，要不然this会出现问题

## 全局事件总线（GlobalEventBus）

1.一种全局间进行通信的方式，适用于任何组件间通信

2.安装全局事件总线

```js
new Vue({
	......
	beforcreate(){
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的VM
	}
})
```

3.使用事件总线，

​	1.接受数据，A组件想接受数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身

```js
methods(){
	demo(data){....}
}
......
mounted(){
	this.$bus.$on('xxx',this.demo)
}
```

​	2.提供数据： this.$bus,$emit('xxx',数据)

4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件

## 消息订阅与发布

1.一种组件间通信的方式，适用于任意组件间通信

2.使用步骤

​	1：安装pubsub : 

```
npm i pubsub.js
```

​	2：引入

```
import pubsub from 'pubsub-js'
```

​	3：接收数据：A想接受数据，则A在组件中订阅消息，订阅的回调留在A自身

```
methods(){
	demo(data){...}
}
...
mounted(){
	this.pid = pubsub.subscribe('xxx',this.demo)
}
```

​	4.提供数据

```
pubsub.publish('xxx',data)
```

​	5.最好在使用后，取消订阅

```
beforeDestroy() {
	pubsub.unsubscribe(this.pubId)
}
```

## nextTick

1.语法：this.$nextTick(回调函数）

2.作用，在下一次DOM更新结束后执行其指定的回调

3.什么时候用，当改变数据后，基于更新新的DOM后进行某些操作时，要在nextTick所指定的回调函数中执行

## Vue封装的过渡和动画

1.作用：在载入是，更新或移除DOM元素是，在合适的时候添加合适的动画

2.写法：

​	1.准备好样式

​			元素进入的样式

​				1.v-enter：进入的起点

​				2.v-enter-active：进入的过程中

​				1.v-enter-to：进入的终点

​			元素离开的样式

​					1.v-leave：离开的起点

​					2.v-leave-active：离开的过程中

​					1.v-leave：离开的终点

​		2.使用<transition>包裹需要过渡的元素，并配置name属性

```HTML
        <transition-group 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutDown"
        >
          <h1 v-show="!isShow" key="1" >hello1</h1>
          <h1 v-show="isShow" key="2">hello2</h1>
        </transition-group>
```

​			3.若有多个元素，则需要使用transition-group ，并且每个元素需要指定key值

## Vue脚手架配置代理

### 方法一

在Vue.config.js 中添加如下配置

```js
  devServer:{
    proxy:"http://localhost:5000",
  }
```

说明

​	1.优点：配置简单，请求资源时直接发送给前端（8080）即可

​	2.缺点：不能配置多个代理，不能灵活的控制请求是否走代理

​	3.工作方式，若按照上述配置代理，当请求了前端不存在的资源时，那么请求会转发给服务器（优先匹配前端资源）

### 方法二

编写Vue.config.js 配置具体代理规则

```js
  devServer:{
    proxy: {
      target:"http://localhost:5000",
      pathRewite:{'^atguigu':''},
      ws:true,//用于支持websocket
      changeOrigin:true,//ip伪装
    }
  }
```

说明

​	1.优点：可以配置多个代理，且可以灵活的控制请求是否走代理

​	2.缺点：配置略微繁琐，请求资源时需要添加前缀

## 插槽

#### 作用

让父组件可以想子组件指定位置插入HTML结构，也是一种组件间通信的方法，适用于父组件==>子组件

#### 分类

默认插槽，具名插槽，作用域插槽

#### 使用方法

默认插槽

```html
//父组件
	<Category>
        <div>html结构1</div>
    </Category>
//子组件
	<template>
        <div>
            <!-- 定义插槽-->
            <slot> 插槽默认内容</slot>
        </div>
    </template>
```

具名插槽

```HTML
//父组件
	<Category>
      	<template slot="center">
       	 	<div>插槽默认内容1</div>
        </template>
        <template v-slot:footer>
       	 	<div>插槽默认内容2</div>
        </template>
    </Category>
//子组件
	<template>
        <div>
            <!-- 定义插槽-->
            <slot name="center"> 插槽默认内容...</slot>
            <slot name="footer"> 插槽默认内容...</slot>
        </div>
    </template>
```

#### 作用域插槽

> 理解：数据在组件自身，但根据生成的结构需要组件的使用者来决定。（game数据在Category组件中，但使用数据所遍历出来的结构由APP组件决定的）

具体编码

```html
//父组件
	<Category>
      	<template slot="center">
            <ul>
                <li v-for="g in scopeData.games" :key="g">{{g}}</li>
            </ul>
       	 	<div>插槽默认内容1</div>
        </template>
    </Category>
	<Category>
      	<template slot-scope="scopeData">
            <h4 v-for="g in scopeData.games" :key="g">{{g}}</li>
        </template>
    </Category>

//子组件
	<template>
        <div>
            <!-- 定义插槽-->
            <slot :game"games"> 插槽默认内容...</slot>
        </div>
    </template>
	<script>
		export default {
            name:"Category",
            props:['tittle'],
            //数据在子组件自身
            data(){
                return {
                    game:['1','2','3','4']
                }
            }
        }	
	</script>
```

## Vuex

#### 搭建环境

1、创建文件：src/store/index,js

```js
//该文件用于创建最核心的store
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex)
//准备actions
const actions = {
    jia(context,value){
        context.commit('JIA',value)
    },
}
//准备mutations
const mutations = {
    JIA(state,value){
        state.sum += value;
    },
}
//准备state
const state = {
    sum : 0,
}
const getters = {
    bigger(){
        return state.sum*10;
    }
}
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state,
})

```

2、在main.js中创建VM时传入store配置项

```js
//引入store
import store from "@/store";
...
...
...
//创建vm
new Vue({
  el:'#app',
  store,
  //下面是为了将APP组件放入容器中，
  render: h => h(App),
})
```

#### 基本使用

```
//读取Vuex的数据
$store.state.sum
//组件中修改Vuex的数据：
$store.dispatch("action的方法名"，数据)
$store.commit("mutations的方法名"，数据)
```

#### 四个map的使用

##### mapState方法：帮助我们映射state中数据为计算属性

```js
    computed:{
        // sum(){
        //   return this.$store.state.sum
        // },
        //借助mapState生成计算属性，从state中读取数据（对象数据）
        ...mapState({sum: 'sum'}),
        //借助mapState生成计算属性，从state中读取数据（数组数据）
    },
```



##### mapGetters方法：帮助我们映射Getters中数据为计算属性

```js
    computed:{
        // bigger(){
        //     return this.$store.getters.bigger
        // },

        //借助mapGetters生成计算属性，从state中读取数据（对象数据）
        ...mapGetters({bigger:'bigger'}),
        //借助mapGetters生成计算属性，从state中读取数据（数组数据）
        ...mapGetters(['bigger']),
    },
```

##### mapMutations方法：帮助我们映射Mutations中数据为计算属性

```js
    methods:{
        // add(){
        //     this.$store.commit('JIA',this.n)
        // },
        // sub(){
        //     this.$store.commit('JIAN',this.n)
        // },
        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
        ...mapMutations({'add':'JIA','sub':'JIAN'}),
        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
        ...mapMutations(['JIA','JIAN']),    
    },
```

##### mapActions方法：帮助我们映射Actions中数据为计算属性

```js
        addOdd(){
            this.$store.dispatch('addOdd',this.n)
        },
        addwait(){
            this.$store.dispatch('addwait',this.n)
        },
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions(对象写法)
        ...mapActions({'addOdd':'addOdd','addwait':'addwait'})
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions(数组写法)
        ...mapActions(['addOdd','addwait'])
```

#### 模块化+命名空间

1、目的：让代码更好维护，让多种数据分类更加明确。

2、修改store.js

```js
export default  {
    namespaced:true,
    actions:{    },
    mutations:{    },
    state:{    },
    getters:{    }
}

import countOptions from "./count";
import personOptions from "./person";
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions,
    },
    actions :{
    },
    mutations :{
    },
    state:{
    },
    getters:{
    },
})
```

3、开启命名空间后，组件中读取state数据：

```
//手动
this.$store.state.data
//map
...mapState(['sum']),
```

4、开启命名空间后，组件中读取getters数据：

```
//手动
$store.getters["About/Name"];
//map
...mapGetters('countAbout', ['bigger']),
```

5、开启命名空间后，组件中调用dispatch

```
//手动
this.$store.dispatch('personAbout/addPersonServer');
//map
...mapActions('countAbout', ['addOdd','addwait'])
```

6、开启命名空间后，组件中调用commit

```
//手动
this.$store.commit("personAbout/ADD_PERSON",personObj);
//map
...mapMutations('countAbout', {'add':'JIA','sub':'JIAN'}),
```

## 路由（vue-router）

#### 几个注意点

1、路由组件通常放在page文件夹，一般组件通常放在components文件夹

2、通过切换，隐藏了路由组件，实际上是被销毁掉的，需要的时候再去挂载

3、每个组件都有自己的$route属性,里面存储着自己的路由信息。

4、整个应用只有一个router，可以通过组件的$router属性获取到。

#### 多级路由（嵌套路由）

1、配置路由规则，使用children配置项

```js
export default new VueRouter({
    routes:[
        {
          path:'/about',
          component:About,
          children:[
              {
                  //不能加/about
                  path: 'child_about',
                  component: child_about,
              },
              {
                   //不能加/about
                  path: 'child_home',
                  component: child_home,
              },
          ]
        },
        {
            path:'/home',
            component:Home,
        },
    ]
})
```

2、跳转要写完整路径

```html
<router-link class=" " to="/about/child_about">About</router-link>
```

#### 路由的query参数

1、传递参数

```js
<!--          跳转并携带query参数，to的字符串写法-->
<router-link :to="/home/message/detail?id=666&title='你好'"></router-link>
<!--          跳转并携带query参数，to的对象写法-->
<router-link :to="{
    path:'/home/message/detail',
    query:{
        id:666,
        title:'你好',
}
}"></router-link>
```

2、接受参数

```js
$route.query.id
$route.query.title
```

#### 命名路由

1、作用：可以简化路由的跳转

2、使用：

​	1、给路由命名：

```js
name:'huanyu',
    path:'/about',
        component:About,
            children:[
                {
                    path: 'Message',
                    component: Message,
                    children:[
                        {
                            name:'xiangqing',
                            path: 'Detail',
                            component: Detail,
                        },
                    ]
                },
```

​	2、简化跳转：

```js
<router-link
    :to="{
        // path:'/about/message/detail',
        name:'xiangqing',
        query:{
            id:m.id,
            title:m.title,
        }
    }"
>{{ m.title }}</router-link>
```

#### 路由的params参数

1、配置路由，声明接受params参数

```js
      name:'huanyu',
      path:'/about',
      component:About,
      children:[
          {
              path: 'Message',
              component: Message,
              children:[
                  {
                      name:'xiangqing',
                      path: 'Detail/:id/:title',
                      component: Detail,
                  },
              ]
          },
```

2、传递参数

```js
<!--        跳转携带param参数字符串写法-->
        <router-link :to="`/about/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>
<!--        对象写法-->
        <router-link
          :to="{
            // path:'/about/message/detail',
            name:'xiangqing',
            params:{
              id:m.id,
              title:m.title,
            }
          }"
        >{{ m.title }}</router-link>
```

> **特别注意，使用params传递参数时，若使用对象写法，则不能使用path项，只能使用name配置**

3、接受参数

```js
$route.params.id
$route.params.tittle
```

#### 路由的props配置

作用：让路由组件更方便的收到参数

```js
name:'xiangqing',
path: 'Detail/:id/:title',
component: Detail,
//props的第一种写法，对象，该对象中的所以的key value都以props的形式传给detail,但是这里的数据是死数据
props:{a:1,b:2},
//props的第二种写法，布尔值，若布尔值为真，就会把该路由组件收到的所有params数据都会以props的形式传给detail
props:true,
//props的第三种写法，函数，若布尔值为真，就会把该路由组件收到的所有params数据都会以props的形式传给detail
props($route){
    return{id:$route.query.id,title:$route.query.title}
}
```

#### \<router-link>的replace属性

1、作用：控制路由跳转时操作浏览器历史记录的模式

2、浏览器的历史记录有两种写入方式，分别为push和replace，push是追加历史记录，replace是替换当前记录，路由跳转的时候默认使用的是push

3、如何开启replace模式：<\<router-link replace ......> news\</router-link>

#### 编程式路由导航

作用：不用借助\<router-link>实现路由，让路由更加灵活

编码

```js
pushShow(m){
    this.$router.push({
        // path:'/about/message/detail',
        name:'xiangqing',
        query:{
            id:m.id,
            title:m.title,
        }
    })
},
    
    replaceShow(m){
        this.$router.replace({
            // path:'/about/message/detail',
            name:'xiangqing',
            query:{
                id:m.id,
                title:m.title,
            }
        })
    },
        
this.$router.forward()//前进
this.$router.back()//后退
this.$router.go()//可前进可后退
```

#### 缓存路由组件

作用：让不展示的路由组件保存挂载，不被销毁

编码

```html
<!--      这里的include是组件名！！！-->
<keep-alive include="Message">
	<router-view></router-view>
</keep-alive>

<!--     缓存多个-->
<keep-alive :include=["Message","News"]>
	<router-view></router-view>
</keep-alive>
```

#### 两个新的声明钩子

作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。

具体名字：

1、activated 路由组件被激活时被触发

2、deactivated 路由组件失活时被触发

#### 路由守卫

作用：对路由进行权限控制

分类：全局守卫，独享守卫，组件内守卫

##### 全局守卫

```js
//全局前置路由守卫
router.beforeEach((to, from, next)=>{
    console.log(to)
    if(to.meta.isAuth){
        alert('no')
    }else{
        next()
    }
})

//全局后置路由守卫
router.afterEach((to, from)=>{
    document.title = to.meta.title || "yjm"
    if(to.meta.isAuth){
        alert('no')
    }else{
    }
})
```

##### 独享守卫（只有before，没有after）

```
beforeEnter:(to, from, next)=>{
    if(to.meta.isAuth){
        alert('no')
    }else{
        next()
    }
},
```

##### 组件内守卫

```js
    //通过路由规则，进入组件时被调用
    beforeRouteEnter(to,from,next){
      if(to.meta.isAuth){
          alert('no')
      }else{
          next()
      }
    },

  //通过路由规则，离开组件时被调用
    beforeRouteLeave(to,from,next){
      console.log('beforeRouteLeave')
      next()
     }
```

#### 路由器的两种工作模式

1、对于一个url来说，什么是Hash值，——及其后面的内容就是Hash值

2、hash值不会包含在HTTP请求中，即：hash值不会带给服务器

3、hash模式

​	1、地址中永远带着#号，不美观

​	2、若分享地址，若app校验严格，地址会被标记为不合法

​	3、	兼容性较好

4、history模式

​	1、地址干净

​	2、兼容性和hash相比较差

​	3、应用部署上线时，需要后端人员进行配合，解决刷新页面服务端404的问题

## Vue UI组件库

移动端：

Vant，Cube UI , Mint UI

PC端

Element UI , IView UI 

### Element UI 
