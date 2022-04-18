<template>
  <div>
      <button @click="isShow = !isShow">显示隐藏</button>
        <transition-group appear>
          <h1 v-show="!isShow" key="1" >hello1</h1>
          <h1 v-show="isShow" key="2">hello2</h1>
        </transition-group>

  </div>
</template>

<script>
export default {
  name: "test2",
  data(){
    return{
      isShow:true
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }

  .v-enter ,.v-leave{
    transform: translateX(-100%);
  }
  .v-enter-active , .v-leave-active {
    transition: 1s linear;
  }
  .v-enter-to , .v-leave-to{
    transform: translateX(-0px);
  }


  /*@keyframes yjm {*/
  /*  from{*/
  /*    transform: translateX(-100%);*/
  /*  }*/
  /*  to{*/
  /*    transform: translateX(-0px);*/

  /*  }*/
  /*}*/
</style>