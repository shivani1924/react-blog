import React from 'react'
import { AuthInterface } from '../interfaces/interfaces'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header:React.FC = () => {
    const auth:AuthInterface = useSelector((state:AuthInterface)=>state)
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/dashboard" className="text-sm font-semibold leading-6 text-gray-900">Dashboard</Link>
                    <Link to="/post" className="text-sm font-semibold leading-6 text-gray-900">Posts</Link>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Comments</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">{auth.email}</a>
                </div>
            </nav>
        </header>
    )
}

export default Header