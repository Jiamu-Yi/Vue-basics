<template>
<!--    组件的结构-->
    <div class="demo">
        <button @click="showName">hello</button>
        <h2>{{name}}</h2>
        <h2>{{age}}</h2>
    </div>
</template>

<script>
    import {mixin} from "@/minin";
//组件交互的代码
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Student',
        data(){
            return{
                name:'222',
                age:'222'
            }
        },
        mixins:[mixin]
    }
</script>

<style>
/*组件的样式*/
.demo {
    background-color: orange;
}
</style>
