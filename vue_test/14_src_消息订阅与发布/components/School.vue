<template>
<!--    组件的结构-->
    <div class="demo1">
        <h2>{{name}}</h2>
        <h2>{{age}}</h2>
    </div>
</template>

<script>
//组件交互的代码
    import pubsub from 'pubsub-js'
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Student',
        data(){
            return{
                name:'222',
                age:'222'
            }
        },
        mounted() {
            this.pubId = pubsub.subscribe('hello', (msg,data)=>{
              alert(data)
          })
        },
        beforeDestroy() {
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>

<style scoped>
/*组件的样式*/
.demo1 {
    background-color: orange;
}
</style>
