import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Refund from './Pages/Refund/Refund';

export const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Refund} />
            <Route path="*" component={Refund} />
        </Switch>
    </BrowserRouter>  
  );
};
