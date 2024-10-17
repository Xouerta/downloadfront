import type { FormInstance } from "element-plus";
import LoginForm from "./LoginForm.vue"
import type { FormData } from './types'
export default LoginForm;

export function onSubmit(props: FormData) {
    console.log(props.password)
    console.log(11);
    
}