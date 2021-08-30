import React from "react";
import { Container } from "react-bootstrap";

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
        body: JSON.stringify(this.state),
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

  render() {
    const toUpdate = this.state.toUpdate;
    return (
      <div>
        <Container>
          <a href="/">FILMSTOCK DATABASE</a>
        </Container>
        <form onSubmit={this.handleOnSubmit}>
          <select onChange={this.handleOnChange} name="format_id" id="">
            {this.renderFormats()}
          </select>
          <label>
            Name:
            <input
              onChange={this.handleOnChange}
              type="text"
              name="name"
              id=""
              value={this.state.name}
            />
          </label>
          <select onChange={this.handleOnChange} name="brand_id" id="">
            {this.renderBrands()}
          </select>
          <label>
            Description:
            <input
              onChange={this.handleOnChange}
              type="textarea"
              name="description"
              id=""
              value={this.state.description}
            />
          </label>
          <label>
            ISO:
            <input
              onChange={this.handleOnChange}
              type="textarea"
              name="iso"
              id=""
              value={this.state.iso}
            />
          </label>
          <label>
            Price:
            <input
              onChange={this.handleOnChange}
              type="textarea"
              name="price"
              id=""
              value={this.state.price}
            />
          </label>
          <label>
            Image URL:
            <input
              onChange={this.handleOnChange}
              type="textarea"
              name="img_url"
              id=""
              value={this.state.img_url}
            />
          </label>
          {toUpdate ? <button>Update</button> : <button>Submit</button>}
        </form>
      </div>
    );
  }
}

export default NewRollForm;
