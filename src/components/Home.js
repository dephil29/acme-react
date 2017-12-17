import React, {Component} from 'react';
import Form from './Form'

//use this function if there is no id
// function generateId(){
//     return Math.random()
//         .toString(36)
//         .substr(2, 9);
// }

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount(){
        fetch('http://localhost/acme-products/api/read_all_products.php')
            .then(response => response.json())
            .then(data => this.setState({data: data}));
    }

    render(){
        const {data} = this.state;
        return (
            <div>
                <h2>ACME Products</h2>
                <div className="thing">
                    <div className="list">
                        <ul>
                        {data.map(prod => (
                            <div className="tables" key={prod.id}>
                                <h3>Product Name: {prod.name}</h3>
                                <h4>Product Description: {prod.description}</h4>
                                <h4>Price: {prod.price}</h4>
                                <h4>ID: {prod.id}</h4>
                            </div>
                        ))}
                        </ul>
                    </div>
                    <div className="display">
                        <Form />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;