<template>
    <div>
        <h1>当前求和{{sum}}</h1>
        <h1>当前求和{{bigger}}</h1>
        <select v-model.number="n">
            <option value.number="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add(n)">+</button>
        <button @click="sub(n)">-</button>
        <button @click="addOdd(n)">当前求和为奇数才加</button>
        <button @click="addwait(n)">等一等再加</button>
        <h3 style="color: blue">下方组件的总人数是：{{personList.length}}</h3>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
    name: "count",
    data(){
        return {
            n : 1,
        }
    },
    computed:{
        ...mapState('countAbout', ['sum']),
        ...mapState('personAbout', ['personList']),
        ...mapGetters('countAbout', ['bigger']),
    },
    methods:{
        ...mapMutations('countAbout', {'add':'JIA','sub':'JIAN'}),
        ...mapActions('countAbout', ['addOdd','addwait'])
    },
}
</script>

<style>
    button{
        margin: 5px;
    }
</style>
