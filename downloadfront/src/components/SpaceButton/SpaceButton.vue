<!-- 仅当文本长度为 2 且所有字符均为中文时才生效 -->
<template>
  <el-config-provider :button="config">
    <el-button>{{ content }}</el-button>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { reactive, withDefaults } from 'vue'
import type { SpaceButtonType } from './types'

const props = withDefaults(defineProps<SpaceButtonType>(), {
  content: '登录',
  autoInsertSpace: true,
})
const config = reactive({
  autoInsertSpace: props.autoInsertSpace
})
</script>
