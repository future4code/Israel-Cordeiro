import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage.js';
import React from 'react'
import { ListTripsPage } from './pages/ListTripsPage.js';
import { LoginPage } from './pages/LoginPage.js';
import { AdminHomePage } from './pages/AdminHomePage.js';
import { CreateTripPage } from './pages/CreateTripPage.js';
import { ApplicationFormPage } from './pages/ApplicationFormPage.js';
import { TripDetailsPage } from './pages/TripDetailsPage.js';


function App() {
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path={'/'}>
        < HomePage />
      </Route>

      <Route exact path={'/trips/list'}>
        < ListTripsPage />
      </Route>

      <Route exact path={'/login'}>
        < LoginPage />
      </Route>

      <Route exact path={'/admin/trips/list'}>
        < AdminHomePage />
      </Route>

      <Route exact path={'/admin/trips/create'}>
        < CreateTripPage />
      </Route>

      <Route exact path={'/trips/application'}>
        < ApplicationFormPage />
      </Route>

      <Route exact path={'/admin/trips/:id'}>
        < TripDetailsPage />
      </Route>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
