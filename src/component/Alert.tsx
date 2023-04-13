import { useEffect, useState } from "react";

export interface AlertContract{
    type:"error"|"success",
    show:boolean,
    msg:string,
    color:string
}

export const Alert:React.FC<AlertContract> = (props:AlertContract) =>{
    
    const [show,setShow] = useState<boolean>(props.show)

    

    useEffect(()=>{
        setShow(true)
        setTimeout(function(){ 
            setShow(false)
        }, 2000);
    },[props])

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: props.msg}}
            className={`fixed top-0 left-0 w-full p-4 bg-${props.color}-500 text-white ${(show ?'show':'hidden')}`}>
                {/* {msg} */}
            </div>
        </>
    )
}
