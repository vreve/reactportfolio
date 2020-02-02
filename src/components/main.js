import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contact';
import Weather from './weather';



const Main = () => (
  
  <Switch>
    <Route exact path="/">
      <LandingPage />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/weather">
      <Weather />
    </Route>
  </Switch>
  
)

export default Main;
