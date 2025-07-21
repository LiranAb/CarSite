import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  useAuthStore from '../store/authStore'
import {Button} from "./Button";

const NavBar = () => {
  const { user, logOut } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logOut();
    navigate('/login')
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="main-container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600 hover:text-blue-800">
              פרויקט הגמר
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">

            <Link to="/cars" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              משתמשים
            </Link>

            <Link to="/car-search" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              קטלוג רכבים

            </Link>

            {user ? (
              <>

                <div className="flex items-center space-x-2">
                  <Link to="/profile" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    שלום  {user.name}
                  </Link>

                  <Button
                    onClick={handleLogout}
                    text={"התנתק"}
                  />

                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="btn-primary text-sm">
                  התחבר
                </Link>
                <Link to="/register" className="btn-secondary text-sm">
                  הירשם
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
