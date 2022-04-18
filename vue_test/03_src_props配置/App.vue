<template>
    <div>
        <Student name="张三" :age="15"></Student>
        <Student name="张三" :age="18"></Student>
        <Student name="张三" ></Student>
    </div>
</template>

<script>
    import Student from "./components/Student";
    export default{
        name:'App',
        components:{
            Student,
        },
        methods:{
            showDOM(){
                console.log(this.$refs.tittle);
                console.log(this.$refs.btn);
                console.log(this.$refs.stu);
            }
        },
    }
</script>

<style>

</style>
