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
  <template v-if="isShowLoginBox">
    <LoginVue></LoginVue>
  </template>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import LoginVue from '../views/Login.vue';
const SearchValue = ref('');
const isShowLoginBox = ref(false);
const handelLoginClick = () => {
  isShowLoginBox.value = !isShowLoginBox.value;
  // 改变展示状态
};
</script>
<style scoped lang="less">
:deep(.is-focus) {
  border: none;
  box-shadow: 0 0 0 0.0625rem black;
}
.LoginAdnSearchwrapper {
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  height: 5rem;
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
        width: 16.25rem !important;
      }
    }
    .loginbox {
      cursor: pointer;
      width: 6.25rem;
      margin-left: 1.25rem;
    }
  }
}
</style>
