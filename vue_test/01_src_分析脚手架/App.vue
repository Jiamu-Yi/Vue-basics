<template>
    <div>
        <img src="./assets/logo.png" height="200" width="200"/>
        <Student></Student>
        <School></School>
    </div>
</template>

<script>
    import School from "./components/School";
    import Student from "./components/Student";
    export default{
        name:'App',
        components:{
            School,
            Student,
        },
    }
</script>

<style>

</style>
