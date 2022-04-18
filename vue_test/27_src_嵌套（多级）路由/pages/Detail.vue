<template>
  <ul>
    <li v-for="d in Detail_data">
      {{d.name}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  data(){
    return{
      Detail_data:[
        {id:'001',name:'张三'},
        {id:'002',name:'李四'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
