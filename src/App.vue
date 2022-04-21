<script>
import Top from "./views/Top/top.vue"
import Bottom from "./views/Bottom/bottom.vue"
export default {
  name: 'app',
  components:{
    Top,
    Bottom,
  }
}
</script>

<template>
  <div class="phone">
    <Top />
    <router-view />
    <Bottom />
  </div>
</template>

<style>
.phone{
  padding: 0 20px;
}
</style>
