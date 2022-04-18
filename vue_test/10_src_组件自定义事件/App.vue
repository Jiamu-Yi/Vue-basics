<template>
    <div>
<!--        用props-->
        <SchoolName :getSchoolName="getSchoolName"></SchoolName>
<!--        用自定义事件-->
        <StudentName v-on:test="getStudentName"></StudentName>
<!--        $emit触发了这个test之后，会调用getStudentName-->
        <StudentName @test="getStudentName"></StudentName>
        <StudentName ref="getStudentName"></StudentName>

    </div>
</template>

<script>
    import StudentName from "./components/Student";
    import SchoolName from "./components/School";

    export default{
        name:'App',
        components:{
          StudentName,
          SchoolName,
        },
        methods:{
            getSchoolName(){
                console.log("school")
            },
            getStudentName(){
                 console.log("Student")
            }
        },
      mounted() {
          //绑定事件，相当于将@test的工作手动化了
          this.$refs.StudentName.$on('test',this.getSchoolName)
          this.$refs.StudentName.$once('test',this.getSchoolName)
      }
    }

</script>

<style>

</style>
