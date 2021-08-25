import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "./components/Items";
import NewItemForm from "./components/NewItemForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/items" component={Items} />
        <Route exact path="/items/new" component={NewItemForm} />
      </Switch>
    </Router>
  );
}

export default App;
