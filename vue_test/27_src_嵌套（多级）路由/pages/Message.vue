<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link to="/about/message/detail">{{ m.title }}</router-link>
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
        {id:'001',title:'message1'},
        {id:'002',title:'message2'},
        {id:'003',title:'message3'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
