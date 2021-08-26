import React from "react";
import { Link } from "react-router-dom";

class Rolls extends React.Component {
  state = {
    rolls: [],
  };

  componentDidMount() {
    fetch(`http://localhost:9292/rolls`)
      .then((response) => response.json())
      .then((rolls) => this.setState({ rolls }));
  }

  renderItems = () => {
    return this.state.rolls.map((roll) => {
      return <li key={roll.id}>{roll.name}</li>;
    });
  };

  render() {
    return (
      <div>
        <Link to="/items/new">New Item</Link>
        <ul> {this.renderItems()}</ul>
      </div>
    );
  }
}

export default Rolls;
