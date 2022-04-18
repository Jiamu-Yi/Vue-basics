<template>
  <div>
    <div class="panel">
      <h2>我是About的内容</h2>
    </div>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item active" to="/about/Message">Message</router-link>
        </li>
        <li>
          <router-link class="list-group-item" to="/about/News">News</router-link>
        </li>
      </ul>
<!--      这里的include是组件名！！！-->
      <keep-alive include="Message">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>

</template>

<script>
export default {
    name: "About"
}
</script>

<style scoped>

</style>
