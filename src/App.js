import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import User from './component/User/User';
import Detail from './component/Detail/Detail';


function App() {

  return (
    
    <Router>
      <Switch>
        <Route path="/home">
          <User/>
        </Route>
        <Route path="/user/:userId">
          <Detail/>
        </Route>

        <Route exact path="/">
          <User/>
        </Route>
        
        <Route  path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
