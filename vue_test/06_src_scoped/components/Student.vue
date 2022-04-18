<template>
<!--    组件的结构-->
    <div class="demo1">
        <h2>{{name}}</h2>
        <h2>{{age}}</h2>
    </div>
</template>

<script>
    //组件交互的代码
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Student',
        data(){
            return{
                name:'1',
                age:'1'
            }
        },
    }
</script>

<style scoped>
/*组件的样式*/
    .demo1 {
        background-color: blue;
    }
</style>
