<template>
  <div>
      <button @click="isShow = !isShow">显示隐藏</button>
      <transition appear>
        <h1 v-show="isShow" >hello</h1>
      </transition>
  </div>
</template>

<script>
export default {
  name: "test",
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

  .v-enter-active {
    animation: yjm 1s;
  }

  .v-leave-active {
    animation: yjm 1s reverse;
  }

  @keyframes yjm {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(-0px);

    }
  }
</style>