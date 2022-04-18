<template>
<!--    组件的结构-->
    <div class="demo">
        <h2>学校名称{{name}}</h2>
        <h2>学校地址{{address}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
//组件交互的代码
    export default{
        name:'School',
        data(){
            return {
                name:"minda",
                address:"wuhan",
            }
        },
        methods:{
            showName(){
                alert("message");
            }
        }
    }
</script>

<style>
/*组件的样式*/
.demo {
    background-color: orange;
}
</style>
