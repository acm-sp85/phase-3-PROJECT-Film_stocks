import React from "react";
import Roll from "./Roll";

class Rolls extends React.Component {
  state = {
    rolls: [],
    brands: [],
    formats: [],
    selected: "",
    filteredRolls: [],
    isos: [],
  };

  componentDidMount() {
    fetch(`http://localhost:9292/rolls`)
      .then((response) => response.json())
      .then((rolls) => {
        const arrayWithAllBrandsRepeated = rolls.map((roll) => roll.brand);
        const brands = [...new Set(arrayWithAllBrandsRepeated)];
        const arrayWithAllFormatsRepeated = rolls.map((roll) => roll.format);
        const formats = [...new Set(arrayWithAllFormatsRepeated)];
        const arrayWithAllIsosRepeated = rolls.map((roll) => roll.iso);
        const isosUnnordered = [...new Set(arrayWithAllIsosRepeated)];
        const isos = isosUnnordered.sort();
        this.setState({ rolls, brands, formats, isos, filteredRolls: rolls });
      });
  }

  resetFilters = () => {
    return (
      <button
        key={this.state.id}
        onClick={() => {
          this.setState({
            filteredRolls: this.state.rolls,
          });
        }}
      >
        ALL
      </button>
    );
  };

  renderFormatButtons = () => {
    return this.state.formats.map((format) => {
      return (
        <button
          key={this.state.id}
          onClick={() => {
            this.setState({ selected: format });
            const filteredRolls = this.state.rolls.filter(
              (roll) => roll.format === format
            );
            this.setState({ filteredRolls });
          }}
        >
          {format}
        </button>
      );
    });
  };
  renderBrandButtons = () => {
    return this.state.brands.map((brand) => {
      return (
        <button
          key={this.state.id}
          onClick={() => {
            this.setState({ selected: brand });
            const filteredRolls = this.state.rolls.filter(
              (roll) => roll.brand === brand
            );
            this.setState({ filteredRolls });
          }}
        >
          {brand}
        </button>
      );
    });
  };
  renderIsoButtons = () => {
    return this.state.isos.map((iso) => {
      return (
        <button
          key={this.state.id}
          onClick={() => {
            this.setState({ selected: iso });
            const filteredRolls = this.state.rolls.filter(
              (roll) => roll.iso === iso
            );
            this.setState({ filteredRolls });
          }}
        >
          {iso}
        </button>
      );
    });
  };
  // renderSelectionButtons = (z) => {
  //   // debugger;
  //   return this.state.z.map((y) => {
  //     return (
  //       <button
  //         onClick={() => {
  //           this.setState({ selected: y });
  //           const filteredRolls = this.state.z.filter((item) => item.y === y);
  //           this.setState({ filteredRolls });
  //         }}
  //       >
  //         {y}
  //       </button>
  //     );
  //   });
  // };

  render() {
    return (
      <div>
        <p>FILTER BY BRANDS:</p>
        {this.renderBrandButtons()}
        <p>FILTER BY FORMATS:</p>
        {this.renderFormatButtons()}
        <p>FILTER BY ISO:</p>
        {this.renderIsoButtons()}
        <p>ALL</p>
        {this.resetFilters()}
        <Roll info={this.state.filteredRolls} />
        {/* {this.renderSelectionButtons("iso")} */}
      </div>
    );
  }
}

export default Rolls;
