import React from "react";

class NewRollForm extends React.Component {
  state = {
    name: "",
    brand_id: null,
    brands: [],
    description: "",
  };
  componentDidMount() {
    fetch(`http://localhost:9292/brands`)
      .then((response) => response.json())
      .then((brands) => this.setState({ brands }));
  }
  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();

    const config = {
      method: "POST",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        brand_id: this.state.brand_id,
        description: this.state.description,
      }),
    };
    fetch("http://localhost:9292/rolls", config);
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            onChange={this.handleOnChange}
            type="text"
            name="name"
            id=""
            value={this.state.name}
          />
          <select onChange={this.handleOnChange} name="brand_id" id="">
            {this.renderBrands()}
          </select>
          <input
            onChange={this.handleOnChange}
            type="textarea"
            name="description"
            id=""
            value={this.state.description}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewRollForm;
