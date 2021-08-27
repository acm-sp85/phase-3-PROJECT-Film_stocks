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
        <RollsGrid className="" />
      </Container>
    );
  }
}

export default RollsContainer;
