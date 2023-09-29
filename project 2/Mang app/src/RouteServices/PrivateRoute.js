import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isLogged=localStorage.getItem('isLoggedIn')
  return (
    isLogged? children:<Navigate to="/login"/>
  )
}

export default PrivateRoute