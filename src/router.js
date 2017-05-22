import React from 'react';
import { Router, Route,IndexRedirect,IndexRoute } from 'dva/router';
import MainLayout from './pages/layouts/MainLayout';
import UserList from './pages/user/UserList';
import TestForm from './pages/form/TestForm';
import Tool from './pages/tool/Tool';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={MainLayout}>
        <IndexRedirect to="user"/>
        <Route path="user" component={UserList}/>
        <Route path="form" component={TestForm}/>
        <Route path="tool" component={Tool}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
