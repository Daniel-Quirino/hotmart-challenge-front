import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AnticipationRefund from './Pages/AnticipationRefund/AnticipationRefund';


export const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={AnticipationRefund} />
        </Switch>
    </BrowserRouter>  
  );
};
