import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.roll.id !== this.state.roll.id) {
      fetch(`http://localhost:9292/rolls/${this.props.match.params.id}`)
        .then((response) => response.json())
        .then((roll) => {
          this.setState({ roll });
        });
    }
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
      <div>
        <Button variant="btn btn-outline-dark btn-sm" href="/rolls">
          BACK
        </Button>{" "}
        <Container className="centered">
          <Row>
            <Col>
              <h4>{this.state.roll.name}</h4>
              <p>{this.state.roll.brand}</p>
              <img
                src={this.state.roll.img_url}
                alt="error"
                id={this.state.roll.id}
                className="eq-avatar"
              ></img>
              <p>ISO:{this.state.roll.iso}</p>
              <p>Price: ${this.state.roll.price}</p>
            </Col>
            <Col>
              <p>{this.state.roll.description}</p>
            </Col>
          </Row>
          <Button
            variant="btn btn-outline-dark btn-sm"
            onClick={this.handleClickEdit}
          >
            EDIT
          </Button>{" "}
          <Button
            variant="btn btn-outline-danger btn-sm"
            onClick={this.handleClickDelete}
          >
            DELETE
          </Button>{" "}
        </Container>
      </div>
    );
  }
}

export default RollDetails;
