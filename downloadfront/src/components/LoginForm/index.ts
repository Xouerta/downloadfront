import request from "@/utils/request";
import LoginForm from "./LoginForm.vue"
export default LoginForm;

import type { FormData } from './types'
import type { FormInstance } from 'element-plus'
import route from "./route";

export const submitForm = async (formEl: FormInstance | undefined, formData: FormData) => {
    if (!formEl || !formEl?.validate) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            route.POST()
            console.log("");

        } else {
            console.log('error submit!', fields)
        }
    })
}