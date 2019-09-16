import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from "hookrouter";
import routes from "./router";


const Root = () => {
  const routeResult = useRoutes(routes);
  return routeResult;
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root-main'));
});
 
