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

  handleChange = (e) => {};
  handleClickDelete = (e) => {
    const path = this.props.history.location.pathname;
    const array = path.split("/");
    const id = array[array.length - 1];
    console.log(id);

    fetch(`http://localhost:9292/rolls/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("deleted");
        alert(`You deleted ${this.state.roll.name}`);
        this.props.history.push("/rolls");
      });
  };

  handleClickEdit = (e) => {
    const path = this.props.history.location.pathname;
    const array = path.split("/");
    const id = array[array.length - 1];
    console.log(`Let's edit this roll ${id}`);
    this.props.history.push(`/rolls/new/${id}`);
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
        <Button variant="outline-primary" onClick={this.handleClickEdit}>
          EDIT
        </Button>{" "}
        <Button variant="outline-primary" onClick={this.handleClickDelete}>
          DELETE
        </Button>{" "}
        <Button variant="outline-primary" href="/rolls">
          BACK
        </Button>{" "}
      </Container>
    );
  }
}

export default RollDetails;
