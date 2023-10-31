<template>
  <div class="LoginAdnSearchwrapper">
    <div class="info"></div>
    <div class="LoginWrapper">
      <div class="SearchBox">
        <el-input
          v-model="SearchValue"
          class="w-50 m-2"
          placeholder="请输入歌名、歌词、歌手或者专辑"
          :suffix-icon="Search"
        />
      </div>
      <div class="UserinfoBox">
        <div class="loginbox" @click="handelLoginClick">登录</div>
      </div>
    </div>
  </div>
  <template v-if="LoginStore.isShowLoginState">
    <LoginVue></LoginVue>
  </template>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { useLoginstore } from '@/stores/LoginStore';
import LoginVue from '../views/Login.vue';
const SearchValue = ref('');
const LoginStore = useLoginstore();
const handelLoginClick = () => {
  LoginStore.changeIsloginState();
};
const handelcloseclick = () => {
  console.log('点击了');
};
</script>
<style scoped lang="less">
:deep(.is-focus) {
  border: none;
  box-shadow: 0 0 0 1px black;
}
.LoginAdnSearchwrapper {
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  height: 80px;
  display: flex;
  //   justify-content: space-between;
  .info {
    flex: 1;
  }
  .LoginWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    .SearchBox {
      .el-input {
        width: 260px !important;
      }
    }
    .loginbox {
      font-size: 20px;
      cursor: pointer;
      width: 100px;
      margin-left: 20px;
    }
  }
}
</style>
