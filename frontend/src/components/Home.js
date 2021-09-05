import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "../App.css";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="centered">The Film Photography Database</h1>
        <Container className="container-fluid" className="home-card">
          <Row>
            <Col></Col>
            <Col>
              <Button variant="btn btn-outline-dark" href="rolls">
                EXPLORE THE DATABASE
              </Button>{" "}
              <Button variant="btn btn-outline-dark" href="rolls/new">
                ADD NEW FILMSTOCK
              </Button>{" "}
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Home;
