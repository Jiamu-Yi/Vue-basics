//该文件用于创建最核心的store
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex)
//准备actions
const actions = {
    jia(context,value){
        context.commit('JIA',value)
    },
    jian(context,value){
        context.commit('JIAN',value)
    },
    addOdd(context,value){
        if(context.state.sum%2){
            context.commit('JIA',value)
        }
    },
    addwait(context,value){
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
    },

}
//准备mutations
const mutations = {
    JIA(state,value){
        state.sum += value;
    },
    JIAN(state,value){
        state.sum -= value;
    }
}
//准备state
const state = {
    sum : 0,
}
const getters = {
    bigger(){
        return state.sum*10;
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state,
})


