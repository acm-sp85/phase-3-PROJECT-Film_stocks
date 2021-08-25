import React from 'react';


class NewItemForm extends React.Component {
    state = {
        name: ""
    }
    handleOnChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]: value})
    };
    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.name)
        const config = {
            method: "POST",
            header: {
                "Content-type": "application/json",
            }, 
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:9292/items', config)
    };

    render(){
        return (
            <div>
            <form onSubmit={this.handleOnSubmit}>
                <input onChange={this.handleOnChange} type="text" name="name" id="" value={this.state.name} />
                <button>Submit</button>

            </form>
            </div>
                
        )
    }
}

export default NewItemForm;