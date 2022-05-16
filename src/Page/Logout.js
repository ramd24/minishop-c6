import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import userSlice from '../store/user'

const Logout = () => {
    const dispatch = useDispatch()

    localStorage.removeItem('minishopAccessToken')
    dispatch( userSlice.actions.removeUser() )

    return(
        <Navigate to='/login'/>
    )
}

export default Logout