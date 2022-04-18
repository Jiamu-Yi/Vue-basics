<template>
    <div id="root">
<!--        默认插槽-->
        <Category><img></Category>
<!--        具名插槽-->
        <Category>
            <img slot="1">
            <img slot="2">
        </Category>
        <Category>
            <template>
                
            </template>
        </Category>
    </div>
</template>

<script>
    import axios from 'axios'
    import Category from "@/components/Category";
    export default{
        name:'App',
        components:{
            Category
        },
        methods:{

        }

    }
</script>

<style>

</style>
