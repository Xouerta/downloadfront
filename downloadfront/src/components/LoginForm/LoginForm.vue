<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormData } from './types'
import { onSubmit } from './index'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()
const formData = reactive<FormData>({
  username: '',
  password: '',
})
</script>

<template>
  <el-form ref="formRef" :modal="formData" label-width="auto">
    <el-form-item
      label="账户"
      :rules="[{ required: true, message: '内容不能为空' }]"
    >
      <el-input v-model="formData.username" />
    </el-form-item>
    <el-form-item
      label="密码"
      :rules="[{ required: true, message: '内容不能为空' }]"
    >
      <el-input v-model="formData.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(formData)">登录</el-button>
    </el-form-item>
  </el-form>
</template>
