import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import { mainRoute } from "./Router"
import Login from "./views/Login"
ReactDOM.render(
  <Router>
    <Switch>
      <Route style={{ height: "100%" }} path='/home' render={(routerProps) => {
        return <App  {...routerProps} />
      }}></Route>
      {
        mainRoute.map((Item) => {
          return <Route key={Item.pathname} path={Item.pathname} component={Item.component}></Route>
        })
      }
      <Redirect from='/' to="/login" exact></Redirect>
    </Switch>
  </Router>,
  document.getElementById('root')
);
