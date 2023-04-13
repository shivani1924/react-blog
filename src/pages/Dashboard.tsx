import React,{useEffect} from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { AuthInterface } from '../interfaces/interfaces'
import { useNavigate } from 'react-router-dom'

const Dashboard:React.FC = () => {

    const auth:AuthInterface = useSelector((state:AuthInterface)=>state)
    // const navigate = useNavigate();

    // useEffect(()=>{
    //     if(!auth.email && !auth.loading){
    //         navigate('/');
    //     }
    // },[auth])
    
    return (
        <>
            <Header />
        </>
    )

}

export default Dashboard