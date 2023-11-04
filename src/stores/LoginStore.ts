import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Login } from '@/server/login';
import type { LoginDataType } from './Types/Login.type';
import { ElMessage } from 'element-plus';
import { localCache } from '@/utils/Cache';
export const useLoginstore = defineStore('LoginStore', {
  state: (): LoginDataType => {
    return {
      isShowLoginState: false,
      Profile: {},
    };
  },
  actions: {
    changeIsloginState() {
      this.isShowLoginState = true;
    },
    CloseLogingTose() {
      this.isShowLoginState = false;
    },
    async FetchLoging(Phone: string, password: string) {
      const res = await Login(Phone, password);
      this.Profile = res.profile;
      if (res.code === 200) {
        localStorage.setItem('WFMusictoken', res.token);
        localCache.setCache('WFMUSICPROFILE', res.profile);
        ElMessage({
          message: '登录成功',
          type: 'success',
        });
        this.CloseLogingTose();
      } else {
        ElMessage({
          message: `${res.message}`,
          type: 'warning',
        });
      }
    },
  },
});
