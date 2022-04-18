<template>
    <div>
        <Student></Student>
        <school></school>

    </div>
</template>

<script>
    import Student from "./components/Student";
    import School from "./components/School";

    export default{
        name:'App',
        components:{
            Student,
            School,
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
