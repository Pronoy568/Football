import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
          <Route path="/home">
            <Home />
          </Route>
          {/* add */}
          <Route path="/leagues/:id">
            <LeagueDetails></LeagueDetails>
          </Route>
          {/* end */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
         </Switch>
      </Router> 
    </div>
  );
}

export default App;
