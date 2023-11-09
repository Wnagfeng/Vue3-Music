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
      isLoadingSuccess: false,
      UserName: '',
      UserCover: '',
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
        // 登录成功需要展示用户信息
        localStorage.setItem('WFMusictoken', res.token);
        localCache.setCache('WFMUSICPROFILE', res.profile);
        this.isLoadingSuccess = true;
        const { nickname, avatarUrl } = localCache.getCache('WFMUSICPROFILE');
        this.UserName = nickname;
        this.UserCover = avatarUrl;
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
