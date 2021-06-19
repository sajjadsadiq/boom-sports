import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LeaguesDataLoad from './components/LeaguesDataLoad/LeaguesDataLoad';
import NoFound from "./components/NoFound/NoFound";
import LeagueDetail from "./components/LeagueDetail/LeagueDetail";
import Back from "./components/Back/Back";


function App() {
  return (
    <div >

      {/* React Router Section Part! */}
      <Router>
        <Switch>
          <Route path="/league-details/:detailsID">
            <LeagueDetail></LeagueDetail>
          </Route>

          <Route exact path="/">
            <LeaguesDataLoad></LeaguesDataLoad>

          </Route>
          <Route path="/">
            <Back></Back>
          </Route>
          <Route path="*">
            <NoFound></NoFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
