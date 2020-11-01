import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import QuickOps from './Pages/QuickOps';
// import Timeline from './Pages/Timeline';
import Home from './Pages/Home/Home';


export const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
        </Switch>
    </BrowserRouter>  
  );
};
