<script>
import Top from "./views/Top/top.vue"
export default {
  name: 'app',
  components:{
    Top,
  }
}
</script>

<template>
  <div class="phone">
    <Top />
    <router-view class="center" />

  </div>
</template>

<style>
.phone{
  padding: 0 20px;
}
.center{
  height: calc(100vh - 120px);
}
</style>
