<template>
<!--    组件的结构-->
    <div class="demo">
        <h2>{{name}}</h2>
        <h2>{{age}}</h2>
    </div>
</template>

<script>
//组件交互的代码
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Student',
        //简单声明接受
        // props:['name','age'];
        //接受的同时，对类型进行限制
        // props:{
        //     name:String,
        //     age:Number,
        // },
        //接受的同时，对数据进行类型限制，默认值限制，必要性的限制
        props:{
            name:{
                type:String,
                required:true,
            },
            age:{
                type:Number,
                //默认值
                default:99,
            },
        },
    }
</script>

<style>
/*组件的样式*/
.demo {
    background-color: orange;
}
</style>
