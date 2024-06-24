import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'; 

export default function ProtectedRoute() { 
    const userInLocalStorage = localStorage.getItem('loggedInUser'); 
    const userInSessionStorage = sessionStorage.getItem('loggedInUser');
    if (!(userInLocalStorage || userInSessionStorage) && window.location.pathname!='/login') {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />
}