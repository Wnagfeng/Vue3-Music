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
        <template v-if="isLoadingSuccess">
          <div class="userinfoTop" style="display: flex; align-items: center">
            <img
              :src="UserCover"
              style="width: 30px; height: 30px; margin-left: 10px"
              alt=""
            />
            <div class="name" style="margin-left: 10px; margin-right: 10px">
              {{ UserName }}
            </div>
            <img
              @click="handelExitLoging"
              style="
                width: 20px;
                height: 20px;
                cursor: pointer;
                margin-right: 10px;
              "
              src="../assets/img/CloseLogin.png"
              alt=""
            />
          </div>
        </template>
        <template v-else>
          <div class="loginbox" @click="handelLoginClick">登录</div>
        </template>
      </div>
    </div>
  </div>
  <template v-if="isShowLoginState">
    <LoginVue></LoginVue>
  </template>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, watchEffect } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { useLoginstore } from '@/stores/LoginStore';
import LoginVue from '../views/Login.vue';
import { storeToRefs } from 'pinia';
import { localCache } from '@/utils/Cache';
import { ElMessage } from 'element-plus';
const LoginStore = useLoginstore();
const { isShowLoginState, isLoadingSuccess, UserCover, UserName, Profile } =
  storeToRefs(LoginStore);
const SearchValue = ref('');
const handelLoginClick = () => {
  LoginStore.changeIsloginState();
};
const handelExitLoging = () => {
  ElMessage({
    message: '退出成功',
    type: 'success',
  });
  localStorage.setItem('WFMusictoken', '');
  localCache.setCache('WFMUSICPROFILE', {});
  isLoadingSuccess.value = false;
};
onMounted(() => {
  const info = localCache.getCache('WFMUSICPROFILE');
  if (info !== undefined) {
    UserName.value = info.nickname;
    UserCover.value = info.avatarUrl;
    if (UserName.value !== undefined && UserCover.value !== undefined) {
      isLoadingSuccess.value = true;
    }
  } else {
    isLoadingSuccess.value = false;
  }
});
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
