import React from 'react';
import {Link} from 'react-router-dom'


class Items extends React.Component {
    state = {
        items: []
    }

    componentDidMount(){
        fetch(`http://localhost:9292/items`)
            .then((response) => response.json())
            .then((items) => this.setState({items}))

    }

    renderItems = () => {
       return this.state.items.map((item) => {
            return <li>{item.name}</li>
        });
    };

    render(){
        return(
            <div>

            <Link to="/items/new">New Item</Link>
        <ul> {this.renderItems()}</ul> 
            </div>
        )
    }
}

export default Items;