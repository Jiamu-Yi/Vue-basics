<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
<!--        字符串写法-->
<!--        <router-link :to="`/about/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>-->
<!--        对象写法-->
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
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return{
      messageList:[
        {id:'001',title:'张三'},
        {id:'002',title:'李四'},
        {id:'003',title:'王五'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
