<template>
    <div>
        <h3 style="color: #bd362f">求和为：{{sum}}</h3>
        <h3>列表中第一个人的名字是{{firstPersonName}}</h3>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name">

        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addPersonServer">网络连接</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import {mapState} from "vuex";
import {nanoid} from "nanoid";
export default {
    name: "Person",
    data(){
        return{
            name:'',
        }
    },
    computed:{
        ...mapState('personAbout',['personList']),
        ...mapState('countAbout',['sum']),
        firstPersonName(){
            return this.$store.getters["personAbout/fristPersonName"];
        }
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name};
            this.$store.commit("personAbout/ADD_PERSON",personObj);
            this.name = '';
        },
        addWang(){
            const personObj = {id:nanoid(),name:this.name};
            this.$store.dispatch('personAbout/addWang',personObj);
            this.name = '';
        },
        addPersonServer(){
            this.$store.dispatch('personAbout/addPersonServer');
        }
    }
}
</script>

<style>
    button{
        margin: 5px;
    }
</style>
