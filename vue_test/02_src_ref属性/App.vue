<template>
    <div>
        <h1 v-text="msg" ref="tittle"></h1>
        <button ref="btn" @click="showDOM">点击</button>
        <Student ref="stu"></Student>
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
        methods:{
            showDOM(){
                console.log(this.$refs.tittle);
                console.log(this.$refs.btn);
                console.log(this.$refs.stu);
            }
        },
        data(){
          return {
              msg:'hello'
          }
        },
    }
</script>

<style>

</style>
