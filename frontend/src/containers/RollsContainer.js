import React from "react";
import Roll from "../components/Roll";
import { Container, Button } from "react-bootstrap";

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
        const isos = isosUnnordered.sort(function (a, b) {
          return a - b;
        });
        this.setState({ rolls, brands, formats, isos, filteredRolls: rolls });
      });
  }

  clickOnRoll = (e) => {
    console.log(e.target.id);
    const id = e.target.id;

    if (this.props.history) {
      this.props.history.push(`/rolls/${id}`);
    }
  };

  resetFilters = () => {
    return (
      <Button
        key={this.state.id}
        onClick={() => {
          this.setState({
            filteredRolls: this.state.rolls,
          });
        }}
      >
        ALL
      </Button>
    );
  };

  renderFormatButtons = () => {
    return this.state.formats.map((format) => {
      return (
        <Button
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
        </Button>
      );
    });
  };
  renderBrandButtons = () => {
    return this.state.brands.map((brand) => {
      return (
        <Button
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
        </Button>
      );
    });
  };
  renderIsoButtons = () => {
    return this.state.isos.map((iso) => {
      return (
        <Button
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
        </Button>
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
      <Container>
        <a href="/">FILMSTOCK DATABASE</a>

        <p>FILTER BY BRANDS:</p>
        {this.renderBrandButtons()}
        <p>FILTER BY FORMATS:</p>
        {this.renderFormatButtons()}
        <p>FILTER BY ISO:</p>
        {this.renderIsoButtons()}
        <p>ALL</p>
        {this.resetFilters()}
        <Roll info={this.state.filteredRolls} click={this.clickOnRoll} />
        {/* {this.renderSelectionButtons("iso")} */}
      </Container>
    );
  }
}

export default Rolls;
