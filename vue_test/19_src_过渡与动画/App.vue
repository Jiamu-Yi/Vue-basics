<template>
    <div id="root">

      <test2></test2>
      <test3></test3>
    </div>
</template>

<script>
    import test2 from "@/components/test2";
    import Test from "@/components/test";
    import test3 from "@/components/test3";
    export default{
        name:'App',
        components:{
          Test,
          test2,
          test3
        },
    }
</script>

<style>

</style>
