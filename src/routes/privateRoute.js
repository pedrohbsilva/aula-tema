import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import Dashboard from '../pages/dashboard';

function PrivateRoute() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard}>
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="*" component={()=><h1>Página não encontrada</h1>}/>
    </Switch>
  );
};

export default PrivateRoute;