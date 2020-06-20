import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Click from './pages/click';
import Props from './pages/props';

export default function App() {
  const link = [
    { path: '/', name: 'Home' },
    { path: '/click', name: 'Click' },
    { path: '/props', name: 'Props' },
  ];

  // /  /users

  const routes = [
    {
      path: '/',
      component: 'home',
      exact: true,
    },
    {
      path: '/props',
      component: <Props />,
    },
    {
      path: '/click',
      component: <Click />,
    },
  ];

  const renderLink = () =>
    link.map((item) => (
      <li key={item.path}>
        <Link to={item.path}>{item.name}</Link>
      </li>
    ));

  const renderRoutes = () =>
    routes.map((item) => (
      <Route key={item.path} path={item.path} exact={item.exact}>
        {item.component}
      </Route>
    ));

  return (
    <Router>
      <nav>
        <ul>{renderLink()}</ul>
      </nav>
      <Switch>{renderRoutes()}</Switch>
    </Router>
  );
}
