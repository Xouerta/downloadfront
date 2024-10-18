<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormDataType } from './types'
// import { submitForm } from './index'
import action from './action'
import type { FormInstance, FormRules } from 'element-plus'

const formRef = ref<FormInstance>()
const formData = reactive<FormDataType>({
  username: '',
  password: '',
})
const rules = reactive<FormRules<FormDataType>>({
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur',
    },
  ],
})
</script>

<template>
  <el-form ref="formRef" :model="formData" :rules="rules" label-width="auto">
    <el-form-item label="账户" prop="username">
      <el-input v-model="formData.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formData.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="action.submitForm(formRef, formData)">登录</el-button>
    </el-form-item>
  </el-form>
</template>
