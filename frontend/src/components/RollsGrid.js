import React from "react";
import Roll from "./Roll";

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
        {/* <ul> {this.renderItems()}</ul> */}
        <Roll info={this.state.rolls} />
      </div>
    );
  }
}

export default Rolls;
