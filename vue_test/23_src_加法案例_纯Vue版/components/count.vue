<template>
    <div>
        <h1>当前求和{{sum}}</h1>
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
            sum : 0,
        }
    },
    methods:{

        add(){
            this.sum += this.n;
        },
        sub(){
            this.sum -= this.n;
        },
        addOdd(){
            if(this.sum%2){
                this.sum += this.n;
            }
        },
        addwait(){
            setTimeout(()=>{
                this.sum += this.n;
            },500)
        }

    }
}
</script>

<style scoped>
    button{
        margin: 5px;
    }
</style>