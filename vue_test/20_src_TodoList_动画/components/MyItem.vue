<template>

      <li>
        <label>
          <input type="checkbox" :checked="todo.done" @change="handCheck(todo.id)">
          <!--            以下代码也是可以的，但是不推荐，因为原则上不推荐改变props属性-->
          <!--            <input type="checkbox" v-model="todo.done">-->
          <span v-show="!todo.isEdit">{{todo.title}}</span>
          <input
              v-show="todo.isEdit"
              type="text"
              :value="todo.title"
              @blur="handBlur(todo,$event)">
        </label>
        <button class="btn btn-danger" @click="handDelete(todo.id)">删除</button>
        <button class="btn btn-danger" v-show="!todo.isEdit" @click="handEdit(todo)">编辑</button>
      </li>

</template>

<script>
    import pubsub from "pubsub-js";
    export default{
        name:'MyItem',
        props:['todo'],
        methods:{
            handCheck(id){
            //    通知APP组件将数据改变

                pubsub.publish('checkTodo',id)
            },
            handDelete(id){
                if(confirm("确认删除吗？")){
                  // this.$emit('deleteTodo',id)
                    pubsub.publish('deleteTodo',id)
                  // this.$bus.$emit('deleteTodo',id)
                }
            },
            handEdit(todo){
                if(todo.hasOwnProperty('isEdit')){
                  this.$set(todo,'isEdit',true)
                }else{
                  todo.isEdit = true
                }

            },
            handBlur(todo,e){
                todo.isEdit = false
                this.$bus.$emit('updateTodo',todo.id,e.target.value)

            }
        },
    }
</script>

<style scoped>

    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button{
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before{
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color: #ddd;
    }

    li:hover button{
        display: block;
    }
</style>
