import { Component,useEffect,useRef,useState } from "react";

const RefHook = () => {
    const [data,setData] = useState(0)
    const count = useRef(10)
    useEffect(()=>{
        const a = "s"
        setData(data+1)
        const b = "c"
        console.log("bohem")
    },[])

    return (
        <>
        <h1>
            {data}
        </h1>
        </>
    )
}
export default RefHook;