<template >
  <div class="father">
    <div>
      <van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch">
        <template #action>
          <div @click="onClickButton">搜索</div>
        </template>
      </van-search>
    </div>
    <van-notice-bar class="noticebarTwo" mode="closeable">
      <span>如没找到可点的餐厅，试试肯德基宅急送吧!</span>
      <van-button class="noticebar" round size="small">点外卖
        <van-icon name="arrow" />
      </van-button>
    </van-notice-bar>
    <div class="'tabstyle">
      <van-tabs background="#d9d9d9" class="tabsback" v-model:active="active">
        <van-tab class="tabsback" title="常规餐厅">
          <DiningRoom />
        </van-tab>
        <van-tab class="tabsback" title="甜品站">甜品站</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import DiningRoom from '../DiningRoom/dining.vue'
export default {
  components: {
    DiningRoom,
  }
}
</script>


<style>

.father {
  background: #d9d9d9;
}

.noticebar {
  height: 20px;
  background: #dfbb10;
  color: #fff;
  margin-left: 80px;
  position: relative;
  top: -3px;
  font-size:12px;
}

.noticebarTwo {
  margin-top:10px;
  margin-left:20px;
  margin-right:20px;
  font-size: 12px;
  line-height: 60px;
  padding-top: 1px;
  border-radius: 50px;
  height:28px;
}

.tabsback{
   background:#d9d9d9;
}
</style>