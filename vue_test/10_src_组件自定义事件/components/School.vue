<template>
<!--    组件的结构-->
    <div class="demo1">
        <h2>{{name}}</h2>
        <h2>{{age}}</h2>
        <button @click="sendSchoolName">school</button>
    </div>
</template>

<script>
//组件交互的代码
    export default{
        name:'SchoolName',
        data(){
            return{
                name:'222',
                age:'222'
            }
        },
        props:['getSchoolName'],
        methods:{
            sendSchoolName(){
                this.getSchoolName()
            }
        }

    }
</script>

<style scoped>
/*组件的样式*/
.demo1 {
    background-color: orange;
}
</style>
