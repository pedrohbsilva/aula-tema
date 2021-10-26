import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import PrivateRoute from './privateRoute'

function Routes(){
  const isAuthenticated = () => false
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/:id" component={About} />

        <Route path="/about" component={About} />
        <Route path="/client/:offset/:limit" component={About} />
        <PrivateRoute 
          path="/admin" 
          isAuthenticated={isAuthenticated} 
          component={About}
        />
        <Route path="*" component={()=><h1>Página não encontrada</h1>}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes