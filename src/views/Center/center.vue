<template>
  <div class="center">
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="value in 4" :key="value" class="swipeitem">{{
        value
      }}</van-swipe-item>
      <!-- <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item> -->
    </van-swipe>
    <van-row class="rowF">
      <van-col span="16" class="bigtext">下午好</van-col>
      <van-col span="3" class="iconred"><van-icon name="question-o" /></van-col>
      <van-col span="5" class="righttext"
        >隐私政策<van-icon name="arrow"
      /></van-col>
    </van-row>
    <span>456456646</span>
    <van-button class="eatButton" round type="primary" size="large" @click="eatpush" >开始点餐</van-button>
    <Bottom />
  </div>
</template>

<script>
import Bottom from "../Bottom/bottom.vue"
export default {
  components:{
    Bottom
  },
  methods:{
    eatpush(){
      this.$router.push({
        path:'/eatpage'
      })
    },
  }
};
</script>

<style>
.center {
  background-color: rgb(240, 255, 248);
  padding: 10px;
}
.swipe .swipeitem {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.iconred {
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.righttext {
  color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bigtext{
  font-size: 16px;
  font-weight: 2px;
}
.rowF{
  margin-top: 10px;
}
.eatButton{
  background: red;
  margin-top: 10px;
}
</style>