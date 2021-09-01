import { Switch, Route } from 'react-router-dom';
import PaginaCadastro from '../pages/PaginaCadastro/PaginaCadastro';
import PaginaFeed from '../pages/PaginaFeed/PaginaFeed';
import PaginaLogin from '../pages/PaginaLogin/PaginaLogin';
import PaginaPost from '../pages/PaginaPost/PaginaPost';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PaginaAddPost from '../pages/PaginaAddPost/PaginaAddPost'


const Router = ({ setRightButtonText }) => {
    return (
            <Switch>

                <Route exact path='/cadastro'>
                    <PaginaCadastro setRightButtonText={setRightButtonText}/>
                </Route>

                <Route exact path='/'>
                    <PaginaLogin setRightButtonText={setRightButtonText}/>
                </Route>

                <Route exact path='/feed'>
                    <PaginaFeed />
                </Route>

                <Route exact path='/add/post'>
                    <PaginaAddPost />
                </Route>

                <Route exact path='/post/:id'>
                    <PaginaPost />
                </Route>

                <Route >
                    <ErrorPage />
                </Route>

            </Switch>
    )
}

export default Router;
  