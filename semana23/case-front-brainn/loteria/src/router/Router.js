import React from 'react';
import { Switch, Route } from "react-router-dom";

import MegaCena from "../pages/MegaCena";
import LotoFacil from "../pages/LotoFacil";
import DiaDeSorte from "../pages/ DiaDeSorte";
import LotoMania from "../pages/LotoMania";
import Quina from "../pages/Quina";
import TimeMania from "../pages/TimeMania";


function Router() {
    return (
      <Switch>
        <Route exact path="/" component={MegaCena} />
        <Route exact path="/loto/facil" component={LotoFacil} />
        <Route exact path="/dia/de/sorte" component={DiaDeSorte} />
        <Route exact path="/loto/mania" component={LotoMania} />
        <Route exact path="/quina" component={Quina} />
        <Route exact path="/time/mania" component={TimeMania} />
      </Switch>
    );
  }
  export default Router;