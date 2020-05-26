import React from 'react';

import { createBrowserHistory } from 'history';
import Header from '../header';
import RandomPlanet from '../random-planet';

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage } from '../pages';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import StarshipDetails from '../sw-components/starship-details';

export function MyRouter({isLoggedIn, onServiceChange, onLogin}) {
  return (
    <Router>
      <div className="stardb-app">
        <Header onServiceChange={onServiceChange} />
        <RandomPlanet />

        <Switch>
          <Route path="/"
                  render={() => <h2>Welcome to StarDB</h2>}
                  exact />
          <Route path="/people/:id?" component={PeoplePage} />
          <Route path="/planets" component={PlanetsPage} />
          <Route path="/starships" exact component={StarshipsPage} />
          <Route path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />
                  }}/>

          <Route
            path="/login"
            render={() => (
              <LoginPage
                isLoggedIn={isLoggedIn}
                onLogin={onLogin}/>
            )}/>

          <Route
            path="/secret"
            render={() => (
              <SecretPage isLoggedIn={isLoggedIn} />
            )}/>

          <Route render={() => <h2>Page not found</h2>} />
        </Switch>

      </div>
    </Router>
  )
}

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});
