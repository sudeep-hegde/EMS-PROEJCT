import React from 'react'
import { Navigate } from 'react-router-dom'

const LoginRoute = ({children}) => {
    const isLogged=localStorage.getItem('isLoggedIn')
  return (
    isLogged? <Navigate to="/"/>:children
  )
}

export default LoginRoute 