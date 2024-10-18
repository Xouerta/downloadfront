import request from "@/utils/request"
import type { FormDataType } from "./types";
export default {
    POST: async (formData: FormDataType) => {
        const res = await request({
            url: "localhost:5173",
            method: "POST",

        })
        console.log(formData);

    }
}
