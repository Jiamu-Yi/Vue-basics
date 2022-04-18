<template>
    <div id="root">
        <button @click="getStudents">hello</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name:'App',
        methods:{
            getStudents(){
                axios.get('www.baidu.com').then(
                    response =>{
                        alert(response.data)
                        console.log()
                    },
                    error =>{
                        alert(error.message)
                    }
                )
            }
        }

    }
</script>

<style>

</style>
