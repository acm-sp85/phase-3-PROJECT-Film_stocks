import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rolls from "./components/Rolls";
import NewItemForm from "./components/NewItemForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/rolls" component={Rolls} />
        <Route exact path="/rolls/new" component={NewItemForm} />
      </Switch>
    </Router>
  );
}

export default App;
