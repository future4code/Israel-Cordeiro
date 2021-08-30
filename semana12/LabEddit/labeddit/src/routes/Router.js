import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import PaginaCadastro from '../pages/PaginaCadastro/PaginaCadastro';
import PaginaErro from '../pages/PaginaErro/PaginaErro';
import PaginaFeed from '../pages/PaginaFeed/PaginaFeed';
import PaginaLogin from '../pages/PaginaLogin/PaginaLogin';
import PaginaPost from '../pages/PaginaPost/PaginaPost';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/cadastro'>
                    <PaginaCadastro />
                </Route>

                <Route exact path='/login'>
                    <PaginaLogin />
                </Route>

                <Route exact path='/feed'>
                    <PaginaFeed />
                </Route>

                <Route exact path='/post/:id'>
                    <PaginaPost />
                </Route>

                <Router>
                    <PaginaErro />
                </Router>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
  