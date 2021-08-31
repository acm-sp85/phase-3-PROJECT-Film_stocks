import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import "../App.css";

class Home extends React.Component {
  render() {
    return (
      <Container className="container-fluid" className="home-card">
        <Row>
          <Button variant="btn btn-outline-dark" href="rolls">
            EXPLORE THE DATABASE
          </Button>{" "}
        </Row>
        <Row>
          <Button variant="btn btn-outline-dark" href="rolls/new">
            ADD NEW FILMSTOCK
          </Button>{" "}
        </Row>
      </Container>
    );
  }
}

export default Home;
