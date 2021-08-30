import {BrowserRouter, Switch, Route } from 'react-router-dom';
import PaginaCadastro from '../pages/PaginaCadastro/PaginaCadastro';
import PaginaFeed from '../pages/PaginaFeed/PaginaFeed';
import PaginaLogin from '../pages/PaginaLogin/PaginaLogin';
import PaginaPost from '../pages/PaginaPost/PaginaPost';
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header';

const Router = () => {
    return (
        <BrowserRouter>
          <Header />
            <Switch>

                <Route exact path='/cadastro'>
                    <PaginaCadastro />
                </Route>

                <Route exact path='/'>
                    <PaginaLogin />
                </Route>

                <Route exact path='/feed'>
                    <PaginaFeed />
                </Route>

                <Route exact path='/post/:id'>
                    <PaginaPost />
                </Route>

                <Route >
                    <ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;
  