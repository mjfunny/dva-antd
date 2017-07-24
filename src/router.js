import React from 'react';
import cookie from 'js-cookie';
import { Router, Route, IndexRedirect } from 'dva/router';
import MainLayout from './pages/layouts/MainLayout';
import Login from './pages/login/Login.jsx';
import UserList from './pages/user/UserList';
import TestForm from './pages/form/TestForm';
import Tool from './pages/tool/Tool';


function getUserInfo() {
  return cookie.get('user');
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" breadcrumbName="Home" component={MainLayout}>
        {/*<IndexRedirect to="user" />*/}
        <Route path="user" breadcrumbName="Users" component={UserList} />
        <Route path="form" breadcrumbName="Form" component={TestForm} />
        <Route path="tool" breadcrumbName="Tool" component={Tool} />
      </Route>
      <Route path="login" component={Login} />
    </Router>
  );
}

export default RouterConfig;
