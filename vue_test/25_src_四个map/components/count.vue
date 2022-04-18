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
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import {mapMutations} from 'vuex'
export default {
    name: "count",
    data(){
        return {
            n : 1,
        }
    },
    computed:{
        //借助mapState生成计算属性，从state中读取数据（对象数据）
        // ...mapState({sum: 'sum'}),
        //借助mapState生成计算属性，从state中读取数据（数组数据）
        ...mapState(['sum']),
        //借助mapGetters生成计算属性，从state中读取数据（对象数据）
        // ...mapGetters({bigger:'bigger'}),
        //借助mapGetters生成计算属性，从state中读取数据（数组数据）
        ...mapGetters(['bigger']),
    },
    methods:{
        // add(){
        //     this.$store.commit('JIA',this.n)
        // },
        // sub(){
        //     this.$store.commit('JIAN',this.n)
        // },
        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
        ...mapMutations({'add':'JIA','sub':'JIAN'}),
        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
        // ...mapMutations(['JIA','JIAN']),
        // addOdd(){
        //     this.$store.dispatch('addOdd',this.n)
        // },
        // addwait(){
        //     this.$store.dispatch('addwait',this.n)
        // },
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions(对象写法)
        // ...mapActions({'addOdd':'addOdd','addwait':'addwait'})
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions(数组写法)
        ...mapActions(['addOdd','addwait'])
    },

}
</script>

<style scoped>
    button{
        margin: 5px;
    }
</style>
