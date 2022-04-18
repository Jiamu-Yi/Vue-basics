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
                          path: 'Detail',
                          component: Detail,
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
