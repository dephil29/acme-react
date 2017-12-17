import React, {Component} from 'react';

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: 'Name',
            description: "Description",
            price: 0.00,
            id: "ID",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
  
    handleSubmit(event) {
        console.log("This may work one day!");
        fetch('http://localhost/acme-products/api/update_product.php', {
            method: 'POST',
            headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: JSON.stringify({name: "space", description: "maybe", price: "0", id: "16"})
          }).then(res => res.json())
            .then(res => console.log(res))
        event.preventDefault();
    }
     
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            Name:<br/>
            <input type="text" value={this.state.name}  onChange={this.handleChange} name="name"  /><br/><br/>
            Description:<br/>
            <input type="text" value={this.state.description}  onChange={this.handleChange} name="description" /><br/><br/>
            Price:<br/>
            <input type="text" value={this.state.price}  onChange={this.handleChange} name="price" /><br/><br/>
            ID:<br/>
            <input type="text" value={this.state.id}  onChange={this.handleChange} name="id" /><br/><br/>
            <br/>
            <input className="button" type="submit" value="SUBMIT"/>
        </form> 
      );
    }
  }

  export default Form;