import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rolls from "./components/Rolls";
import NewRollForm from "./components/NewRollForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/rolls" component={Rolls} />
        <Route exact path="/rolls/new" component={NewRollForm} />
      </Switch>
    </Router>
  );
}

export default App;
