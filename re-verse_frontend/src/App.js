import logo from './logo.png';
import AboutUs from './Start.js';
import Home from './Home.js';
import Profile from './Profile.js';
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          

        </Switch>
      </div>
    </Router>
  );
}

export default App;
