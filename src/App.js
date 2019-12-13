import React from 'react';
import './App.css';
import {history} from './store';
import { Route, Switch ,Redirect} from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import {BrowserRouter as Router} from 'react-router-dom';
import LandingPage from './modules/landing-page';


function App() {

  

  return (
      <React.Fragment>
         <ConnectedRouter history={history}>
           <Switch>
           {/* <Route exact path="/" render={() => (
           <Redirect to="/dashboard"/>
            )}/> */}
            <Route path="/" component={LandingPage}></Route>       
           </Switch>
         </ConnectedRouter>
      </React.Fragment>
  );
}

export default App;
