import axios, { AxiosError, AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { FormData, FormDataa } from "../interfaces/interfaces";

export const CreatePost = async(formData:FormData) => {
    await axios.post('http://localhost:3001/post', formData)
        .then((response: AxiosResponse) => {
            console.log(response);
            Swal.fire('Post Created', 'Post Created Successfully', 'success');
        })
        .catch((error: Error | AxiosError) => {
            if (axios.isAxiosError(error)) {
                var errMsg = ""
                error?.response?.data?.errors.forEach((err:{message:string})=>{
                    errMsg += err.message + "<br>"
                })
                Swal.fire('Error', errMsg, 'error');
             }
    });
}

export const GetAllPost = async ():Promise<FormDataa[]> =>{
    return await axios.get('http://localhost:3001/get-post-with-comment')
        .then((response: AxiosResponse) => {
            console.log(response);
            return response.data
        })
        .catch((error: Error | AxiosError) => {
            return error
    });
}