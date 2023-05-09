import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import UserLogin from './UserLogin';


const Login = () => {
    const { pathname } = useLocation();
    const location = useLocation();
  return (
    <>
      <Routes>
      <Route path="login" element={<UserLogin />} />
      <Route
        path="/"
        element={<Navigate to={`/${pathname.split("/")[1]}/login`} />}
      />
    </Routes>
    </>
  )
}

export default Login