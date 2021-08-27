import React from "react";
import RollsGrid from "../components/RollsGrid";
import { Container } from "react-bootstrap";

class RollsContainer extends React.Component {
  state = {};

  componentDidMount() {}

  handleChange = (event) => {};

  render() {
    return (
      <Container>
        <a href="/">FILMSTOCK DATABASE</a>
        <h4>FILTER BY</h4>
        <h5>BRAND</h5>
        <h5>FORMAT</h5>
        <h5>COLOR/BW</h5>
        <h4>SORT BY PRICE +-</h4>
        <RollsGrid className="" />
      </Container>
    );
  }
}

export default RollsContainer;
