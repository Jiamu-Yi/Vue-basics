import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Message from "@/pages/Message";
import News from "@/pages/News";
import Detail from "@/pages/Detail";
//创建并暴露路由器
const router =  new VueRouter({
    routes:[
        {
          name:'huanyu',
          path:'/about',
          component:About,
          meta:{title:"关于",isAuth:false,},
          children:[
              {
                  name:'xiaoxi',
                  path: 'Message',
                  component: Message,
                  meta:{title:"消息"},
                  children:[
                      {
                          name:'xiangqing',
                          path: 'Detail/:id/:title',
                          meta:{title:"详情"},

                          component: Detail,
                          //props的第一种写法，对象，该对象中的所以的key value都以props的形式传给detail,但是这里的数据是死数据
                          // props:{a:1,b:2},
                          //props的第二种写法，布尔值，若布尔值为真，就会把该路由组件收到的所有params数据都会以props的形式传给detail
                          // props:true,
                          //props的第三种写法，函数，若布尔值为真，就会把该路由组件收到的所有params数据都会以props的形式传给detail
                          props($route){
                              return{id:$route.query.id,title:$route.query.title}
                          }

                      },
                  ]
              },
              {
                  name:'xinwen',
                  path: 'News',
                  component: News,
                  meta:{title:"新闻"},

              },
          ]
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:"主页"},
            children:[
                {
                    path: 'Message',
                    component: Message,
                    meta:{isAuth:true,
                        meta:{title:"消息"},
                    },
                },
                {
                    path: 'News',
                    component: News,
                    meta:{isAuth:true,
                        meta:{title:"新闻"},
                    },
                },
            ]
        },
    ]
})
// //全局前置路由守卫
// router.beforeEach((to, from, next)=>{
//     console.log(to)
//     if(to.meta.isAuth){
//         alert('no')
//     }else{
//         next()
//     }
// })
//
// //全局后置路由守卫
// router.afterEach((to, from)=>{
//     document.title = to.meta.title || "yjm"
//     if(to.meta.isAuth){
//         alert('no')
//     }else{
//     }
// })
export default router
