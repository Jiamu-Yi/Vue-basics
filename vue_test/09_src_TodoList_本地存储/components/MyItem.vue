<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handCheck(todo.id)">
<!--            以下代码也是可以的，但是不推荐，因为原则上不推荐改变props属性-->
<!--            <input type="checkbox" v-model="todo.done">-->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handDelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default{
        name:'MyItem',
        props:['todo','checkTodo','deleteTodo'],
        methods:{
            handCheck(id){
            //    通知APP组件将数据改变
                this.checkTodo(id)
            },
            handDelete(id){
                if(confirm("确认删除吗？")){
                    this.deleteTodo(id)
                }
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
