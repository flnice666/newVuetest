<template>
  <van-form class="centerland" @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="username" name="uservalue" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="passwordvalue" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round class="buttonStyle" type="primary" @click="returnHom">
        返回首页
      </van-button>
      <van-button style="margin-left: 74px;" round class="buttonStyle" type="primary" native-type="submit">
        提交
      </van-button>
    </div>
    <van-overlay class="overlay" :show="show">
      <van-loading type="spinner" />
    </van-overlay>
  </van-form>
</template>

<script>
import { landPromise } from "../../Promsie/landPro.tsx";
import { Dialog } from "vant";
import { useStore } from "vuex";

export default {
  data: () => {
    return {
      username: "",
      password: "",
      show: false,
    };
  },
  methods: {
    onSubmit: function (e) {
      this.show = true;
      landPromise(this.username, this.password).then((res) => {
        if (res.success) {
          this.$store.commit('setText', { nametext: '李四' })
          this.$store.commit('setLand', { land: true })
          this.$router.push({
            path: "/home",
          });
        } else {
          Dialog.alert({
            message: res.errorMessage,
            theme: "round-button",
          }).then(() => {
            this.show = false;
          });
        }
      });
    },
    returnHom: function () {
      this.$router.push({
        path: "/home",
      });
    }
  },
};
</script>

<style>
.buttonStyle {
  width: 200px;
}

.centerland {
  height: calc(100vh - 120px);
  padding-top: 50px;
}

.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>