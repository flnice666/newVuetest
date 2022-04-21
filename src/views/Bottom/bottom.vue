<template>
  <div>
    <p class="fontstyle">更多服务</p>
    <van-grid :column-num="5"  class="fontsize">
       <van-grid-item v-for="value in bottomvalue" :key="value">{{value.text}}</van-grid-item>
    </van-grid>
  </div>
</template>

<script>
const bottomarr = [{
  text:'V金商城'
},{
  text:'K咖啡'
},{
  text:'口袋炸鸡店'
},{
  text:'会员'
},{
  text:'宅急送'
}]
export default {
  data(){
    return{
      bottomvalue: bottomarr
    }
  }
};
</script>

<style>
.fontstyle{
  font-weight: 600;
}
.fontsize{
  font-size: 12px;
}
</style>