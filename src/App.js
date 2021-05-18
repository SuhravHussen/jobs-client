import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
