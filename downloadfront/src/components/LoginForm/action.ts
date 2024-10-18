import type { FormDataType } from './types'
import type { FormInstance } from 'element-plus'
import route from './route'

const submitForm = async (
  formEl: FormInstance | undefined,
  formData: FormDataType,
) => {
  if (!formEl || !formEl?.validate) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      route.POST(formData)
      console.log('submitForm')
    } else {
      console.log('error submit!', fields)
    }
  })
}

export default {
  submitForm
}
