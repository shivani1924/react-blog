import React, { useEffect, useState } from 'react';
import UserSearch from './classes/UserSearch';
import Parent from './props/Parent';
import RefHook from './hooks/useRef';
import LoginForm from './pages/LoginForm';
import storage from './utils/storage';
import axios, { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Post from './pages/Post';

function App() {
  // const [token, setToken] = useState<string | null>(null);
  const dispatch = useDispatch()
  const navigate = useNavigate();


    useEffect(() =>{

      const getMe = async () => {
        await axios.post('http://localhost:3001/me','',{
          headers: {
            authorization: `bearer ${token}`,
          },
        })
        .then((response: AxiosResponse) => {
          dispatch({type:"user_logged_in",payload:response.data})
          axios.defaults.headers.common['authorization'] = `bearer ${token}`
        })
        .catch((error: Error) => {
          storage.clearToken()
          navigate('/')
        })
      }
      let token = storage.getToken()
      if(token){
        getMe()
      }
      else{
        navigate('/')
      }
    },[])

  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/post' element={<Post/>} />
    </Routes>
    // <div className="App">
    //   <Parent />
    //   <UserSearch users={users}/>
    //   <RefHook />
    // </div>
    
  );
}

export default App;
