import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
 } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'


import SignUpFormContainer from './session_form/sign_UP_container'
import SignInFormContainer from './session_form/sign_IN_container'
import SplashContainer from './splash_page/splash_container'
import HeaderContainer from './header/header'
import BobaTimesContainer from './boba_times/boba_times'
import BobaTimesEventContainer from './boba_times_event/boba_times_event'
import ProfileContainer from './profile/profile'
import CreateContainer from './create/create_event'


const App = () => (
  <div className="app-container">
    <HeaderContainer />
    <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <Route exact path="/boba_times" component={BobaTimesContainer} />
      <Route exact path="/boba_times/:eventId" component={BobaTimesEventContainer} />
      <Route exact path="/profile" component={ProfileContainer} />
      <Route exact path="/create" component={CreateContainer} />
      <Route exact path="/" component={SplashContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
)

export default App
