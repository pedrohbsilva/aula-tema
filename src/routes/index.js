import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import PublicRoute from './publicRoute'
import {useAuth} from '../context'
function Routes() {
  const {user} = useAuth()

  const existToken = user ? true : false
  return (
    <BrowserRouter>
        {existToken ? <PrivateRoute/> : <PublicRoute/>}
    </BrowserRouter>
  )
}

export default Routes