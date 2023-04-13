import { useEffect, useState } from "react"
import { GetAllPost } from "../ajax"
import { AuthInterface, FormData, FormDataa } from "../interfaces/interfaces";
import { useSelector } from "react-redux";





const AllPost:React.FC = () =>{

    const[data,setData] = useState<FormDataa[]>();
    const auth:AuthInterface = useSelector((state:AuthInterface)=>state)


    const getData = async () => {
            let response:FormDataa[] =  await GetAllPost();
            setData(response)
            console.log(data);
            
            // setData([...data,...response])
    }

    // useEffect(()=>{
    //     handleScroll()
    // })

    useEffect(()=>{
        if(!auth.loading){
            getData()
        }
    },[auth])

    return (
        <>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Body</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data?.map(item=>(

                        <tr key={item._id}>
                            <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.body}</td>
                        </tr>
                    ))}
                </tbody>
                </table>

            
        </>
    )
}

export default AllPost