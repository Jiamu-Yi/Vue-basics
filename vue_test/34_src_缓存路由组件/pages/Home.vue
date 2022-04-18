<template>
  <div>
    <div class="panel">
      <h2>我是Home的内容</h2>
      <div>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <router-link class="list-group-item active" to="/home/Message">Message</router-link>
            </li>
            <li>
              <router-link class="list-group-item " to="/home/News">News</router-link>
            </li>
          </ul>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>

</style>
