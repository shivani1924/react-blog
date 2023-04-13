import React, { useState,useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import storage from '../utils/storage';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { AuthInterface } from '../interfaces/interfaces';
// import Cookies from 'js-cookie';

type FormData = {
    email:string,
    password:string
}

const LoginForm:React.FC = ()=> {

  const auth:FormData = useSelector((state:FormData)=>state)
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(auth.email){
      navigate('/dashboard');
    }
  },[auth])


    const [formData, setFormData] = useState<FormData>({ email: '', password: '' })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.post('http://localhost:3001/signin', formData)
        .then((response: AxiosResponse) => {
          let token = response.data.token
          storage.setToken(token)
          axios.defaults.headers.common = {'authorization': `bearer ${token}`}
          navigate('/dashboard');
        })
        .catch((error: Error) => {
          console.error('Error:', error);
        });
    }

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target
        setFormData({...formData,[name]:value})
    }
  
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                name="remember-me"
                className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-700">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
