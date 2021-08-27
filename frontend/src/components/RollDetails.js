import React from "react";
import { Container, Button } from "react-bootstrap";

class RollDetails extends React.Component {
  state = {
    roll: {},
  };

  componentDidMount() {
    fetch(`http://localhost:9292/rolls/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((roll) => {
        this.setState({ roll });
      });
  }

  handleChange = (event) => {};
  handleClickDelete = (e) => {
    const path = this.props.history.location.pathname;
    const array = path.split("/");
    const id = array[array.length - 1];
  };

  render() {
    return (
      <Container>
        <h4>{this.state.roll.name}</h4>
        <p>{this.state.roll.brand}</p>
        <p>{this.state.roll.price}</p>
        <p>{this.state.roll.iso}</p>
        <p>{this.state.roll.description}</p>
        <img
          src={this.state.roll.img_url}
          alt="error"
          id={this.state.roll.id}
          className="eq-avatar"
        ></img>
        <Button variant="outline-primary">EDIT</Button>{" "}
        <Button variant="outline-primary" onClick={this.handleClick}>
          DELETE
        </Button>{" "}
        <Button variant="outline-primary" href="/">
          BACK
        </Button>{" "}
      </Container>
    );
  }
}

export default RollDetails;
