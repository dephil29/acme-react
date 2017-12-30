import React, {Component} from 'react';
import ReadAll from './ReadAll.js';

class Create extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: "",
            price: "",
            category_id: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
  
    handleSubmit(e) {
        var data = {
            'name': this.state.name.trim(),
            'description': this.state.description.trim(),
            'price': this.state.price.trim(),
            'category_id': this.state.category_id.trim()
        }

        var formBody = [];

        for(let prop in data){
            // so the for loop won't walk the prototype chain
            if(data.hasOwnProperty(prop)){
                let encodedKey = encodeURIComponent(prop);
                let encodedValue = encodeURIComponent(data[prop]);
                formBody.push(encodedKey + '=' + encodedValue);
            }
        }

        formBody = formBody.join('&');
        console.log(formBody);

        fetch('http://localhost/acme-products/api/create_product.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        }).then(function(res){
            //send something back
            return res.text();
        }, function(err){
            return err.message;
        })
        // e.preventDefault();
    }
     
    render() {
      return (
        <div className="wrapper">
                <ReadAll />
                <div className="forms">
                    <div className="mainLinkContainer">
                        <a href="/create">C</a>
                        <a href="/read">R</a>
                        <a href="/update">U</a>
                        <a href="/delete">D</a>
                        <a href="/">/HOME</a>
                    </div>
                    <div className="create">
                        <h2>Create New Record</h2>
                        <div className="formAndKey">
                            <form onSubmit={this.handleSubmit}>
                                Name:<br/>
                                <input type="text" value={this.state.name}  onChange={this.handleChange} name="name"  /><br/><br/>
                                Description:<br/>
                                <input type="text" value={this.state.description}  onChange={this.handleChange} name="description" /><br/><br/>
                                Price:<br/>
                                <input type="text" value={this.state.price}  onChange={this.handleChange} name="price" /><br/><br/>
                                Category:<br/>
                                <input type="text" value={this.state.category_id}  onChange={this.handleChange} name="category_id" /><br/><br/>
                                <br/>
                                <input className="deleteButton button" type="submit" value="CREATE"/>
                            </form> 
                            <div className="key">
                                <p>The categories are as follows:</p>
                                <p>1 - Sports</p>
                                <p>2 - Personal</p>
                                <p>3 - something</p>
                                <p>4 - nothing</p>
                            </div>
                        </div>
                        <p>The server assigns the ID.</p>
                    </div>
                </div>
            </div>
      );
    }
  }

  export default Create;