<template>
  <div class="LoginWrapper">
    <el-form
      ref="formRef"
      :model="LoginForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="age"
        prop="age"
        :rules="[
          { required: true, message: 'age is required' },
          { type: 'number', message: 'age must be a number' },
        ]"
      >
        <el-input
          v-model.number="LoginForm.age"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)"
          >Submit</el-button
        >
        <el-button @click="resetForm(formRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
const LoginForm = reactive({});
</script>
<style scoped lang="less">
.LoginWrapper {
  width: 18.75rem;
  height: 18.75rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
