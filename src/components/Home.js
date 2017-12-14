import React, {Component} from 'react';

//use this function if there is no id
function generateId(){
    return Math.random()
        .toString(36)
        .substr(2, 9);
}

class Home extends Component {
    state = {
        data: []
    }

    componentDidMount(){
        fetch('http://localhost/acme-products/api/read_all_products.php')
            .then(response => response.json())
            .then(data => this.setState({data: data}));
    }

    render(){
        console.log(generateId());
        const {data} = this.state;
        console.log(data);
        return (
            <div>
                <h2>I am home!</h2>
                <ul>
                {data.map(prod => (
                    <div key={prod.id}>
                        <h3>{prod.name}</h3>
                    </div>
                ))}
                </ul>
            </div>
        )
    }
}

export default Home;