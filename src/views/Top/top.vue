<template>
  <div>
    <span class="topfont">
      <span class="leftfont">欢迎你 肯德基用户{{ this.text }}</span>
      <a class="outfont" @click="landup">{{
        this.$store.state.landBoolean ? "退出" : "登录"
      }}</a>
      <van-icon class="iconstyle" name="user-o" />
    </span>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  methods: {
    landup() {
      console.log(this.getText, "点击发生变化");
      if (!this.$store.state.landBoolean) {
        this.$router.push({
          path: "/land",
        });
      } else {
        this.$store.commit("setText", { nametext: "" });
        this.$store.commit("setLand", { land: false });
        localStorage.setItem('getLogin', 'false');
      }
    },
  },
  computed: {
    ...mapState(["text"]),
    ...mapGetters(["getText"]),
  },
};
</script>

<style>
.topfont {
  font-size: 12px;
  display: flex;
}
.leftfont {
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
.outfont {
  display: inline-block;
  width: 40px;
  text-align: center;
}
</style>