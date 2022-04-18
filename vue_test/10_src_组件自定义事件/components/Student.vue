<template>
<!--    组件的结构-->
    <div class="demo1">
        <h2>{{name}}</h2>
        <h2>{{age}}</h2>
<!--      当这里点击之后，触发sendStudentName函数-->
        <button @click="sendStudentName">Student</button>
        <button @click="unbind">Student</button>

    </div>
</template>

<script>
    //组件交互的代码
    export default{
        name:'StudentName',
        data(){
            return{
                name:'1',
                age:'1'
            }
        },
        methods:{
            sendStudentName(){
                //触发student实例身上的test事件
                this.$emit('test')
            },
            unbind(){
              // 解绑一个事件
              this.$off('test')
            }
        }
    }
</script>

<style scoped>
/*组件的样式*/
    .demo1 {
        background-color: blue;
    }
</style>
