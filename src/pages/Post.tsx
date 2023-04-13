import React,{useState} from "react"
import Header from "./Header"
import axios, { AxiosError, AxiosResponse } from "axios"
import storage from "../utils/storage"
import { Alert, AlertContract } from "../component/Alert"
import Swal from "sweetalert2"
import { CreatePost } from "../ajax"
import { FormData } from "../interfaces/interfaces"
import AllPost from "./AllPost"



const Post:React.FC = () => {

    const [alert,setAlert] = useState<AlertContract>({type:"error",show:false,msg:'',color:''})
    const [formData,setFormData] = useState<FormData>({title:'',body:''})

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        CreatePost(formData)
    }

    return (
        <>
            <Header />
            <div className="bg-white rounded-lg shadow-md p-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                            <input value={formData.title} id="title" type="text" onChange={handleInputChange} name="title"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="body">
                            Body
                        </label>
                            <input value={formData.body} id="body" type="text" onChange={handleInputChange} name="body"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Create Post
                        </button>
                    </div>
                </form>
            </div>

            <div>
                <AllPost />
            </div>
        </>
    )
}

export default Post