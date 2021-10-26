import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/signIn';

function PublicRoute() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="*" component={()=><h1>Página não encontrada</h1>}/>
    </Switch>
  );
};

export default PublicRoute;