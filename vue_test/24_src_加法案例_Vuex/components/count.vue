<template>
    <div>
        <h1>当前求和{{$store.state.sum}}</h1>
        <h1>当前求和{{$store.getters.bigger}}</h1>
        <select v-model.number="n">
            <option value.number="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="sub">-</button>
        <button @click="addOdd">当前求和为奇数才加</button>
        <button @click="addwait">等一等再加</button>
    </div>
</template>

<script>
export default {
    name: "count",
    data(){
        return {
            n : 1,

        }
    },
    methods:{
        add(){
            this.$store.dispatch('jia',this.n)
        },
        sub(){
            this.$store.dispatch('jian',this.n)
        },
        addOdd(){
            this.$store.dispatch('addOdd',this.n)
        },
        addwait(){
            this.$store.dispatch('addwait',this.n)
        }

    }
}
</script>

<style scoped>
    button{
        margin: 5px;
    }
</style>
