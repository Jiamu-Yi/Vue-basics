<template>
    <ul class="todo-main">
      <transition-group name="todo" appear>
        <MyItem
            v-for="todoObj in todos"
            :key="todoObj.id"
            :todo="todoObj"
            @checkTodo="checkTodo"
            @deleteTodo="deleteTodo"/>
      </transition-group>
    </ul>
</template>

<script>
    import MyItem from "@/components/MyItem";
    export default{
        name:'MyList',
        props:['todos'],
        components:{
            MyItem,
        },
        methods:{
          checkTodo(id){
            this.$emit('checkTodo',id)
          },
          deleteTodo(id){
            this.$emit('deleteTodo',id)
          }
        }
    }
</script>

<style scoped>
    .todo-enter ,.todo-leave{
      transform: translateX(-100%);
    }
    .todo-enter-active , .todo-leave-active {
      transition: 1s linear;
    }
    .todo-enter-to , .todo-leave-to{
      transform: translateX(-0px);
    }
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>
