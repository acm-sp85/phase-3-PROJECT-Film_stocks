import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewRollForm from "./components/NewRollForm";
import Home from "./components/Home";
import RollDetails from "./components/RollDetails";
import RollsContainer from "./containers/RollsContainer";
import RollsGrid from "./components/RollsGrid";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rolls" component={RollsGrid} />
        <Route exact path="/rolls/new" component={NewRollForm} />
        <Route exact path="/rolls/new/:id" component={NewRollForm} />
        <Route exact path="/rolls/:id" component={RollDetails} />
      </Switch>
    </Router>
  );
}

export default App;
