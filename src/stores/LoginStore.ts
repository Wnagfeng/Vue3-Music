import { ref } from 'vue';
import { defineStore } from 'pinia';
export const useLoginstore = defineStore('LoginStore', () => {
  const isShowLoginState = ref(false);
  const isLogin = ref(false);
  function changeIsloginState() {
    isShowLoginState.value = !isShowLoginState.value;
  }
  // 

  return { isShowLoginState, changeIsloginState };
});
