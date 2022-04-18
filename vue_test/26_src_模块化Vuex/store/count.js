export default {
    namespaced: true,
    actions :{
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
    },
    mutations :{
        JIA(state,value){
            state.sum += value;
        },
        JIAN(state,value){
            state.sum -= value;
        },
    },
    state:{
        sum : 0,
    },
    getters:{
        bigger(state){
            return state.sum*10;
        }
    },
}
