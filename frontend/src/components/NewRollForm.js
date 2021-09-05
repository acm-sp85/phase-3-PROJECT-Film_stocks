import React from "react";
import { Container, Form, Button, FormLabel, Row, Col } from "react-bootstrap";

class NewRollForm extends React.Component {
  state = {
    name: "",
    brand_id: 1,
    format_id: 1,
    description: "",
    iso: null,
    price: null,
    img_url: "",
    formats: [],
    brands: [],
    toUpdate: false,
  };
  componentDidMount() {
    fetch(`http://localhost:9292/brands`)
      .then((response) => response.json())
      .then((brands) => this.setState({ brands }));

    fetch(`http://localhost:9292/formats`)
      .then((response) => response.json())
      .then((formats) => this.setState({ formats }));

    if (this.props.match.params.id) {
      const id = this.props.match.params.id;
      console.log(id);
      fetch(`http://localhost:9292/rolls/${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            name: data.name,
            brand_id: data.brand_id,
            format_id: data.format_id,
            description: data.description,
            iso: data.iso,
            price: data.price,
            img_url: data.img_url,
            toUpdate: true,
          });
        });
    }
  }
  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();

    if (this.state.toUpdate) {
      console.log("needs to update");
      const id = this.props.match.params.id;
      fetch(`http://localhost:9292/rolls/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          brand_id: this.state.brand_id,
          format_id: this.state.format_id,
          description: this.state.description,
          iso: this.state.iso,
          price: this.state.price,
          img_url: this.state.img_url,
        }),
      }).then(this.props.history.push(`/rolls/${id}`));
    } else {
      const config = {
        method: "POST",
        header: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.name,
          brand_id: this.state.brand_id,
          description: this.state.description,
          iso: this.state.iso,
          format_id: this.state.format_id,
          price: this.state.price,
          img_url: this.state.img_url,
        }),
      };
      fetch("http://localhost:9292/rolls", config)
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            this.props.history.push("/rolls");
          }
        });
    }
  };

  renderBrands = () => {
    return this.state.brands.map((brand_id) => {
      return (
        <option value={brand_id.id} key={brand_id.id}>
          {brand_id.name}
        </option>
      );
    });
  };
  renderFormats = () => {
    return this.state.formats.map((format_id) => {
      return (
        <option value={format_id.id} key={format_id.id}>
          {format_id.medium}
        </option>
      );
    });
  };

  clickOnHome = () => {
    this.props.history.push(`/`);
  };

  render() {
    const toUpdate = this.state.toUpdate;
    return (
      <div>
        <button
          onClick={this.clickOnHome}
          type="button"
          class="btn btn-outline-dark btn-block"
        >
          {" "}
          BACK
        </button>
        <Container className="centered" className="top">
          <Row>
            <Col></Col>
            <Col>
              <Form onSubmit={this.handleOnSubmit} className="form">
                {toUpdate ? (
                  <img
                    src={this.state.img_url}
                    alt="error"
                    id={this.state.id}
                    className="eq-avatar"
                  ></img>
                ) : null}
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  name="name"
                  aria-describedby="basic-addon1"
                  value={this.state.name}
                  onChange={this.handleOnChange}
                ></input>
                <select
                  class="form-select"
                  id=""
                  name="format_id"
                  onChange={this.handleOnChange}
                >
                  {this.renderFormats()}
                </select>
                <select
                  class="form-select"
                  id=""
                  name="brand_id"
                  onChange={this.handleOnChange}
                >
                  {this.renderBrands()}
                </select>

                <Form.Label>
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                    name="description"
                    placeholder="Description"
                    onChange={this.handleOnChange}
                    value={this.state.description}
                  ></textarea>
                </Form.Label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="ISO"
                  aria-describedby="basic-addon1"
                  value={this.state.iso}
                  onChange={this.handleOnChange}
                  name="iso"
                ></input>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Price"
                  aria-describedby="basic-addon1"
                  value={this.state.price}
                  onChange={this.handleOnChange}
                  name="price"
                  id=""
                ></input>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Image"
                  name="img_url"
                  id=""
                  aria-describedby="basic-addon1"
                  onChange={this.handleOnChange}
                  value={this.state.img_url}
                ></input>

                {toUpdate ? (
                  <Button
                    variant="btn btn-outline-dark btn-sm"
                    onClick={this.handleOnSubmit}
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    variant="btn btn-outline-dark btn-sm"
                    onClick={this.handleOnSubmit}
                  >
                    submit
                  </Button>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewRollForm;
