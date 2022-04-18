import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import child_about from "@/pages/child_about";
import child_home from "@/pages/child_home";

//创建并暴露路由器
export default new VueRouter({
    routes:[
        {
          path:'/about',
          component:About,
          children:[
              {
                  path: 'child_about',
                  component: child_about,
              },
              {
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
