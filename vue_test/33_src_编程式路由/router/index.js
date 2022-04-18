import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Message from "@/pages/Message";
import News from "@/pages/News";
import Detail from "@/pages/Detail";
//创建并暴露路由器
export default new VueRouter({
    routes:[
        {
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

                  path: 'News',
                  component: News,

              },
          ]
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path: 'Message',
                    component: Message,
                },
                {
                    path: 'News',
                    component: News,
                },
            ]
        },
    ]
})
