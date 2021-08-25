import React from "react";

class NewItemForm extends React.Component {
  state = {
    name: "",
    category_id: null,
    categories: [],
    user: "",
    users: [],
    description: "",
  };
  componentDidMount() {
    fetch(`http://localhost:9292/categories`)
      .then((response) => response.json())
      .then((categories) => this.setState({ categories }));
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
        category_id: this.state.category_id,
        description: this.state.description,
      }),
    };
    fetch("http://localhost:9292/items", config);
  };

  renderCategories = () => {
    return this.state.categories.map((category_id) => {
      return <option value={category_id.id}>{category_id.name}</option>;
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
          <select onChange={this.handleOnChange} name="category_id" id="">
            {this.renderCategories()}
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

export default NewItemForm;
