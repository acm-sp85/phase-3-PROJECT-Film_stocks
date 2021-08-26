import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "../App.css";

class Home extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        <Button variant="outline-primary" href="rolls">
          EXPLORE THE DATABASE
        </Button>{" "}
        <Button variant="outline-primary" href="rolls/new">
          ADD NEW FILMSTOCK
        </Button>{" "}
      </Container>
    );
  }
}

export default Home;
