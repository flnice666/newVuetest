<template>
  <div>
    <span class="topfont">
      <span class="leftfont">欢迎你 肯德基用户</span>
      <span class="outfont">退出</span>
      <van-icon class="iconstyle" name="user-o" />
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.topfont {
  font-size: 12px;
  display: flex;
}
.leftfont{
  flex: 1;
  text-align: right;
  padding-right: 38px;
}
.iconstyle {
  padding-top: 3px;
  color: tomato;
  width: 40px;
  text-align: center;
}
.outfont{
  display: inline-block;
  width: 40px;
  text-align: center;
}

</style>