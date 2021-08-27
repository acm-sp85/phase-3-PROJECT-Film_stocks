import React from "react";
import Roll from "./Roll";

class Rolls extends React.Component {
  state = {
    rolls: [],
    brands: [],
    formats: [],
  };

  componentDidMount() {
    fetch(`http://localhost:9292/rolls`)
      .then((response) => response.json())
      .then((rolls) => {
        const arrayWithAllBrandsRepeated = rolls.map((roll) => roll.brand);
        const brands = [...new Set(arrayWithAllBrandsRepeated)];
        const arrayWithAllFormatsRepeated = rolls.map((roll) => roll.format);
        const formats = [...new Set(arrayWithAllFormatsRepeated)];
        this.setState({ rolls, brands, formats });
      });
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
