<template>
  <div class="LoginWrapper">
    <div class="container">
      <div class="close" @click="handelcloseclick">
        <img src="../assets/img/close.png" alt="" />
      </div>
      <div class="logo">
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <h2>用户登录</h2>
      <form>
        <label for="email" class="infoemal">网易云账号：</label>
        <input
          type="email1"
          id="email"
          name="email"
          v-model="LoginForm.name"
          required
        />
        <label for="password">密码：</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="LoginForm.password"
          required
        />
        <input type="Login" value="登录" @click="handelLoginCLick" />
      </form>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { useLoginstore } from '@/stores/LoginStore';
import { Loading } from 'element-plus/es/components/loading/src/service';
const LoginStore = useLoginstore();
const LoginForm = reactive({
  name: '',
  password: '',
});
const handelcloseclick = () => {
  LoginStore.CloseLogingTose();
};
const handelLoginCLick = () => {
  // 19556355023
  LoginStore.FetchLoging(LoginForm.name, LoginForm.password);
};
</script>
<style scoped lang="less">
.infoemal {
  margin-left: 10px;
}
.LoginWrapper {
  z-index: 9999;
  width: 500px;
  height: 500px;
  position: absolute;
  left: 38%;
  // transform: translateX(-38%);
  top: 50%;
  transform: translateY(-50%);
  // background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}
.container {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  // margin: 50px auto;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.logo {
  // background-color: #333;
  border-radius: 50%;
  color: #fff;
  font-size: 40px;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}

.logo span {
  display: inline-block;
  transform: rotate(-15deg);
}

h2 {
  color: #333;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
}

input[type='email1'],
input[type='password'] {
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  height: 40px;
  padding: 5px;
  width: 100%;
  margin-bottom: 20px;
}

input[type='Login'] {
  background-color: #333;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  padding: 10px 40px;
  width: 60px;
  text-align: center;
  transition: background-color 0.3s ease;
}

input[type='Login']:hover {
  background-color: #fff;
  color: #333;
}
.close {
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
