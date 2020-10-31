import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import QuickOps from './Pages/QuickOps';
import Timeline from './Pages/Timeline';


export const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Timeline} />
        </Switch>
    </BrowserRouter>  
  );
};
