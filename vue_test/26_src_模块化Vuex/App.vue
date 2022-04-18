<template>
    <div id="root">
        <count/>
        <Person/>
    </div>
</template>

<script>
    import count from "@/components/count";
    import Person from "@/components/Person";
    export default{
        name:'App',
        components:{
            count,
            Person,
        },
        methods:{
        }
    }
</script>

<style>

</style>
