import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes, setBasepath } from "hookrouter";
import routes from "./router";

// setBasepath("/#");

const Root = () => {
  const routeResult = useRoutes(routes);
  return routeResult;
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root-main'));
});
 
