import React from "react";
import Roll from "../components/Roll";
import { Container, Button, Row, Col } from "react-bootstrap";

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

  clickOnHome = () => {
    this.props.history.push(`/`);
  };

  resetFilters = () => {
    return (
      <Button
        variant="btn btn-outline-dark btn-sm"
        key={this.state.id}
        onClick={() => {
          this.setState({
            filteredRolls: this.state.rolls,
          });
        }}
      >
        RESET ALL FILTERS
      </Button>
    );
  };

  renderFormatButtons = () => {
    return this.state.formats.map((format) => {
      return (
        <Button
          variant="btn btn-outline-dark btn-sm"
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
          variant="btn btn-outline-dark btn-sm"
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
          variant="btn btn-outline-dark btn-sm"
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
      <Container className="centered" className="top">
        <Row>
          <button
            onClick={this.clickOnHome}
            type="button"
            class="btn btn-outline-dark btn-block"
          >
            FILMSTOCK DATABASE
          </button>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col className="col-3">
                <p>FILTER BY BRANDS:</p>
              </Col>
              <Col>{this.renderBrandButtons()}</Col>
            </Row>
            <Row>
              <Col className="col-3">
                <p>FILTER BY FORMATS:</p>
              </Col>
              <Col>{this.renderFormatButtons()}</Col>
            </Row>
            <Row>
              <Col className="col-3">
                <p> FILTER BY ISO:</p>
              </Col>
              <Col>{this.renderIsoButtons()}</Col>
            </Row>
            <Row>
              <Col>{this.resetFilters()}</Col>
            </Row>
          </Col>
        </Row>
        <Container className="container-fluid" className="rolls-grid">
          <Roll info={this.state.filteredRolls} click={this.clickOnRoll} />
        </Container>
        {/* {this.renderSelectionButtons("iso")} */}
      </Container>
    );
  }
}

export default Rolls;
