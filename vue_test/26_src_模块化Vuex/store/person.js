import axios from "axios";
import {nanoid} from "nanoid";
export default  {
    namespaced:true,
    actions:{
        addWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit("ADD_WANG",value)
            }else{
                alert("添加的人必须姓王")
            }
        },
        addPersonServer(context){
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response =>{
                    context.commit("ADD_PERSON",{id:nanoid(),name:response.data})
                },
                error => {
                    alert("error")
                }
            )
        }
    },
    mutations : {
        ADD_WANG(state,value){
            state.personList.unshift(value);
        },
        ADD_PERSON(state,value){
            state.personList.unshift(value);
        }
    },
    state : {
        personList:[
            {id:'001',name:'张三'},
            {id:'002',name:'李四'}
        ]
    },
    getters:{
        fristPersonName(state){
            return state.personList[0].name;
        }
    }
}
