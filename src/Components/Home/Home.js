import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../Login/Login'

const Home = () => {
    const token = localStorage.getItem("token")
    if (!token) return <Navigate to="/login"/>
    return(
        <div>
            Welcome
        </div>
    )
  
}

export default Home